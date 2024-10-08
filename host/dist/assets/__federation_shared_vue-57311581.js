System.register(['./runtime-core.esm-bundler-cefba831.js'], (function (exports, module) {
  'use strict';
  var getCurrentInstance, onBeforeMount, watchPostEffect, onMounted, onUnmounted, isPlainObject, extend, nextTick, hasOwn, unref, camelize, hyphenate, createVNode, EMPTY_OBJ, looseToNumber, isArray, looseIndexOf, isSet, looseEqual, isFunction, isString, h, BaseTransition, isObject, Fragment, Static, defineComponent, toNumber, invokeArrayFns, createRenderer, createHydrationRenderer, BaseTransitionPropsValidators, useTransitionState, onUpdated, toRaw, getTransitionRawChildren, setTransitionHooks, resolveTransitionHooks, isOn, isModelListener, capitalize, includeBooleanAttr, isSymbol, isSpecialBooleanAttr, callWithAsyncErrorHandling;
  return {
    setters: [module => {
      getCurrentInstance = module.getCurrentInstance;
      onBeforeMount = module.onBeforeMount;
      watchPostEffect = module.watchPostEffect;
      onMounted = module.onMounted;
      onUnmounted = module.onUnmounted;
      isPlainObject = module.isPlainObject;
      extend = module.extend;
      nextTick = module.nextTick;
      hasOwn = module.hasOwn;
      unref = module.unref;
      camelize = module.camelize;
      hyphenate = module.hyphenate;
      createVNode = module.createVNode;
      EMPTY_OBJ = module.EMPTY_OBJ;
      looseToNumber = module.looseToNumber;
      isArray = module.isArray;
      looseIndexOf = module.looseIndexOf;
      isSet = module.isSet;
      looseEqual = module.looseEqual;
      isFunction = module.isFunction;
      isString = module.isString;
      h = module.h;
      BaseTransition = module.BaseTransition;
      isObject = module.isObject;
      Fragment = module.Fragment;
      Static = module.Static;
      defineComponent = module.defineComponent;
      toNumber = module.toNumber;
      invokeArrayFns = module.invokeArrayFns;
      createRenderer = module.createRenderer;
      createHydrationRenderer = module.createHydrationRenderer;
      BaseTransitionPropsValidators = module.BaseTransitionPropsValidators;
      useTransitionState = module.useTransitionState;
      onUpdated = module.onUpdated;
      toRaw = module.toRaw;
      getTransitionRawChildren = module.getTransitionRawChildren;
      setTransitionHooks = module.setTransitionHooks;
      resolveTransitionHooks = module.resolveTransitionHooks;
      isOn = module.isOn;
      isModelListener = module.isModelListener;
      capitalize = module.capitalize;
      includeBooleanAttr = module.includeBooleanAttr;
      isSymbol = module.isSymbol;
      isSpecialBooleanAttr = module.isSpecialBooleanAttr;
      callWithAsyncErrorHandling = module.callWithAsyncErrorHandling;
      exports({ BaseTransition: module.BaseTransition, BaseTransitionPropsValidators: module.BaseTransitionPropsValidators, Comment: module.Comment, DeprecationTypes: module.DeprecationTypes, EffectScope: module.EffectScope, ErrorCodes: module.ErrorCodes, ErrorTypeStrings: module.ErrorTypeStrings, Fragment: module.Fragment, KeepAlive: module.KeepAlive, ReactiveEffect: module.ReactiveEffect, Static: module.Static, Suspense: module.Suspense, Teleport: module.Teleport, Text: module.Text, TrackOpTypes: module.TrackOpTypes, TriggerOpTypes: module.TriggerOpTypes, assertNumber: module.assertNumber, callWithAsyncErrorHandling: module.callWithAsyncErrorHandling, callWithErrorHandling: module.callWithErrorHandling, camelize: module.camelize, capitalize: module.capitalize, cloneVNode: module.cloneVNode, compatUtils: module.compatUtils, computed: module.computed, createBlock: module.createBlock, createCommentVNode: module.createCommentVNode, createElementBlock: module.createElementBlock, createElementVNode: module.createBaseVNode, createHydrationRenderer: module.createHydrationRenderer, createPropsRestProxy: module.createPropsRestProxy, createRenderer: module.createRenderer, createSlots: module.createSlots, createStaticVNode: module.createStaticVNode, createTextVNode: module.createTextVNode, createVNode: module.createVNode, customRef: module.customRef, defineAsyncComponent: module.defineAsyncComponent, defineComponent: module.defineComponent, defineEmits: module.defineEmits, defineExpose: module.defineExpose, defineModel: module.defineModel, defineOptions: module.defineOptions, defineProps: module.defineProps, defineSlots: module.defineSlots, devtools: module.devtools, effect: module.effect, effectScope: module.effectScope, getCurrentInstance: module.getCurrentInstance, getCurrentScope: module.getCurrentScope, getCurrentWatcher: module.getCurrentWatcher, getTransitionRawChildren: module.getTransitionRawChildren, guardReactiveProps: module.guardReactiveProps, h: module.h, handleError: module.handleError, hasInjectionContext: module.hasInjectionContext, hydrateOnIdle: module.hydrateOnIdle, hydrateOnInteraction: module.hydrateOnInteraction, hydrateOnMediaQuery: module.hydrateOnMediaQuery, hydrateOnVisible: module.hydrateOnVisible, initCustomFormatter: module.initCustomFormatter, inject: module.inject, isMemoSame: module.isMemoSame, isProxy: module.isProxy, isReactive: module.isReactive, isReadonly: module.isReadonly, isRef: module.isRef, isRuntimeOnly: module.isRuntimeOnly, isShallow: module.isShallow, isVNode: module.isVNode, markRaw: module.markRaw, mergeDefaults: module.mergeDefaults, mergeModels: module.mergeModels, mergeProps: module.mergeProps, nextTick: module.nextTick, normalizeClass: module.normalizeClass, normalizeProps: module.normalizeProps, normalizeStyle: module.normalizeStyle, onActivated: module.onActivated, onBeforeMount: module.onBeforeMount, onBeforeUnmount: module.onBeforeUnmount, onBeforeUpdate: module.onBeforeUpdate, onDeactivated: module.onDeactivated, onErrorCaptured: module.onErrorCaptured, onMounted: module.onMounted, onRenderTracked: module.onRenderTracked, onRenderTriggered: module.onRenderTriggered, onScopeDispose: module.onScopeDispose, onServerPrefetch: module.onServerPrefetch, onUnmounted: module.onUnmounted, onUpdated: module.onUpdated, onWatcherCleanup: module.onWatcherCleanup, openBlock: module.openBlock, popScopeId: module.popScopeId, provide: module.provide, proxyRefs: module.proxyRefs, pushScopeId: module.pushScopeId, queuePostFlushCb: module.queuePostFlushCb, reactive: module.reactive, readonly: module.readonly, ref: module.ref, registerRuntimeCompiler: module.registerRuntimeCompiler, renderList: module.renderList, renderSlot: module.renderSlot, resolveComponent: module.resolveComponent, resolveDirective: module.resolveDirective, resolveDynamicComponent: module.resolveDynamicComponent, resolveFilter: module.resolveFilter, resolveTransitionHooks: module.resolveTransitionHooks, setBlockTracking: module.setBlockTracking, setDevtoolsHook: module.setDevtoolsHook, setTransitionHooks: module.setTransitionHooks, shallowReactive: module.shallowReactive, shallowReadonly: module.shallowReadonly, shallowRef: module.shallowRef, ssrContextKey: module.ssrContextKey, ssrUtils: module.ssrUtils, stop: module.stop, toDisplayString: module.toDisplayString, toHandlerKey: module.toHandlerKey, toHandlers: module.toHandlers, toRaw: module.toRaw, toRef: module.toRef, toRefs: module.toRefs, toValue: module.toValue, transformVNodeArgs: module.transformVNodeArgs, triggerRef: module.triggerRef, unref: module.unref, useAttrs: module.useAttrs, useId: module.useId, useModel: module.useModel, useSSRContext: module.useSSRContext, useSlots: module.useSlots, useTemplateRef: module.useTemplateRef, useTransitionState: module.useTransitionState, version: module.version, warn: module.warn, watch: module.watch, watchEffect: module.watchEffect, watchPostEffect: module.watchPostEffect, watchSyncEffect: module.watchSyncEffect, withAsyncContext: module.withAsyncContext, withCtx: module.withCtx, withDefaults: module.withDefaults, withDirectives: module.withDirectives, withMemo: module.withMemo, withScopeId: module.withScopeId });
    }],
    execute: (function () {

      exports({
        defineCustomElement: defineCustomElement,
        useCssModule: useCssModule,
        useCssVars: useCssVars,
        useHost: useHost,
        useShadowRoot: useShadowRoot
      });

      /**
      * @vue/runtime-dom v3.5.11
      * (c) 2018-present Yuxi (Evan) You and Vue contributors
      * @license MIT
      **/

      let policy = void 0;
      const tt = typeof window !== "undefined" && window.trustedTypes;
      if (tt) {
        try {
          policy = /* @__PURE__ */ tt.createPolicy("vue", {
            createHTML: (val) => val
          });
        } catch (e) {
        }
      }
      const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
      const svgNS = "http://www.w3.org/2000/svg";
      const mathmlNS = "http://www.w3.org/1998/Math/MathML";
      const doc = typeof document !== "undefined" ? document : null;
      const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
      const nodeOps = {
        insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
        },
        remove: (child) => {
          const parent = child.parentNode;
          if (parent) {
            parent.removeChild(child);
          }
        },
        createElement: (tag, namespace, is, props) => {
          const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
          if (tag === "select" && props && props.multiple != null) {
            el.setAttribute("multiple", props.multiple);
          }
          return el;
        },
        createText: (text) => doc.createTextNode(text),
        createComment: (text) => doc.createComment(text),
        setText: (node, text) => {
          node.nodeValue = text;
        },
        setElementText: (el, text) => {
          el.textContent = text;
        },
        parentNode: (node) => node.parentNode,
        nextSibling: (node) => node.nextSibling,
        querySelector: (selector) => doc.querySelector(selector),
        setScopeId(el, id) {
          el.setAttribute(id, "");
        },
        // __UNSAFE__
        // Reason: innerHTML.
        // Static content here can only come from compiled templates.
        // As long as the user only uses trusted templates, this is safe.
        insertStaticContent(content, parent, anchor, namespace, start, end) {
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          if (start && (start === end || start.nextSibling)) {
            while (true) {
              parent.insertBefore(start.cloneNode(true), anchor);
              if (start === end || !(start = start.nextSibling)) break;
            }
          } else {
            templateContainer.innerHTML = unsafeToTrustedHTML(
              namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
            );
            const template = templateContainer.content;
            if (namespace === "svg" || namespace === "mathml") {
              const wrapper = template.firstChild;
              while (wrapper.firstChild) {
                template.appendChild(wrapper.firstChild);
              }
              template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
          }
          return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
          ];
        }
      };

      const TRANSITION = "transition";
      const ANIMATION = "animation";
      const vtcKey = Symbol("_vtc");
      const DOMTransitionPropsValidators = {
        name: String,
        type: String,
        css: {
          type: Boolean,
          default: true
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
      };
      const TransitionPropsValidators = /* @__PURE__ */ extend(
        {},
        BaseTransitionPropsValidators,
        DOMTransitionPropsValidators
      );
      const decorate$1 = (t) => {
        t.displayName = "Transition";
        t.props = TransitionPropsValidators;
        return t;
      };
      const Transition = exports('Transition', /* @__PURE__ */ decorate$1(
        (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
      ));
      const callHook = (hook, args = []) => {
        if (isArray(hook)) {
          hook.forEach((h2) => h2(...args));
        } else if (hook) {
          hook(...args);
        }
      };
      const hasExplicitCallback = (hook) => {
        return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
      };
      function resolveTransitionProps(rawProps) {
        const baseProps = {};
        for (const key in rawProps) {
          if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
          }
        }
        if (rawProps.css === false) {
          return baseProps;
        }
        const {
          name = "v",
          type,
          duration,
          enterFromClass = `${name}-enter-from`,
          enterActiveClass = `${name}-enter-active`,
          enterToClass = `${name}-enter-to`,
          appearFromClass = enterFromClass,
          appearActiveClass = enterActiveClass,
          appearToClass = enterToClass,
          leaveFromClass = `${name}-leave-from`,
          leaveActiveClass = `${name}-leave-active`,
          leaveToClass = `${name}-leave-to`
        } = rawProps;
        const durations = normalizeDuration(duration);
        const enterDuration = durations && durations[0];
        const leaveDuration = durations && durations[1];
        const {
          onBeforeEnter,
          onEnter,
          onEnterCancelled,
          onLeave,
          onLeaveCancelled,
          onBeforeAppear = onBeforeEnter,
          onAppear = onEnter,
          onAppearCancelled = onEnterCancelled
        } = baseProps;
        const finishEnter = (el, isAppear, done) => {
          removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
          removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
          done && done();
        };
        const finishLeave = (el, done) => {
          el._isLeaving = false;
          removeTransitionClass(el, leaveFromClass);
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
          done && done();
        };
        const makeEnterHook = (isAppear) => {
          return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            callHook(hook, [el, resolve]);
            nextFrame(() => {
              removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
              addTransitionClass(el, isAppear ? appearToClass : enterToClass);
              if (!hasExplicitCallback(hook)) {
                whenTransitionEnds(el, type, enterDuration, resolve);
              }
            });
          };
        };
        return extend(baseProps, {
          onBeforeEnter(el) {
            callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
          },
          onBeforeAppear(el) {
            callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
          },
          onEnter: makeEnterHook(false),
          onAppear: makeEnterHook(true),
          onLeave(el, done) {
            el._isLeaving = true;
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            addTransitionClass(el, leaveActiveClass);
            forceReflow();
            nextFrame(() => {
              if (!el._isLeaving) {
                return;
              }
              removeTransitionClass(el, leaveFromClass);
              addTransitionClass(el, leaveToClass);
              if (!hasExplicitCallback(onLeave)) {
                whenTransitionEnds(el, type, leaveDuration, resolve);
              }
            });
            callHook(onLeave, [el, resolve]);
          },
          onEnterCancelled(el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [el]);
          },
          onAppearCancelled(el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [el]);
          },
          onLeaveCancelled(el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [el]);
          }
        });
      }
      function normalizeDuration(duration) {
        if (duration == null) {
          return null;
        } else if (isObject(duration)) {
          return [NumberOf(duration.enter), NumberOf(duration.leave)];
        } else {
          const n = NumberOf(duration);
          return [n, n];
        }
      }
      function NumberOf(val) {
        const res = toNumber(val);
        return res;
      }
      function addTransitionClass(el, cls) {
        cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
        (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
      }
      function removeTransitionClass(el, cls) {
        cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
        const _vtc = el[vtcKey];
        if (_vtc) {
          _vtc.delete(cls);
          if (!_vtc.size) {
            el[vtcKey] = void 0;
          }
        }
      }
      function nextFrame(cb) {
        requestAnimationFrame(() => {
          requestAnimationFrame(cb);
        });
      }
      let endId = 0;
      function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
        const id = el._endId = ++endId;
        const resolveIfNotStale = () => {
          if (id === el._endId) {
            resolve();
          }
        };
        if (explicitTimeout != null) {
          return setTimeout(resolveIfNotStale, explicitTimeout);
        }
        const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
        if (!type) {
          return resolve();
        }
        const endEvent = type + "end";
        let ended = 0;
        const end = () => {
          el.removeEventListener(endEvent, onEnd);
          resolveIfNotStale();
        };
        const onEnd = (e) => {
          if (e.target === el && ++ended >= propCount) {
            end();
          }
        };
        setTimeout(() => {
          if (ended < propCount) {
            end();
          }
        }, timeout + 1);
        el.addEventListener(endEvent, onEnd);
      }
      function getTransitionInfo(el, expectedType) {
        const styles = window.getComputedStyle(el);
        const getStyleProperties = (key) => (styles[key] || "").split(", ");
        const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
        const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
        const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
        const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
        const animationTimeout = getTimeout(animationDelays, animationDurations);
        let type = null;
        let timeout = 0;
        let propCount = 0;
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
          propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
        }
        const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
          getStyleProperties(`${TRANSITION}Property`).toString()
        );
        return {
          type,
          timeout,
          propCount,
          hasTransform
        };
      }
      function getTimeout(delays, durations) {
        while (delays.length < durations.length) {
          delays = delays.concat(delays);
        }
        return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
      }
      function toMs(s) {
        if (s === "auto") return 0;
        return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
      }
      function forceReflow() {
        return document.body.offsetHeight;
      }

      function patchClass(el, value, isSVG) {
        const transitionClasses = el[vtcKey];
        if (transitionClasses) {
          value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
        }
        if (value == null) {
          el.removeAttribute("class");
        } else if (isSVG) {
          el.setAttribute("class", value);
        } else {
          el.className = value;
        }
      }

      const vShowOriginalDisplay = Symbol("_vod");
      const vShowHidden = Symbol("_vsh");
      const vShow = exports('vShow', {
        beforeMount(el, { value }, { transition }) {
          el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
          if (transition && value) {
            transition.beforeEnter(el);
          } else {
            setDisplay(el, value);
          }
        },
        mounted(el, { value }, { transition }) {
          if (transition && value) {
            transition.enter(el);
          }
        },
        updated(el, { value, oldValue }, { transition }) {
          if (!value === !oldValue) return;
          if (transition) {
            if (value) {
              transition.beforeEnter(el);
              setDisplay(el, true);
              transition.enter(el);
            } else {
              transition.leave(el, () => {
                setDisplay(el, false);
              });
            }
          } else {
            setDisplay(el, value);
          }
        },
        beforeUnmount(el, { value }) {
          setDisplay(el, value);
        }
      });
      function setDisplay(el, value) {
        el.style.display = value ? el[vShowOriginalDisplay] : "none";
        el[vShowHidden] = !value;
      }
      function initVShowForSSR() {
        vShow.getSSRProps = ({ value }) => {
          if (!value) {
            return { style: { display: "none" } };
          }
        };
      }

      const CSS_VAR_TEXT = Symbol("");
      function useCssVars(getter) {
        const instance = getCurrentInstance();
        if (!instance) {
          return;
        }
        const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
          Array.from(
            document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
          ).forEach((node) => setVarsOnNode(node, vars));
        };
        const setVars = () => {
          const vars = getter(instance.proxy);
          if (instance.ce) {
            setVarsOnNode(instance.ce, vars);
          } else {
            setVarsOnVNode(instance.subTree, vars);
          }
          updateTeleports(vars);
        };
        onBeforeMount(() => {
          watchPostEffect(setVars);
        });
        onMounted(() => {
          const ob = new MutationObserver(setVars);
          ob.observe(instance.subTree.el.parentNode, { childList: true });
          onUnmounted(() => ob.disconnect());
        });
      }
      function setVarsOnVNode(vnode, vars) {
        if (vnode.shapeFlag & 128) {
          const suspense = vnode.suspense;
          vnode = suspense.activeBranch;
          if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
              setVarsOnVNode(suspense.activeBranch, vars);
            });
          }
        }
        while (vnode.component) {
          vnode = vnode.component.subTree;
        }
        if (vnode.shapeFlag & 1 && vnode.el) {
          setVarsOnNode(vnode.el, vars);
        } else if (vnode.type === Fragment) {
          vnode.children.forEach((c) => setVarsOnVNode(c, vars));
        } else if (vnode.type === Static) {
          let { el, anchor } = vnode;
          while (el) {
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
          }
        }
      }
      function setVarsOnNode(el, vars) {
        if (el.nodeType === 1) {
          const style = el.style;
          let cssText = "";
          for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
            cssText += `--${key}: ${vars[key]};`;
          }
          style[CSS_VAR_TEXT] = cssText;
        }
      }

      const displayRE = /(^|;)\s*display\s*:/;
      function patchStyle(el, prev, next) {
        const style = el.style;
        const isCssString = isString(next);
        let hasControlledDisplay = false;
        if (next && !isCssString) {
          if (prev) {
            if (!isString(prev)) {
              for (const key in prev) {
                if (next[key] == null) {
                  setStyle(style, key, "");
                }
              }
            } else {
              for (const prevStyle of prev.split(";")) {
                const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
                if (next[key] == null) {
                  setStyle(style, key, "");
                }
              }
            }
          }
          for (const key in next) {
            if (key === "display") {
              hasControlledDisplay = true;
            }
            setStyle(style, key, next[key]);
          }
        } else {
          if (isCssString) {
            if (prev !== next) {
              const cssVarText = style[CSS_VAR_TEXT];
              if (cssVarText) {
                next += ";" + cssVarText;
              }
              style.cssText = next;
              hasControlledDisplay = displayRE.test(next);
            }
          } else if (prev) {
            el.removeAttribute("style");
          }
        }
        if (vShowOriginalDisplay in el) {
          el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
          if (el[vShowHidden]) {
            style.display = "none";
          }
        }
      }
      const importantRE = /\s*!important$/;
      function setStyle(style, name, val) {
        if (isArray(val)) {
          val.forEach((v) => setStyle(style, name, v));
        } else {
          if (val == null) val = "";
          if (name.startsWith("--")) {
            style.setProperty(name, val);
          } else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
              style.setProperty(
                hyphenate(prefixed),
                val.replace(importantRE, ""),
                "important"
              );
            } else {
              style[prefixed] = val;
            }
          }
        }
      }
      const prefixes = ["Webkit", "Moz", "ms"];
      const prefixCache = {};
      function autoPrefix(style, rawName) {
        const cached = prefixCache[rawName];
        if (cached) {
          return cached;
        }
        let name = camelize(rawName);
        if (name !== "filter" && name in style) {
          return prefixCache[rawName] = name;
        }
        name = capitalize(name);
        for (let i = 0; i < prefixes.length; i++) {
          const prefixed = prefixes[i] + name;
          if (prefixed in style) {
            return prefixCache[rawName] = prefixed;
          }
        }
        return rawName;
      }

      const xlinkNS = "http://www.w3.org/1999/xlink";
      function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
        if (isSVG && key.startsWith("xlink:")) {
          if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
          } else {
            el.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          if (value == null || isBoolean && !includeBooleanAttr(value)) {
            el.removeAttribute(key);
          } else {
            el.setAttribute(
              key,
              isBoolean ? "" : isSymbol(value) ? String(value) : value
            );
          }
        }
      }

      function patchDOMProp(el, key, value, parentComponent) {
        if (key === "innerHTML" || key === "textContent") {
          if (value != null) {
            el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
          }
          return;
        }
        const tag = el.tagName;
        if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
        !tag.includes("-")) {
          const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
          const newValue = value == null ? (
            // #11647: value should be set as empty string for null and undefined,
            // but <input type="checkbox"> should be set as 'on'.
            el.type === "checkbox" ? "on" : ""
          ) : String(value);
          if (oldValue !== newValue || !("_value" in el)) {
            el.value = newValue;
          }
          if (value == null) {
            el.removeAttribute(key);
          }
          el._value = value;
          return;
        }
        let needRemove = false;
        if (value === "" || value == null) {
          const type = typeof el[key];
          if (type === "boolean") {
            value = includeBooleanAttr(value);
          } else if (value == null && type === "string") {
            value = "";
            needRemove = true;
          } else if (type === "number") {
            value = 0;
            needRemove = true;
          }
        }
        try {
          el[key] = value;
        } catch (e) {
        }
        needRemove && el.removeAttribute(key);
      }

      function addEventListener(el, event, handler, options) {
        el.addEventListener(event, handler, options);
      }
      function removeEventListener(el, event, handler, options) {
        el.removeEventListener(event, handler, options);
      }
      const veiKey = Symbol("_vei");
      function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
        const invokers = el[veiKey] || (el[veiKey] = {});
        const existingInvoker = invokers[rawName];
        if (nextValue && existingInvoker) {
          existingInvoker.value = nextValue;
        } else {
          const [name, options] = parseName(rawName);
          if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(
              nextValue,
              instance
            );
            addEventListener(el, name, invoker, options);
          } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
          }
        }
      }
      const optionsModifierRE = /(?:Once|Passive|Capture)$/;
      function parseName(name) {
        let options;
        if (optionsModifierRE.test(name)) {
          options = {};
          let m;
          while (m = name.match(optionsModifierRE)) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
          }
        }
        const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
        return [event, options];
      }
      let cachedNow = 0;
      const p = /* @__PURE__ */ Promise.resolve();
      const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
      function createInvoker(initialValue, instance) {
        const invoker = (e) => {
          if (!e._vts) {
            e._vts = Date.now();
          } else if (e._vts <= invoker.attached) {
            return;
          }
          callWithAsyncErrorHandling(
            patchStopImmediatePropagation(e, invoker.value),
            instance,
            5,
            [e]
          );
        };
        invoker.value = initialValue;
        invoker.attached = getNow();
        return invoker;
      }
      function patchStopImmediatePropagation(e, value) {
        if (isArray(value)) {
          const originalStop = e.stopImmediatePropagation;
          e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
          };
          return value.map(
            (fn) => (e2) => !e2._stopped && fn && fn(e2)
          );
        } else {
          return value;
        }
      }

      const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
      key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
      const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
        const isSVG = namespace === "svg";
        if (key === "class") {
          patchClass(el, nextValue, isSVG);
        } else if (key === "style") {
          patchStyle(el, prevValue, nextValue);
        } else if (isOn(key)) {
          if (!isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
          }
        } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
          patchDOMProp(el, key, nextValue);
          if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
            patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
          }
        } else if (
          // #11081 force set props for possible async custom element
          el._isVueCE && (/[A-Z]/.test(key) || !isString(nextValue))
        ) {
          patchDOMProp(el, camelize(key), nextValue);
        } else {
          if (key === "true-value") {
            el._trueValue = nextValue;
          } else if (key === "false-value") {
            el._falseValue = nextValue;
          }
          patchAttr(el, key, nextValue, isSVG);
        }
      };
      function shouldSetAsProp(el, key, value, isSVG) {
        if (isSVG) {
          if (key === "innerHTML" || key === "textContent") {
            return true;
          }
          if (key in el && isNativeOn(key) && isFunction(value)) {
            return true;
          }
          return false;
        }
        if (key === "spellcheck" || key === "draggable" || key === "translate") {
          return false;
        }
        if (key === "form") {
          return false;
        }
        if (key === "list" && el.tagName === "INPUT") {
          return false;
        }
        if (key === "type" && el.tagName === "TEXTAREA") {
          return false;
        }
        if (key === "width" || key === "height") {
          const tag = el.tagName;
          if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
            return false;
          }
        }
        if (isNativeOn(key) && isString(value)) {
          return false;
        }
        return key in el;
      }

      const REMOVAL = {};
      /*! #__NO_SIDE_EFFECTS__ */
      // @__NO_SIDE_EFFECTS__
      function defineCustomElement(options, extraOptions, _createApp) {
        const Comp = defineComponent(options, extraOptions);
        if (isPlainObject(Comp)) extend(Comp, extraOptions);
        class VueCustomElement extends VueElement {
          constructor(initialProps) {
            super(Comp, initialProps, _createApp);
          }
        }
        VueCustomElement.def = Comp;
        return VueCustomElement;
      }
      /*! #__NO_SIDE_EFFECTS__ */
      const defineSSRCustomElement = exports('defineSSRCustomElement', /* @__NO_SIDE_EFFECTS__ */ (options, extraOptions) => {
        return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
      });
      const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
      };
      class VueElement extends BaseClass {
        constructor(_def, _props = {}, _createApp = createApp) {
          super();
          this._def = _def;
          this._props = _props;
          this._createApp = _createApp;
          this._isVueCE = true;
          /**
           * @internal
           */
          this._instance = null;
          /**
           * @internal
           */
          this._app = null;
          /**
           * @internal
           */
          this._nonce = this._def.nonce;
          this._connected = false;
          this._resolved = false;
          this._numberProps = null;
          this._styleChildren = /* @__PURE__ */ new WeakSet();
          this._ob = null;
          if (this.shadowRoot && _createApp !== createApp) {
            this._root = this.shadowRoot;
          } else {
            if (_def.shadowRoot !== false) {
              this.attachShadow({ mode: "open" });
              this._root = this.shadowRoot;
            } else {
              this._root = this;
            }
          }
          if (!this._def.__asyncLoader) {
            this._resolveProps(this._def);
          }
        }
        connectedCallback() {
          if (!this.isConnected) return;
          if (!this.shadowRoot) {
            this._parseSlots();
          }
          this._connected = true;
          let parent = this;
          while (parent = parent && (parent.parentNode || parent.host)) {
            if (parent instanceof VueElement) {
              this._parent = parent;
              break;
            }
          }
          if (!this._instance) {
            if (this._resolved) {
              this._setParent();
              this._update();
            } else {
              if (parent && parent._pendingResolve) {
                this._pendingResolve = parent._pendingResolve.then(() => {
                  this._pendingResolve = void 0;
                  this._resolveDef();
                });
              } else {
                this._resolveDef();
              }
            }
          }
        }
        _setParent(parent = this._parent) {
          if (parent) {
            this._instance.parent = parent._instance;
            this._instance.provides = parent._instance.provides;
          }
        }
        disconnectedCallback() {
          this._connected = false;
          nextTick(() => {
            if (!this._connected) {
              if (this._ob) {
                this._ob.disconnect();
                this._ob = null;
              }
              this._app && this._app.unmount();
              if (this._instance) this._instance.ce = void 0;
              this._app = this._instance = null;
            }
          });
        }
        /**
         * resolve inner component definition (handle possible async component)
         */
        _resolveDef() {
          if (this._pendingResolve) {
            return;
          }
          for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
          }
          this._ob = new MutationObserver((mutations) => {
            for (const m of mutations) {
              this._setAttr(m.attributeName);
            }
          });
          this._ob.observe(this, { attributes: true });
          const resolve = (def, isAsync = false) => {
            this._resolved = true;
            this._pendingResolve = void 0;
            const { props, styles } = def;
            let numberProps;
            if (props && !isArray(props)) {
              for (const key in props) {
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                  if (key in this._props) {
                    this._props[key] = toNumber(this._props[key]);
                  }
                  (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
                }
              }
            }
            this._numberProps = numberProps;
            if (isAsync) {
              this._resolveProps(def);
            }
            if (this.shadowRoot) {
              this._applyStyles(styles);
            }
            this._mount(def);
          };
          const asyncDef = this._def.__asyncLoader;
          if (asyncDef) {
            this._pendingResolve = asyncDef().then(
              (def) => resolve(this._def = def, true)
            );
          } else {
            resolve(this._def);
          }
        }
        _mount(def) {
          this._app = this._createApp(def);
          if (def.configureApp) {
            def.configureApp(this._app);
          }
          this._app._ceVNode = this._createVNode();
          this._app.mount(this._root);
          const exposed = this._instance && this._instance.exposed;
          if (!exposed) return;
          for (const key in exposed) {
            if (!hasOwn(this, key)) {
              Object.defineProperty(this, key, {
                // unwrap ref to be consistent with public instance behavior
                get: () => unref(exposed[key])
              });
            }
          }
        }
        _resolveProps(def) {
          const { props } = def;
          const declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
          for (const key of Object.keys(this)) {
            if (key[0] !== "_" && declaredPropKeys.includes(key)) {
              this._setProp(key, this[key]);
            }
          }
          for (const key of declaredPropKeys.map(camelize)) {
            Object.defineProperty(this, key, {
              get() {
                return this._getProp(key);
              },
              set(val) {
                this._setProp(key, val, true, true);
              }
            });
          }
        }
        _setAttr(key) {
          if (key.startsWith("data-v-")) return;
          const has = this.hasAttribute(key);
          let value = has ? this.getAttribute(key) : REMOVAL;
          const camelKey = camelize(key);
          if (has && this._numberProps && this._numberProps[camelKey]) {
            value = toNumber(value);
          }
          this._setProp(camelKey, value, false, true);
        }
        /**
         * @internal
         */
        _getProp(key) {
          return this._props[key];
        }
        /**
         * @internal
         */
        _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
          if (val !== this._props[key]) {
            if (val === REMOVAL) {
              delete this._props[key];
            } else {
              this._props[key] = val;
              if (key === "key" && this._app) {
                this._app._ceVNode.key = val;
              }
            }
            if (shouldUpdate && this._instance) {
              this._update();
            }
            if (shouldReflect) {
              if (val === true) {
                this.setAttribute(hyphenate(key), "");
              } else if (typeof val === "string" || typeof val === "number") {
                this.setAttribute(hyphenate(key), val + "");
              } else if (!val) {
                this.removeAttribute(hyphenate(key));
              }
            }
          }
        }
        _update() {
          render(this._createVNode(), this._root);
        }
        _createVNode() {
          const baseProps = {};
          if (!this.shadowRoot) {
            baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
          }
          const vnode = createVNode(this._def, extend(baseProps, this._props));
          if (!this._instance) {
            vnode.ce = (instance) => {
              this._instance = instance;
              instance.ce = this;
              instance.isCE = true;
              const dispatch = (event, args) => {
                this.dispatchEvent(
                  new CustomEvent(
                    event,
                    isPlainObject(args[0]) ? extend({ detail: args }, args[0]) : { detail: args }
                  )
                );
              };
              instance.emit = (event, ...args) => {
                dispatch(event, args);
                if (hyphenate(event) !== event) {
                  dispatch(hyphenate(event), args);
                }
              };
              this._setParent();
            };
          }
          return vnode;
        }
        _applyStyles(styles, owner) {
          if (!styles) return;
          if (owner) {
            if (owner === this._def || this._styleChildren.has(owner)) {
              return;
            }
            this._styleChildren.add(owner);
          }
          const nonce = this._nonce;
          for (let i = styles.length - 1; i >= 0; i--) {
            const s = document.createElement("style");
            if (nonce) s.setAttribute("nonce", nonce);
            s.textContent = styles[i];
            this.shadowRoot.prepend(s);
          }
        }
        /**
         * Only called when shadowRoot is false
         */
        _parseSlots() {
          const slots = this._slots = {};
          let n;
          while (n = this.firstChild) {
            const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
            (slots[slotName] || (slots[slotName] = [])).push(n);
            this.removeChild(n);
          }
        }
        /**
         * Only called when shadowRoot is false
         */
        _renderSlots() {
          const outlets = (this._teleportTarget || this).querySelectorAll("slot");
          const scopeId = this._instance.type.__scopeId;
          for (let i = 0; i < outlets.length; i++) {
            const o = outlets[i];
            const slotName = o.getAttribute("name") || "default";
            const content = this._slots[slotName];
            const parent = o.parentNode;
            if (content) {
              for (const n of content) {
                if (scopeId && n.nodeType === 1) {
                  const id = scopeId + "-s";
                  const walker = document.createTreeWalker(n, 1);
                  n.setAttribute(id, "");
                  let child;
                  while (child = walker.nextNode()) {
                    child.setAttribute(id, "");
                  }
                }
                parent.insertBefore(n, o);
              }
            } else {
              while (o.firstChild) parent.insertBefore(o.firstChild, o);
            }
            parent.removeChild(o);
          }
        }
        /**
         * @internal
         */
        _injectChildStyle(comp) {
          this._applyStyles(comp.styles, comp);
        }
        /**
         * @internal
         */
        _removeChildStyle(comp) {
        }
      } exports('VueElement', VueElement);
      function useHost(caller) {
        const instance = getCurrentInstance();
        const el = instance && instance.ce;
        if (el) {
          return el;
        }
        return null;
      }
      function useShadowRoot() {
        const el = useHost();
        return el && el.shadowRoot;
      }

      function useCssModule(name = "$style") {
        {
          const instance = getCurrentInstance();
          if (!instance) {
            return EMPTY_OBJ;
          }
          const modules = instance.type.__cssModules;
          if (!modules) {
            return EMPTY_OBJ;
          }
          const mod = modules[name];
          if (!mod) {
            return EMPTY_OBJ;
          }
          return mod;
        }
      }

      const positionMap = /* @__PURE__ */ new WeakMap();
      const newPositionMap = /* @__PURE__ */ new WeakMap();
      const moveCbKey = Symbol("_moveCb");
      const enterCbKey = Symbol("_enterCb");
      const decorate = (t) => {
        delete t.props.mode;
        return t;
      };
      const TransitionGroupImpl = /* @__PURE__ */ decorate({
        name: "TransitionGroup",
        props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
          tag: String,
          moveClass: String
        }),
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevChildren;
          let children;
          onUpdated(() => {
            if (!prevChildren.length) {
              return;
            }
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(
              prevChildren[0].el,
              instance.vnode.el,
              moveClass
            )) {
              return;
            }
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c) => {
              const el = c.el;
              const style = el.style;
              addTransitionClass(el, moveClass);
              style.transform = style.webkitTransform = style.transitionDuration = "";
              const cb = el[moveCbKey] = (e) => {
                if (e && e.target !== el) {
                  return;
                }
                if (!e || /transform$/.test(e.propertyName)) {
                  el.removeEventListener("transitionend", cb);
                  el[moveCbKey] = null;
                  removeTransitionClass(el, moveClass);
                }
              };
              el.addEventListener("transitionend", cb);
            });
          });
          return () => {
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || Fragment;
            prevChildren = [];
            if (children) {
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.el && child.el instanceof Element) {
                  prevChildren.push(child);
                  setTransitionHooks(
                    child,
                    resolveTransitionHooks(
                      child,
                      cssTransitionProps,
                      state,
                      instance
                    )
                  );
                  positionMap.set(
                    child,
                    child.el.getBoundingClientRect()
                  );
                }
              }
            }
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              if (child.key != null) {
                setTransitionHooks(
                  child,
                  resolveTransitionHooks(child, cssTransitionProps, state, instance)
                );
              }
            }
            return createVNode(tag, null, children);
          };
        }
      });
      const TransitionGroup = exports('TransitionGroup', TransitionGroupImpl);
      function callPendingCbs(c) {
        const el = c.el;
        if (el[moveCbKey]) {
          el[moveCbKey]();
        }
        if (el[enterCbKey]) {
          el[enterCbKey]();
        }
      }
      function recordPosition(c) {
        newPositionMap.set(c, c.el.getBoundingClientRect());
      }
      function applyTranslation(c) {
        const oldPos = positionMap.get(c);
        const newPos = newPositionMap.get(c);
        const dx = oldPos.left - newPos.left;
        const dy = oldPos.top - newPos.top;
        if (dx || dy) {
          const s = c.el.style;
          s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
          s.transitionDuration = "0s";
          return c;
        }
      }
      function hasCSSTransform(el, root, moveClass) {
        const clone = el.cloneNode();
        const _vtc = el[vtcKey];
        if (_vtc) {
          _vtc.forEach((cls) => {
            cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
          });
        }
        moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
        clone.style.display = "none";
        const container = root.nodeType === 1 ? root : root.parentNode;
        container.appendChild(clone);
        const { hasTransform } = getTransitionInfo(clone);
        container.removeChild(clone);
        return hasTransform;
      }

      const getModelAssigner = (vnode) => {
        const fn = vnode.props["onUpdate:modelValue"] || false;
        return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
      };
      function onCompositionStart(e) {
        e.target.composing = true;
      }
      function onCompositionEnd(e) {
        const target = e.target;
        if (target.composing) {
          target.composing = false;
          target.dispatchEvent(new Event("input"));
        }
      }
      const assignKey = Symbol("_assign");
      const vModelText = exports('vModelText', {
        created(el, { modifiers: { lazy, trim, number } }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          const castToNumber = number || vnode.props && vnode.props.type === "number";
          addEventListener(el, lazy ? "change" : "input", (e) => {
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) {
              domValue = domValue.trim();
            }
            if (castToNumber) {
              domValue = looseToNumber(domValue);
            }
            el[assignKey](domValue);
          });
          if (trim) {
            addEventListener(el, "change", () => {
              el.value = el.value.trim();
            });
          }
          if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
          }
        },
        // set value on mounted so it's after min/max for type="range"
        mounted(el, { value }) {
          el.value = value == null ? "" : value;
        },
        beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          if (el.composing) return;
          const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
          const newValue = value == null ? "" : value;
          if (elValue === newValue) {
            return;
          }
          if (document.activeElement === el && el.type !== "range") {
            if (lazy && value === oldValue) {
              return;
            }
            if (trim && el.value.trim() === newValue) {
              return;
            }
          }
          el.value = newValue;
        }
      });
      const vModelCheckbox = exports('vModelCheckbox', {
        // #4096 array checkboxes need to be deep traversed
        deep: true,
        created(el, _, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el[assignKey];
            if (isArray(modelValue)) {
              const index = looseIndexOf(modelValue, elementValue);
              const found = index !== -1;
              if (checked && !found) {
                assign(modelValue.concat(elementValue));
              } else if (!checked && found) {
                const filtered = [...modelValue];
                filtered.splice(index, 1);
                assign(filtered);
              }
            } else if (isSet(modelValue)) {
              const cloned = new Set(modelValue);
              if (checked) {
                cloned.add(elementValue);
              } else {
                cloned.delete(elementValue);
              }
              assign(cloned);
            } else {
              assign(getCheckboxValue(el, checked));
            }
          });
        },
        // set initial checked on mount to wait for true-value/false-value
        mounted: setChecked,
        beforeUpdate(el, binding, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          setChecked(el, binding, vnode);
        }
      });
      function setChecked(el, { value }, vnode) {
        el._modelValue = value;
        let checked;
        if (isArray(value)) {
          checked = looseIndexOf(value, vnode.props.value) > -1;
        } else if (isSet(value)) {
          checked = value.has(vnode.props.value);
        } else {
          checked = looseEqual(value, getCheckboxValue(el, true));
        }
        if (el.checked !== checked) {
          el.checked = checked;
        }
      }
      const vModelRadio = exports('vModelRadio', {
        created(el, { value }, vnode) {
          el.checked = looseEqual(value, vnode.props.value);
          el[assignKey] = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            el[assignKey](getValue(el));
          });
        },
        beforeUpdate(el, { value, oldValue }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          if (value !== oldValue) {
            el.checked = looseEqual(value, vnode.props.value);
          }
        }
      });
      const vModelSelect = exports('vModelSelect', {
        // <select multiple> value need to be deep traversed
        deep: true,
        created(el, { value, modifiers: { number } }, vnode) {
          const isSetModel = isSet(value);
          addEventListener(el, "change", () => {
            const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
              (o) => number ? looseToNumber(getValue(o)) : getValue(o)
            );
            el[assignKey](
              el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
            );
            el._assigning = true;
            nextTick(() => {
              el._assigning = false;
            });
          });
          el[assignKey] = getModelAssigner(vnode);
        },
        // set value in mounted & updated because <select> relies on its children
        // <option>s.
        mounted(el, { value }) {
          setSelected(el, value);
        },
        beforeUpdate(el, _binding, vnode) {
          el[assignKey] = getModelAssigner(vnode);
        },
        updated(el, { value }) {
          if (!el._assigning) {
            setSelected(el, value);
          }
        }
      });
      function setSelected(el, value) {
        const isMultiple = el.multiple;
        const isArrayValue = isArray(value);
        if (isMultiple && !isArrayValue && !isSet(value)) {
          return;
        }
        for (let i = 0, l = el.options.length; i < l; i++) {
          const option = el.options[i];
          const optionValue = getValue(option);
          if (isMultiple) {
            if (isArrayValue) {
              const optionType = typeof optionValue;
              if (optionType === "string" || optionType === "number") {
                option.selected = value.some((v) => String(v) === String(optionValue));
              } else {
                option.selected = looseIndexOf(value, optionValue) > -1;
              }
            } else {
              option.selected = value.has(optionValue);
            }
          } else if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
          }
        }
        if (!isMultiple && el.selectedIndex !== -1) {
          el.selectedIndex = -1;
        }
      }
      function getValue(el) {
        return "_value" in el ? el._value : el.value;
      }
      function getCheckboxValue(el, checked) {
        const key = checked ? "_trueValue" : "_falseValue";
        return key in el ? el[key] : checked;
      }
      const vModelDynamic = exports('vModelDynamic', {
        created(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "created");
        },
        mounted(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "mounted");
        },
        beforeUpdate(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
        },
        updated(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "updated");
        }
      });
      function resolveDynamicModel(tagName, type) {
        switch (tagName) {
          case "SELECT":
            return vModelSelect;
          case "TEXTAREA":
            return vModelText;
          default:
            switch (type) {
              case "checkbox":
                return vModelCheckbox;
              case "radio":
                return vModelRadio;
              default:
                return vModelText;
            }
        }
      }
      function callModelHook(el, binding, vnode, prevVNode, hook) {
        const modelToUse = resolveDynamicModel(
          el.tagName,
          vnode.props && vnode.props.type
        );
        const fn = modelToUse[hook];
        fn && fn(el, binding, vnode, prevVNode);
      }
      function initVModelForSSR() {
        vModelText.getSSRProps = ({ value }) => ({ value });
        vModelRadio.getSSRProps = ({ value }, vnode) => {
          if (vnode.props && looseEqual(vnode.props.value, value)) {
            return { checked: true };
          }
        };
        vModelCheckbox.getSSRProps = ({ value }, vnode) => {
          if (isArray(value)) {
            if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
              return { checked: true };
            }
          } else if (isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
              return { checked: true };
            }
          } else if (value) {
            return { checked: true };
          }
        };
        vModelDynamic.getSSRProps = (binding, vnode) => {
          if (typeof vnode.type !== "string") {
            return;
          }
          const modelToUse = resolveDynamicModel(
            // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
            vnode.type.toUpperCase(),
            vnode.props && vnode.props.type
          );
          if (modelToUse.getSSRProps) {
            return modelToUse.getSSRProps(binding, vnode);
          }
        };
      }

      const systemModifiers = ["ctrl", "shift", "alt", "meta"];
      const modifierGuards = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => "button" in e && e.button !== 0,
        middle: (e) => "button" in e && e.button !== 1,
        right: (e) => "button" in e && e.button !== 2,
        exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
      };
      const withModifiers = exports('withModifiers', (fn, modifiers) => {
        const cache = fn._withMods || (fn._withMods = {});
        const cacheKey = modifiers.join(".");
        return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
          for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
          }
          return fn(event, ...args);
        });
      });
      const keyNames = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      };
      const withKeys = exports('withKeys', (fn, modifiers) => {
        const cache = fn._withKeys || (fn._withKeys = {});
        const cacheKey = modifiers.join(".");
        return cache[cacheKey] || (cache[cacheKey] = (event) => {
          if (!("key" in event)) {
            return;
          }
          const eventKey = hyphenate(event.key);
          if (modifiers.some(
            (k) => k === eventKey || keyNames[k] === eventKey
          )) {
            return fn(event);
          }
        });
      });

      const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
      let renderer;
      let enabledHydration = false;
      function ensureRenderer() {
        return renderer || (renderer = createRenderer(rendererOptions));
      }
      function ensureHydrationRenderer() {
        renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
        enabledHydration = true;
        return renderer;
      }
      const render = exports('render', (...args) => {
        ensureRenderer().render(...args);
      });
      const hydrate = exports('hydrate', (...args) => {
        ensureHydrationRenderer().hydrate(...args);
      });
      const createApp = exports('createApp', (...args) => {
        const app = ensureRenderer().createApp(...args);
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container) return;
          const component = app._component;
          if (!isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
          }
          if (container.nodeType === 1) {
            container.textContent = "";
          }
          const proxy = mount(container, false, resolveRootNamespace(container));
          if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
          }
          return proxy;
        };
        return app;
      });
      const createSSRApp = exports('createSSRApp', (...args) => {
        const app = ensureHydrationRenderer().createApp(...args);
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (container) {
            return mount(container, true, resolveRootNamespace(container));
          }
        };
        return app;
      });
      function resolveRootNamespace(container) {
        if (container instanceof SVGElement) {
          return "svg";
        }
        if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
          return "mathml";
        }
      }
      function normalizeContainer(container) {
        if (isString(container)) {
          const res = document.querySelector(container);
          return res;
        }
        return container;
      }
      let ssrDirectiveInitialized = false;
      const initDirectivesForSSR = exports('initDirectivesForSSR', () => {
        if (!ssrDirectiveInitialized) {
          ssrDirectiveInitialized = true;
          initVModelForSSR();
          initVShowForSSR();
        }
      } );

      /**
      * vue v3.5.11
      * (c) 2018-present Yuxi (Evan) You and Vue contributors
      * @license MIT
      **/
      const compile = exports('compile', () => {
      });

    })
  };
}));
