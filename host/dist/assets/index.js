System.register(['./_virtual___federation_fn_import-a03e6aba.js'], (function (exports, module) {
    'use strict';
    var __vitePreload, importShared;
    return {
        setters: [module => {
            __vitePreload = module.__vitePreload;
            importShared = module.importShared;
        }],
        execute: (async function () {var __vite_style__ = document.createElement('style');__vite_style__.textContent = "\n._green_ti6as_2 {\n  color: green;\n}\n._bold_ti6as_5 {\n  font-weight: bold;\n}\n\n._button_1s3ds_2 {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\nimg[data-v-d341dbf3] {\n  width: 200px;\n}\n.h1[data-v-d341dbf3] {\n  border: 5px solid red !important;\n  padding: 1px !important;\n}\n.section[data-v-d341dbf3] {\n  border: 1px solid black;\n  padding: 10px;\n}\n";document.head.appendChild(__vite_style__);

            false&&(function polyfill() {
                const relList = document.createElement('link').relList;
                if (relList && relList.supports && relList.supports('modulepreload')) {
                    return;
                }
                for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
                    processPreload(link);
                }
                new MutationObserver((mutations) => {
                    for (const mutation of mutations) {
                        if (mutation.type !== 'childList') {
                            continue;
                        }
                        for (const node of mutation.addedNodes) {
                            if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                                processPreload(node);
                        }
                    }
                }).observe(document, { childList: true, subtree: true });
                function getFetchOpts(link) {
                    const fetchOpts = {};
                    if (link.integrity)
                        fetchOpts.integrity = link.integrity;
                    if (link.referrerPolicy)
                        fetchOpts.referrerPolicy = link.referrerPolicy;
                    if (link.crossOrigin === 'use-credentials')
                        fetchOpts.credentials = 'include';
                    else if (link.crossOrigin === 'anonymous')
                        fetchOpts.credentials = 'omit';
                    else
                        fetchOpts.credentials = 'same-origin';
                    return fetchOpts;
                }
                function processPreload(link) {
                    if (link.ep)
                        // ep marker = processed
                        return;
                    link.ep = true;
                    // prepopulate the load record
                    const fetchOpts = getFetchOpts(link);
                    fetch(link.href, fetchOpts);
                }
            }());

            const remotesMap = {
            'css-modules':{url:'http://localhost:5003/assets/remoteEntry.js',format:'esm',from:'vite'}
            };
                            const currentImports = {};
                            const loadJS = async (url, fn) => {
                                const resolvedUrl = typeof url === 'function' ? await url() : url;
                                const script = document.createElement('script');
                                script.type = 'text/javascript';
                                script.onload = fn;
                                script.src = resolvedUrl;
                                document.getElementsByTagName('head')[0].appendChild(script);
                            };

                            function get(name, remoteFrom) {
                                return __federation_import(name).then(module => () => {
                                    if (remoteFrom === 'webpack') {
                                        return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                                    }
                                    return module
                                })
                            }
                            
                            function merge(obj1, obj2) {
                              const mergedObj = Object.assign(obj1, obj2);
                              for (const key of Object.keys(mergedObj)) {
                                if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                                  mergedObj[key] = merge(mergedObj[key], obj2[key]);
                                }
                              }
                              return mergedObj;
                            }

                            const wrapShareModule = remoteFrom => {
                              return merge({
                                'vue':{'3.5.11':{get:()=>get(new URL('__federation_shared_vue-57311581.js', module.meta.url).href, remoteFrom), loaded:1}},'pinia':{'2.2.4':{get:()=>get(new URL('__federation_shared_pinia-89a4b986.js', module.meta.url).href, remoteFrom), loaded:1}}
                              }, (globalThis.__federation_shared__ || {})['default'] || {});
                            };

                            async function __federation_import(name) {
                                currentImports[name] ??= __vitePreload(() => module.import(name),false?"__VITE_PRELOAD__":void 0);
                                return currentImports[name]
                            }

                            async function __federation_method_ensure(remoteId) {
                                const remote = remotesMap[remoteId];
                                if (!remote.inited) {
                                    if ('var' === remote.format) {
                                        // loading js with script tag
                                        return new Promise(resolve => {
                                            const callback = () => {
                                                if (!remote.inited) {
                                                    remote.lib = window[remoteId];
                                                    remote.lib.init(wrapShareModule(remote.from));
                                                    remote.inited = true;
                                                }
                                                resolve(remote.lib);
                                            };
                                            return loadJS(remote.url, callback);
                                        });
                                    } else if (['esm', 'systemjs'].includes(remote.format)) {
                                        // loading js with import(...)
                                        return new Promise((resolve, reject) => {
                                            const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                            getUrl().then(url => {
                                                __vitePreload(() => module.import(/* @vite-ignore */ url),false?"__VITE_PRELOAD__":void 0).then(lib => {
                                                    if (!remote.inited) {
                                                        const shareScope = wrapShareModule(remote.from);
                                                        lib.init(shareScope);
                                                        remote.lib = lib;
                                                        remote.lib.init(shareScope);
                                                        remote.inited = true;
                                                    }
                                                    resolve(remote.lib);
                                                }).catch(reject);
                                            });
                                        })
                                    }
                                } else {
                                    return remote.lib;
                                }
                            }

                            function __federation_method_wrapDefault(module, need) {
                                if (!module?.default && need) {
                                    let obj = Object.create(null);
                                    obj.default = module;
                                    obj.__esModule = true;
                                    return obj;
                                }
                                return module;
                            }

                            function __federation_method_getRemote(remoteName, componentName) {
                                return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                            }

            const {defineStore} = await importShared('pinia');


            const useStore = defineStore('main', {
                state: () => ({
                    counter: 5
                }),

                actions: {
                    increase() {
                        this.counter++;
                    }
                }
            });

            const green = "_green_ti6as_2";
            const bold = "_bold_ti6as_5";
            const style0$1 = {
            	green: green,
            	bold: bold
            };

            const _export_sfc = (sfc, props) => {
              const target = sfc.__vccOpts || sfc;
              for (const [key, val] of props) {
                target[key] = val;
              }
              return target;
            };

            const _sfc_main$2 = {
              data() {
                return {
                  title: 'Layout Component in Action..'
                }
              },
              computed:{
                cartCount() {
                  const store = useStore();
                  return store.counter
                }
              }
            };

            const {toDisplayString:_toDisplayString$1,normalizeClass:_normalizeClass$1,createElementVNode:_createElementVNode$1,Fragment:_Fragment,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');


            function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
              return (_openBlock$2(), _createElementBlock$1(_Fragment, null, [
                _createElementVNode$1("div", {
                  class: _normalizeClass$1(_ctx.$style.green)
                }, _toDisplayString$1($data.title), 3),
                _createElementVNode$1("p", {
                  id: "cart-item-layout",
                  class: _normalizeClass$1(_ctx.$style.green)
                }, "cartItems from pinia: " + _toDisplayString$1($options.cartCount), 3),
                _createElementVNode$1("div", {
                  class: _normalizeClass$1([_ctx.$style.green, _ctx.$style.bold])
                }, "green and bold", 2)
              ], 64))
            }
            const cssModules$1 = {
            "$style":style0$1,
            };
            const Content = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2],['__cssModules',cssModules$1]]);

            const {h} = await importShared('vue');

            const button$1 = {
                name: "btn-component",
                render() {
                    return h(
                        "button",
                        {
                            id: "btn-layout",
                            style: {
                                'background-color': '#4CAF50',
                                'border': 'none',
                                'color': 'white',
                                'padding': '15px 32px',
                                'text-align': 'center',
                                'text-decoration': 'none',
                                'display': 'inline-block',
                                'font-size': '16px'
                            },
                            onClick: () => {
                                const store = useStore();
                                store.increase();
                            }
                        },
                        "Hello Layout Button"
                    );
                },
            };

            const button = "_button_1s3ds_2";
            const style0 = {
            	button: button
            };

            const _sfc_main$1 = {
              data: function () {
                return {
                  title: 'I will not be used'
                }
              }
            };

            const {toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,normalizeClass:_normalizeClass,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');


            const _hoisted_1 = { id: "home-unusedbutton" };

            function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
              return (_openBlock$1(), _createElementBlock("div", _hoisted_1, [
                _createElementVNode("h1", null, _toDisplayString(_ctx.title), 1),
                _createElementVNode("button", {
                  class: _normalizeClass(_ctx.$style.button),
                  onClick: _cache[0] || (_cache[0] = $event => (_ctx.title = _ctx.title + '!'))
                }, "Unused Layout Button", 2)
              ]))
            }
            const cssModules = {
            "$style":style0,
            };
            const UnusedButton = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__cssModules',cssModules]]);

            const Layout_vue_vue_type_style_index_0_scoped_d341dbf3_lang = '';

            const _sfc_main = {  components: {
                Content,
                Button: button$1,
                UnusedButton,
              },};

            const {resolveComponent:_resolveComponent,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');


            function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
              const _component_css_modules_button = _resolveComponent("css-modules-button");

              return (_openBlock(), _createBlock(_component_css_modules_button))
            }
            const Layout = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-d341dbf3"]]);

            const {createApp,defineAsyncComponent} = await importShared('vue');

            const {createPinia} = await importShared('pinia');
            const CssModuleButton = defineAsyncComponent(() => __federation_method_getRemote("css-modules" , "./Button").then(module=>__federation_method_wrapDefault(module, true)));


            const app = createApp(Layout);

            app.component("css-modules-button", CssModuleButton);

            app.use(createPinia());
            app.mount("#root");

        })
    };
}));
