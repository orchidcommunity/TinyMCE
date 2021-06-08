application.register("tinymce", class extends window.Controller {
    /**
     *
     */
    connect() {
        let platformController = window.platform;

        if (typeof platformController === "undefined") {
            platformController = this;
        }

        tinymce.baseURL = platformController.prefix('/resources/tinymce/tinymce');

        const selector = this.element.querySelector('.tinymce').id;
        const input = this.element.querySelector('input');

        let plugins = 'image media table link paste contextmenu textpattern autolink codesample';
        let toolbar1 = '';
        let inline = true;

        if (this.element.dataset.theme === 'modern') {
            plugins = 'print autosave autoresize preview paste code searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern';
            toolbar1 = 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | ltr rtl';
            inline = false;
        }

        // for remove cache
        tinymce.remove(`#${selector}`);

        tinymce.init({
            branding: false,
            selector: `#${selector}`,
            theme: this.element.dataset.theme,
            min_height: 300,
            height: 300,
            max_height: 600,
            plugins,
            toolbar1,
            insert_toolbar: 'quickimage quicktable media codesample fullscreen',
            selection_toolbar:
                'bold italic | quicklink h2 h3 blockquote | alignleft aligncenter alignright alignjustify | outdent indent | removeformat ',
            inline,
            convert_urls: false,
            image_caption: true,
            image_title: true,
            image_class_list: [
                {
                    title: 'None',
                    value: '',
                },
                {
                    title: 'Responsive',
                    value: 'img-fluid',
                },
            ],
            setup: (element) => {
                element.on('change', () => {
                    $(input).val(element.getContent());
                });
            },
            images_upload_handler: this.upload,
        });
    }

    /**
     *
     * @param blobInfo
     * @param success
     */
    upload(blobInfo, success) {
        const data = new FormData();
        data.append('file', blobInfo.blob());

        let platformController = window.platform;

        if (typeof platformController === 'undefined') {
            platformController = this;
        }

        axios
            .post(platformController.prefix('/systems/files'), data)
            .then((response) => {
                success(response.data.url);
            })
            .catch((error) => {
                platformController.alert('Validation error', 'File upload error');
                console.warn(error);
            });
    }

    disconnect() {
        tinymce.remove(`#${this.element.querySelector('.tinymce').id}`);
    }
});
