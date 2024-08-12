(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,n(r.key),r)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,n||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}function o(e,n,o){return n=i(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,r()?Reflect.construct(n,o||[],i(e).constructor):n.apply(e,o))}function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(r=function(){return!!t})()}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}application.register("tinymce",function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,t,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(t,window.Controller),n=t,(r=[{key:"connect",value:function(){var t=this.element.querySelector(".tinymce").id,e=this.element.querySelector("input");tinymce.baseURL=this.prefix("/resources/tinymce/tinymce"),tinymce.remove("#".concat(t));var n,o={branding:!1,selector:"#".concat(t),theme:this.element.dataset.theme,language:this.element.dataset.language,min_height:300,height:300,max_height:600,plugins:"print autosave autoresize preview paste code searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern",toolbar1:"formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | ltr rtl",insert_toolbar:"quickimage quicktable media codesample fullscreen",selection_toolbar:"bold italic | quicklink h2 h3 blockquote | alignleft aligncenter alignright alignjustify | outdent indent | removeformat ",inline:!1,convert_urls:!1,image_caption:!0,image_title:!0,image_class_list:[{title:"None",value:""},{title:"Responsive",value:"img-fluid"}],setup:function(t){t.on("change",(function(){$(e).val(t.getContent())}))},images_upload_handler:this.upload};this.element.dataset.configExt&&(n=JSON.parse(this.element.dataset.configExt)),n instanceof Object&&!(n instanceof Array)&&(o=Object.assign(o,n)),tinymce.init(o)}},{key:"upload",value:function(t,e){var n=new FormData;n.append("file",t.blob()),axios.post(function(t){var e=document.head.querySelector('meta[name="dashboard-prefix"]'),n="".concat(e.content).concat(t).replace(/\/\/+/g,"/");return"".concat(location.protocol,"//").concat(location.hostname).concat(location.port?":".concat(location.port):"").concat(n)}("/systems/files"),n).then((function(t){e(t.data.url)})).catch((function(t){alert("Validation error : File upload error"),console.warn(t)}))}},{key:"disconnect",value:function(){tinymce.remove("#".concat(this.element.querySelector(".tinymce").id))}}])&&e(n.prototype,r),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,i}())})();