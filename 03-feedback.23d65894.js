!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var r,o,a,u,f,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,s=t,u=e.apply(i,n)}function j(e){return s=e,f=setTimeout(O,t),c?b(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function O(){var e=y();if(T(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,a-(e-s)):n}(e))}function h(e){return f=void 0,d&&r?b(e):(r=o=void 0,u)}function S(){var e=y(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=w(t)||0,p(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(w(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=l=o=f=void 0},S.flush=function(){return void 0===f?u:h(y())},S}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j={form:document.querySelector(".feedback-form")},T={},O=function(){return JSON.parse(localStorage.getItem("feedback-form-state"))};O()&&((T=O()).email&&(j.form.elements.email.value=T.email),T.message&&(j.form.elements.message.value=T.message));var h=function(){localStorage.setItem("feedback-form-state",JSON.stringify(T))};j.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message,i=n.value.trim(),o=r.value.trim();""===i&&""===o?alert("Please, write your e-mail and message"):""===i?alert("Please, write your e-mail"):""===o?alert("Please, write your message"):(console.log("Email:",i),console.log("Message:",o),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"))})),j.form.addEventListener("input",e(t)((function(e){"message"===e.target.name?(T.message=e.target.value.trim(),h()):"email"===e.target.name&&(T.email=e.target.value.trim(),h())}),500))}();
//# sourceMappingURL=03-feedback.23d65894.js.map
