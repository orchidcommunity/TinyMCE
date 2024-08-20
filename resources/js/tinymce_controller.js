application.register("tinymce", class extends window.Controller {
    /**
     *
     */
    connect() {
        const selector = this.element.querySelector('.tinymce').id;
        const input = this.element.querySelector('input');
        tinymce.baseURL = this.prefix('/../js/platform/tinymce/tinymce');

        let plugins = 'autosave autoresize preview code searchreplace autolink directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount';
        let toolbar1 = 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | ltr rtl';
        let inline = false;

        // for remove cache
        tinymce.remove(`#${selector}`);

        let config = {
            branding: false,
            license_key: 'gpl',
            selector: `#${selector}`,
            theme: this.element.dataset.theme,
            language: this.element.dataset.language,
            min_height: 300,
            height: 300,
            max_height: 600,
            plugins,
            toolbar1,
            insert_toolbar: 'quickimage quicktable media codesample fullscreen',
            selection_toolbar:
                'bold italic | quicklink h2 h3 blockquote | alignleft aligncenter alignright alignjustify | outdent indent | removeformat ', inline,
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
        };

        let configExt;
        if (this.element.dataset.configExt) {
            configExt = JSON.parse(this.element.dataset.configExt);
        }

        if ((configExt instanceof Object) && !(configExt instanceof Array)) {
            config = Object.assign(config, configExt);
        }

        tinymce.init(config);
    }

    /**
     *
     * @param blobInfo
     * @param success
     */
    upload(blobInfo, success) {
        const data = new FormData();
        data.append('file', blobInfo.blob());

        let prefix = function (path) {
            let prefix = document.head.querySelector('meta[name="dashboard-prefix"]');
            // Remove double slashes from url
            let pathname = `${prefix.content}${path}`.replace(/\/\/+/g, '/')
            return `${location.protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}${pathname}`;
        };

        axios
            .post(prefix('/systems/files'), data)
            .then((response) => {
                success(response.data.url);
            })
            .catch((error) => {
                alert('Validation error : File upload error');
                console.warn(error);
            });
    }

    disconnect() {
        tinymce.remove(`#${this.element.querySelector('.tinymce').id}`);
    }
});
