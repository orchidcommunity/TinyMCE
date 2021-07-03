!function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
            return e[t]
        }.bind(null, r));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 0)
}({
    0: function (e, t, n) {
        e.exports = n("BHGE")
    }, BHGE: function (e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function i(e, t) {
            return (i = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function c(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = a(e);
                if (t) {
                    var r = a(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return l(this, n)
            }
        }

        function l(e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function a(e) {
            return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        application.register("tinymce", function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && i(e, t)
            }(u, window.Controller);
            var t, n, l, a = c(u);

            function u() {
                return o(this, u), a.apply(this, arguments)
            }

            return t = u, (n = [{
                key: "connect", value: function () {
                    console.log("TinyMCE connected");
                    var e = window.platform;
                    void 0 === e && (e = this), tinymce.baseURL = e.prefix("/resources/tinymce/tinymce");
                    var t = this.element.querySelector(".tinymce").id, n = this.element.querySelector("input");
                    tinymce.remove("#".concat(t)), tinymce.init({
                        branding: !1,
                        selector: "#".concat(t),
                        min_height: 300,
                        height: 300,
                        max_height: 600,
                        plugins: "print autosave autoresize preview paste code searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern",
                        toolbar1: "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | ltr rtl",
                        insert_toolbar: "quickimage quicktable media codesample fullscreen",
                        selection_toolbar: "bold italic | quicklink h2 h3 blockquote | alignleft aligncenter alignright alignjustify | outdent indent | removeformat ",
                        inline: !1,
                        convert_urls: !1,
                        image_caption: !0,
                        image_title: !0,
                        image_class_list: [{title: "None", value: ""}, {title: "Responsive", value: "img-fluid"}],
                        setup: function (e) {
                            e.on("change", (function () {
                                $(n).val(e.getContent())
                            }))
                        },
                        images_upload_handler: this.upload
                    })
                }
            }, {
                key: "upload", value: function (e, t) {
                    var n = new FormData;
                    n.append("file", e.blob());
                    var o = window.platform;
                    void 0 === o && (o = this), axios.post(o.prefix("/systems/files"), n).then((function (e) {
                        t(e.data.url)
                    })).catch((function (e) {
                        o.alert("Validation error", "File upload error"), console.warn(e)
                    }))
                }
            }, {
                key: "disconnect", value: function () {
                    tinymce.remove("#".concat(this.element.querySelector(".tinymce").id))
                }
            }]) && r(t.prototype, n), l && r(t, l), u
        }())
    }
});