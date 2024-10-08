System.register(['./_virtual___federation_fn_import-a03e6aba.js'], (function (exports, module) {
    'use strict';
    var __vitePreload, importShared;
    return {
        setters: [module => {
            __vitePreload = module.__vitePreload;
            importShared = module.importShared;
        }],
        execute: (async function () {var __vite_style__ = document.createElement('style');__vite_style__.textContent = "\nimg[data-v-9c9fa4c6] {\n  width: 200px;\n}\n.h1[data-v-9c9fa4c6] {\n  border: 5px solid red !important;\n  padding: 1px !important;\n}\n.section[data-v-9c9fa4c6] {\n  border: 1px solid black;\n  padding: 10px;\n}\n";document.head.appendChild(__vite_style__);

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

            const Layout_vue_vue_type_style_index_0_scoped_9c9fa4c6_lang = '';

            const _export_sfc = (sfc, props) => {
              const target = sfc.__vccOpts || sfc;
              for (const [key, val] of props) {
                target[key] = val;
              }
              return target;
            };

            const {defineAsyncComponent: defineAsyncComponent$1} = await importShared('vue');

            // import Content from "./components/Content.vue";
            // import Button from "./components/Button.js";
            // import UnusedButton from "./components/UnusedButton.vue";
            const CssModuleButton = defineAsyncComponent$1(() => __federation_method_getRemote("css-modules" , "./Button").then(module=>__federation_method_wrapDefault(module, true)));
            // app.component("css-modules-button", CssModuleButton);
            const _sfc_main = {  components: {
                // Content,
                // Button,
                // UnusedButton,
                'css-modules-button': CssModuleButton
              },};

            const {resolveComponent:_resolveComponent,createVNode:_createVNode,createTextVNode:_createTextVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


            function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
              const _component_css_modules_button = _resolveComponent("css-modules-button");

              return (_openBlock(), _createElementBlock("div", null, [
                _cache[0] || (_cache[0] = _createTextVNode(" 改变了 ")),
                _createVNode(_component_css_modules_button)
              ]))
            }
            const Layout = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-9c9fa4c6"]]);

            const {createApp,defineAsyncComponent} = await importShared('vue');

            const {createPinia} = await importShared('pinia');



            const app = createApp(Layout);



            app.use(createPinia());
            app.mount("#root");

        })
    };
}));
