!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function E(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(j,t),s?E(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=g();if(h(e))return x(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function x(e){return f=void 0,v&&r?E(e):(r=i=void 0,u)}function O(){var e=g(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(j,t),E(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:x(g())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const E={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")},S="feedback-form-state";!function(){try{const e=JSON.parse(localStorage.getItem(S));if(e){const{email:t,message:n}=e;E.inputEl.value=t,E.textareaEl.value=n}}catch(e){console.log(e.name),console.log(e.message)}}(),E.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(S))),e.currentTarget.reset(),localStorage.removeItem(S)})),E.formEl.addEventListener("input",e(t)((function(e){const t={email:E.inputEl.value,message:E.textareaEl.value};localStorage.setItem(S,JSON.stringify(t))}),500))}();
//# sourceMappingURL=03-feedback.cc8c1fb6.js.map