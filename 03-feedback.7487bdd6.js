function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function T(e){return l=e,f=setTimeout(h,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function h(){var e=d();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?g(n,i-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function O(){var e=d(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return T(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(d())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form")};let T={};const j=()=>JSON.parse(localStorage.getItem("feedback-form-state"));j()&&(T=j(),T.email&&(y.form.elements.email.value=T.email),T.message&&(y.form.elements.message.value=T.message)),console.log(T);const h=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(T))};y.form.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log("Email:",t.value),console.log("Message:",n.value),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.form.addEventListener("input",e(t)((e=>{"message"===e.target.name?(T.message=e.target.value,h()):"email"===e.target.name&&(T.email=e.target.value,h())}),500));
//# sourceMappingURL=03-feedback.7487bdd6.js.map