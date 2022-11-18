(()=>{var t={367:()=>{document.querySelectorAll(".faq-accordion").forEach((t=>{t.addEventListener("click",(t=>{const e=t.currentTarget,n=e.querySelector(".faq-accordion__control"),r=e.querySelector(".faq-accordion__content");e.classList.toggle("open"),e.classList.contains("open")?(n.setAttribute("aria-expanded",!0),r.setAttribute("aria-hidden",!1),r.style.maxHeight=r.scrollHeight+"px"):(n.setAttribute("aria-expanded",!1),r.setAttribute("aria-hidden",!0),r.style.maxHeight=null)}))}))},627:()=>{ymaps.ready((function(){new ymaps.Map("map",{center:[55.76,37.64],zoom:7})}))},682:()=>{let t=null,e=null;const n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;const{number:r,title:i}=t,{nextBtnText:o}=n,s=t.answers.map((e=>"checkbox"===e.type?`\n        <li class="quiz-question__item">\n          <img src="img/quiz-img.jpg" alt="">\n          <label class="custom-checkbox quiz-question__label">\n            <input type="${e.type}" class="custom-checkbox__field quiz-question__answer" data-valid="false" name="${t.answer_alias}" ${"text"==e.type?'placeholder="Введите ваш вариант"':""} value="${"text"!==e.type?e.answer_title:""}">\n            <span class="custom-checkbox__content">${e.answer_title}</span>\n          </label>\n        </li>\n      `:"textarea"===e.type?`\n        <label class="quiz-question__label">\n          <textarea placeholder="${e.answer_title}" class="quiz-question__message"></textarea>\n        </label>\n      `:`\n        <label class="quiz-question__label">\n          <input type="${e.type}" data-valid="false" class="quiz-question__answer" name="${t.answer_alias}" ${"text"==e.type?'placeholder="Введите ваш вариант"':""} value="${"text"!==e.type?e.answer_title:""}">\n          <span>${e.answer_title}</span>\n        </label>\n      `));return`\n    <div class="quiz-question">\n      <h3 class="quiz-question__title">${i}</h3>\n      <ul class="quiz-question__answers list-reset">\n        ${s.join("")}\n      </ul>\n      <div class="quiz-bottom">\n        <div class="quiz-question__count">${r} из ${e}</div>\n        <button type="button" class="btn btn-reset btn--thirdly quiz-question__btn" data-next-btn>${o}</button>\n      </div>\n    </div>\n\t`};window.quiz=new class{constructor(t,e,n){this.$el=document.querySelector(t),this.options=n,this.data=e,this.counter=0,this.dataLength=this.data.length,this.resultArray=[],this.tmp={},this.init(),this.events()}init(){console.log("init!"),this.$el.innerHTML=n(this.data[this.counter],this.dataLength,this.options)}nextQuestion(){console.log("next question!"),this.valid()?this.counter+1<this.dataLength?(this.counter++,this.$el.innerHTML=n(this.data[this.counter],this.dataLength,this.options),this.counter+1==this.dataLength&&(document.querySelector(".quiz-question__answers").style.display="block")):(console.log("А все! конец!"),document.querySelector(".quiz-questions").style.display="none",document.querySelector(".last-question").style.display="block",document.querySelector(".quiz__title").textContent="Ваша подборка готова!",document.querySelector(".quiz__descr").textContent="Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог",document.querySelector(".quiz-form").addEventListener("submit",(n=>{n.preventDefault(),t=new FormData;for(let e of this.resultArray)for(let n in e)t.append(n,e[n].substring(0,e[n].length-1));t.append("textarea",e);let r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&200===r.status&&console.log("Отправлено")},document.querySelector(".quiz-form").querySelectorAll("input").forEach((e=>{e.value&&(r.open("POST","mail.php",!0),r.send(t),document.querySelector(".quiz-form").reset())}))}))):console.log("Не валидно!")}events(){console.log("events!"),this.$el.addEventListener("click",(t=>{t.target==document.querySelector("[data-next-btn]")&&(this.addToSend(),this.nextQuestion())})),this.$el.addEventListener("change",(t=>{if("INPUT"==t.target.tagName)"checkbox"!==t.target.type&&"radio"!==t.target.type&&this.$el.querySelectorAll("input").forEach((t=>{t.checked=!1})),this.tmp=this.serialize(document.querySelector(".quiz-form"));else{let t=this.$el.querySelector("textarea");e=t.value}}))}valid(){let t=!1,e=this.$el.querySelector("textarea");return e&&e.value.length>0?(t=!0,t):(this.$el.querySelectorAll("input").forEach((e=>{if("INPUT"===e.nodeName)switch(e.type){case"text":e.value?t=!0:e.classList.add("error");case"checkbox":e.checked?t=!0:e.classList.add("error");case"radio":e.checked?t=!0:e.classList.add("error")}})),t)}addToSend(){this.resultArray.push(this.tmp)}serialize(t){let e,n={},r="";if("object"==typeof t&&"FORM"==t.nodeName){let i=t.elements.length;for(let o=0;o<i;o++)if(e=t.elements[o],e.name&&!e.disabled&&"file"!=e.type&&"reset"!=e.type&&"submit"!=e.type&&"button"!=e.type)if("select-multiple"==e.type)for(j=t.elements[o].options.length-1;j>=0;j--)e.options[j].selected&&(n[n.length]=encodeURIComponent(e.name)+"="+encodeURIComponent(e.options[j].value));else("checkbox"!=e.type&&"radio"!=e.type&&e.value||e.checked)&&(r+=e.value+",",n[e.name]=r)}return n}}(".quiz-form .quiz-questions",[{number:1,title:"Какой тип кроссовок рассматриваете?",answer_alias:"type",answers:[{answer_title:"кеды",type:"checkbox"},{answer_title:"кеды",type:"checkbox"},{answer_title:"кеды",type:"checkbox"},{answer_title:"кеды",type:"checkbox"},{answer_title:"кеды",type:"checkbox"}]},{number:2,title:"Какой размер вам подойдет?",answer_alias:"size",answers:[{answer_title:"Менее 36",type:"checkbox"},{answer_title:"36-38",type:"checkbox"},{answer_title:"39-41",type:"checkbox"},{answer_title:"42-44",type:"checkbox"},{answer_title:"45 и больше",type:"checkbox"}]},{number:3,title:"Уточните какие-либо моменты",answer_alias:"message",answers:[{answer_title:"Введите сообщение",type:"textarea"}]}],{nextBtnText:"Следующий шаг",sendBtnText:"Отправить"})},598:()=>{function t(t){var e=!0,n=!1,r=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function s(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function a(t){e=!1}function l(){document.addEventListener("mousemove",u),document.addEventListener("mousedown",u),document.addEventListener("mouseup",u),document.addEventListener("pointermove",u),document.addEventListener("pointerdown",u),document.addEventListener("pointerup",u),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),document.addEventListener("touchend",u)}function u(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",u),document.removeEventListener("mouseup",u),document.removeEventListener("pointermove",u),document.removeEventListener("pointerdown",u),document.removeEventListener("pointerup",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",u))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(o(t.activeElement)&&s(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(n&&(e=!0),l())}),!0),l(),t.addEventListener("focus",(function(t){var n,r,a;o(t.target)&&(e||(r=(n=t.target).type,"INPUT"===(a=n.tagName)&&i[r]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&s(t.target)}),!0),t.addEventListener("blur",(function(t){var e;o(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)},211:function(t,e){!function(t){"use strict";function e(t){return"object"==typeof t&&"function"==typeof t.to}function n(t){t.parentElement.removeChild(t)}function r(t){return null!=t}function i(t){t.preventDefault()}function o(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function s(t,e,n){n>0&&(c(t,e),setTimeout((function(){d(t,e)}),n))}function a(t){return Math.max(Math.min(t,100),0)}function l(t){return Array.isArray(t)?t:[t]}function u(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function c(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function d(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function p(t){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop}}function h(t,e){return 100/(e-t)}function f(t,e,n){return 100*e/(t[n+1]-t[n])}function m(t,e){for(var n=1;t>=e[n];)n+=1;return n}function v(t,e,n){if(n>=t.slice(-1)[0])return 100;var r=m(n,t),i=t[r-1],o=t[r],s=e[r-1],a=e[r];return s+function(t,e){return f(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([i,o],n)/h(s,a)}function g(t,e,n,r){if(100===r)return r;var i=m(r,t),o=t[i-1],s=t[i];return n?r-o>(s-o)/2?s:o:e[i-1]?t[i-1]+function(t,e){return Math.round(t/e)*e}(r-t[i-1],e[i-1]):r}var b,y;t.PipsMode=void 0,(y=t.PipsMode||(t.PipsMode={})).Range="range",y.Steps="steps",y.Positions="positions",y.Count="count",y.Values="values",t.PipsType=void 0,(b=t.PipsType||(t.PipsType={}))[b.None=-1]="None",b[b.NoValue=0]="NoValue",b[b.LargeValue=1]="LargeValue",b[b.SmallValue=2]="SmallValue";var x=function(){function t(t,e,n){var r;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.snap=e;var i=[];for(Object.keys(t).forEach((function(e){i.push([l(t[e]),e])})),i.sort((function(t,e){return t[0][0]-e[0][0]})),r=0;r<i.length;r++)this.handleEntryPoint(i[r][1],i[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return t.prototype.getDistance=function(t){for(var e=[],n=0;n<this.xNumSteps.length-1;n++)e[n]=f(this.xVal,t,n);return e},t.prototype.getAbsoluteDistance=function(t,e,n){var r,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);n||t!==this.xPct[i+1]||i++,null===e&&(e=[]);var o=1,s=e[i],a=0,l=0,u=0,c=0;for(r=n?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);s>0;)a=this.xPct[i+1+c]-this.xPct[i+c],e[i+c]*o+100-100*r>100?(l=a*r,o=(s-100*r)/e[i+c],r=1):(l=e[i+c]*a/100*o,o=0),n?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),s=e[i+c]*o;return t+u},t.prototype.toStepping=function(t){return v(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,n){if(n>=100)return t.slice(-1)[0];var r=m(n,e),i=t[r-1],o=t[r],s=e[r-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([i,o],(n-s)*h(s,e[r]))}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return g(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,n){var r=m(t,this.xPct);return(100===t||e&&t===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/n},t.prototype.getNearbySteps=function(t){var e=m(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(u);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var n;if(!o(n="min"===t?0:"max"===t?100:parseFloat(t))||!o(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(n),this.xVal.push(e[0]);var r=Number(e[1]);n?this.xSteps.push(!isNaN(r)&&r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=f([this.xVal[t],this.xVal[t+1]],e,0)/h(this.xPct[t],this.xPct[t+1]);var n=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],r=Math.ceil(Number(n.toFixed(3))-1),i=this.xVal[t]+this.xNumSteps[t]*r;this.xHighestCompleteStep[t]=i}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),S={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},w={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},E=".__tooltips",P=".__aria";function N(t,e){if(!o(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function C(t,e){if(!o(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function L(t,e){if(!o(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function k(t,e){if(!o(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function _(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new x(e,t.snap||!1,t.singleStep)}function A(t,e){if(e=l(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function q(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function V(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function M(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function U(t,e){var n,r=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)r.push(e);r.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");r=e}t.connect=r}function T(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function z(t,e){if(!o(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function O(t,e){if(!o(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function D(t,e){var n;if(!o(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!o(e[0])&&!o(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var r=e[0]+e[1],i=t.spectrum.xVal[0];if(r/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function j(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function H(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,a=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");z(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||o,drag:r,dragAll:l,smoothSteps:u,fixed:i,snap:o,hover:s,unconstrained:a}}function $(t,n){if(!1!==n)if(!0===n||e(n)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(n)}else{if((n=l(n)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");n.forEach((function(t){if("boolean"!=typeof t&&!e(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=n}}function F(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function R(t,n){if(!e(n))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=n}function B(t,n){if(!function(t){return e(t)&&"function"==typeof t.from}(n))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=n}function I(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function X(t,e){t.documentElement=e}function Y(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function K(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(n){t.cssClasses[n]=t.cssPrefix+e[n]}))):t.cssClasses=e}function Q(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:S,format:S},n={step:{r:!1,t:N},keyboardPageMultiplier:{r:!1,t:C},keyboardMultiplier:{r:!1,t:L},keyboardDefaultStep:{r:!1,t:k},start:{r:!0,t:A},connect:{r:!0,t:U},direction:{r:!0,t:j},snap:{r:!1,t:q},animate:{r:!1,t:V},animationDuration:{r:!1,t:M},range:{r:!0,t:_},orientation:{r:!1,t:T},margin:{r:!1,t:z},limit:{r:!1,t:O},padding:{r:!1,t:D},behaviour:{r:!0,t:H},ariaFormat:{r:!1,t:R},format:{r:!1,t:B},tooltips:{r:!1,t:$},keyboardSupport:{r:!0,t:I},documentElement:{r:!1,t:X},cssPrefix:{r:!0,t:Y},cssClasses:{r:!0,t:K},handleAttributes:{r:!1,t:F}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:w,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach((function(o){if(r(t[o])||void 0!==i[o])n[o].t(e,r(t[o])?t[o]:i[o]);else if(n[o].r)throw new Error("noUiSlider: '"+o+"' is required.")})),e.pips=t.pips;var o=document.createElement("div"),s=void 0!==o.style.msTransform,a=void 0!==o.style.transform;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";return e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function G(e,o,u){var h,f,m,v,g,b,y,x=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},S=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),w=e,N=o.spectrum,C=[],L=[],k=[],_=0,A={},q=e.ownerDocument,V=o.documentElement||q.documentElement,M=q.body,U="rtl"===q.dir||1===o.ort?0:100;function T(t,e){var n=q.createElement("div");return e&&c(n,e),t.appendChild(n),n}function z(t,e){var n=T(t,o.cssClasses.origin),r=T(n,o.cssClasses.handle);if(T(r,o.cssClasses.touchArea),r.setAttribute("data-handle",String(e)),o.keyboardSupport&&(r.setAttribute("tabindex","0"),r.addEventListener("keydown",(function(t){return function(t,e){if(j()||H(e))return!1;var n=["Left","Right"],r=["Down","Up"],i=["PageDown","PageUp"],s=["Home","End"];o.dir&&!o.ort?n.reverse():o.ort&&!o.dir&&(r.reverse(),i.reverse());var a,l=t.key.replace("Arrow",""),u=l===i[0],c=l===i[1],d=l===r[0]||l===n[0]||u,p=l===r[1]||l===n[1]||c,h=l===s[0],f=l===s[1];if(!(d||p||h||f))return!0;if(t.preventDefault(),p||d){var m=d?0:1,v=gt(e)[m];if(null===v)return!1;!1===v&&(v=N.getDefaultStep(L[e],d,o.keyboardDefaultStep)),v*=c||u?o.keyboardPageMultiplier:o.keyboardMultiplier,v=Math.max(v,1e-7),v*=d?-1:1,a=C[e]+v}else a=f?o.spectrum.xVal[o.spectrum.xVal.length-1]:o.spectrum.xVal[0];return pt(e,N.toStepping(a),!0,!0),st("slide",e),st("update",e),st("change",e),st("set",e),!1}(t,e)}))),void 0!==o.handleAttributes){var i=o.handleAttributes[e];Object.keys(i).forEach((function(t){r.setAttribute(t,i[t])}))}return r.setAttribute("role","slider"),r.setAttribute("aria-orientation",o.ort?"vertical":"horizontal"),0===e?c(r,o.cssClasses.handleLower):e===o.handles-1&&c(r,o.cssClasses.handleUpper),n}function O(t,e){return!!e&&T(t,o.cssClasses.connect)}function D(t,e){return!(!o.tooltips||!o.tooltips[e])&&T(t.firstChild,o.cssClasses.tooltip)}function j(){return w.hasAttribute("disabled")}function H(t){return f[t].hasAttribute("disabled")}function $(){g&&(ot("update"+E),g.forEach((function(t){t&&n(t)})),g=null)}function F(){$(),g=f.map(D),it("update"+E,(function(t,e,n){if(g&&o.tooltips&&!1!==g[e]){var r=t[e];!0!==o.tooltips[e]&&(r=o.tooltips[e].to(n[e])),g[e].innerHTML=r}}))}function R(t,e){return t.map((function(t){return N.fromStepping(e?N.getStep(t):t)}))}function B(e){var n,r=function(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return N.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var n=e.values-1,r=100/n,i=[];n--;)i[n]=n*r;return i.push(100),R(i,e.stepped)}return e.mode===t.PipsMode.Positions?R(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return N.fromStepping(N.getStep(N.toStepping(t)))})):e.values:[]}(e),i={},o=N.xVal[0],s=N.xVal[N.xVal.length-1],a=!1,l=!1,u=0;return(n=r.slice().sort((function(t,e){return t-e})),r=n.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==o&&(r.unshift(o),a=!0),r[r.length-1]!==s&&(r.push(s),l=!0),r.forEach((function(n,o){var s,c,d,p,h,f,m,v,g,b,y=n,x=r[o+1],S=e.mode===t.PipsMode.Steps;for(S&&(s=N.xNumSteps[o]),s||(s=x-y),void 0===x&&(x=y),s=Math.max(s,1e-7),c=y;c<=x;c=Number((c+s).toFixed(7))){for(v=(h=(p=N.toStepping(c))-u)/(e.density||1),b=h/(g=Math.round(v)),d=1;d<=g;d+=1)i[(f=u+d*b).toFixed(5)]=[N.fromStepping(f),0];m=r.indexOf(c)>-1?t.PipsType.LargeValue:S?t.PipsType.SmallValue:t.PipsType.NoValue,!o&&a&&c!==x&&(m=0),c===x&&l||(i[p.toFixed(5)]=[c,m]),u=p}})),i}function I(e,n,r){var i,s,a=q.createElement("div"),l=((i={})[t.PipsType.None]="",i[t.PipsType.NoValue]=o.cssClasses.valueNormal,i[t.PipsType.LargeValue]=o.cssClasses.valueLarge,i[t.PipsType.SmallValue]=o.cssClasses.valueSub,i),u=((s={})[t.PipsType.None]="",s[t.PipsType.NoValue]=o.cssClasses.markerNormal,s[t.PipsType.LargeValue]=o.cssClasses.markerLarge,s[t.PipsType.SmallValue]=o.cssClasses.markerSub,s),d=[o.cssClasses.valueHorizontal,o.cssClasses.valueVertical],p=[o.cssClasses.markerHorizontal,o.cssClasses.markerVertical];function h(t,e){var n=e===o.cssClasses.value,r=n?l:u;return e+" "+(n?d:p)[o.ort]+" "+r[t]}return c(a,o.cssClasses.pips),c(a,0===o.ort?o.cssClasses.pipsHorizontal:o.cssClasses.pipsVertical),Object.keys(e).forEach((function(i){!function(e,i,s){if((s=n?n(i,s):s)!==t.PipsType.None){var l=T(a,!1);l.className=h(s,o.cssClasses.marker),l.style[o.style]=e+"%",s>t.PipsType.NoValue&&((l=T(a,!1)).className=h(s,o.cssClasses.value),l.setAttribute("data-value",String(i)),l.style[o.style]=e+"%",l.innerHTML=String(r.to(i)))}}(i,e[i][0],e[i][1])})),a}function X(){v&&(n(v),v=null)}function Y(t){X();var e=B(t),n=t.filter,r=t.format||{to:function(t){return String(Math.round(t))}};return v=w.appendChild(I(e,n,r))}function K(){var t=h.getBoundingClientRect(),e="offset"+["Width","Height"][o.ort];return 0===o.ort?t.width||h[e]:t.height||h[e]}function G(t,e,n,r){var i=function(i){var s,a,l=function(t,e,n){var r=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),s=0,a=0;if(0===t.type.indexOf("MSPointer")&&(o=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(r){var l=function(e){var r=e.target;return r===n||n.contains(r)||t.composed&&t.composedPath().shift()===n};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;s=u[0].pageX,a=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;s=c.pageX,a=c.pageY}}return e=e||p(q),(i||o)&&(s=t.clientX+e.x,a=t.clientY+e.y),t.pageOffset=e,t.points=[s,a],t.cursor=i||o,t}(i,r.pageOffset,r.target||e);return!!l&&!(j()&&!r.doNotReject)&&(s=w,a=o.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!r.doNotReject))&&!(t===x.start&&void 0!==l.buttons&&l.buttons>1)&&(!r.hover||!l.buttons)&&(S||l.preventDefault(),l.calcPoint=l.points[o.ort],void n(l,r))},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,i,!!S&&{passive:!0}),s.push([t,i])})),s}function W(t){var e,n,r,i,s,l,u=100*(t-(e=h,n=o.ort,r=e.getBoundingClientRect(),i=e.ownerDocument,s=i.documentElement,l=p(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),n?r.top+l.y-s.clientTop:r.left+l.x-s.clientLeft))/K();return u=a(u),o.dir?100-u:u}function J(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&tt(t,e)}function Z(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return tt(t,e);var n=(o.dir?-1:1)*(t.calcPoint-e.startCalcPoint);ut(n>0,100*n/e.baseSize,e.locations,e.handleNumbers,e.connect)}function tt(t,e){e.handle&&(d(e.handle,o.cssClasses.active),_-=1),e.listeners.forEach((function(t){V.removeEventListener(t[0],t[1])})),0===_&&(d(w,o.cssClasses.drag),dt(),t.cursor&&(M.style.cursor="",M.removeEventListener("selectstart",i))),o.events.smoothSteps&&(e.handleNumbers.forEach((function(t){pt(t,L[t],!0,!0,!1,!1)})),e.handleNumbers.forEach((function(t){st("update",t)}))),e.handleNumbers.forEach((function(t){st("change",t),st("set",t),st("end",t)}))}function et(t,e){if(!e.handleNumbers.some(H)){var n;1===e.handleNumbers.length&&(n=f[e.handleNumbers[0]].children[0],_+=1,c(n,o.cssClasses.active)),t.stopPropagation();var r=[],s=G(x.move,V,Z,{target:t.target,handle:n,connect:e.connect,listeners:r,startCalcPoint:t.calcPoint,baseSize:K(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:L.slice()}),a=G(x.end,V,tt,{target:t.target,handle:n,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),l=G("mouseout",V,J,{target:t.target,handle:n,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers});r.push.apply(r,s.concat(a,l)),t.cursor&&(M.style.cursor=getComputedStyle(t.target).cursor,f.length>1&&c(w,o.cssClasses.drag),M.addEventListener("selectstart",i,!1)),e.handleNumbers.forEach((function(t){st("start",t)}))}}function nt(t){t.stopPropagation();var e=W(t.calcPoint),n=function(t){var e=100,n=!1;return f.forEach((function(r,i){if(!H(i)){var o=L[i],s=Math.abs(o-t);(s<e||s<=e&&t>o||100===s&&100===e)&&(n=i,e=s)}})),n}(e);!1!==n&&(o.events.snap||s(w,o.cssClasses.tap,o.animationDuration),pt(n,e,!0,!0),dt(),st("slide",n,!0),st("update",n,!0),o.events.snap?et(t,{handleNumbers:[n]}):(st("change",n,!0),st("set",n,!0)))}function rt(t){var e=W(t.calcPoint),n=N.getStep(e),r=N.fromStepping(n);Object.keys(A).forEach((function(t){"hover"===t.split(".")[0]&&A[t].forEach((function(t){t.call(bt,r)}))}))}function it(t,e){A[t]=A[t]||[],A[t].push(e),"update"===t.split(".")[0]&&f.forEach((function(t,e){st("update",e)}))}function ot(t){var e=t&&t.split(".")[0],n=e?t.substring(e.length):t;Object.keys(A).forEach((function(t){var r=t.split(".")[0],i=t.substring(r.length);e&&e!==r||n&&n!==i||function(t){return t===P||t===E}(i)&&n!==i||delete A[t]}))}function st(t,e,n){Object.keys(A).forEach((function(r){var i=r.split(".")[0];t===i&&A[r].forEach((function(t){t.call(bt,C.map(o.format.to),e,C.slice(),n||!1,L.slice(),bt)}))}))}function at(t,e,n,r,i,s,l){var u;return f.length>1&&!o.events.unconstrained&&(r&&e>0&&(u=N.getAbsoluteDistance(t[e-1],o.margin,!1),n=Math.max(n,u)),i&&e<f.length-1&&(u=N.getAbsoluteDistance(t[e+1],o.margin,!0),n=Math.min(n,u))),f.length>1&&o.limit&&(r&&e>0&&(u=N.getAbsoluteDistance(t[e-1],o.limit,!1),n=Math.min(n,u)),i&&e<f.length-1&&(u=N.getAbsoluteDistance(t[e+1],o.limit,!0),n=Math.max(n,u))),o.padding&&(0===e&&(u=N.getAbsoluteDistance(0,o.padding[0],!1),n=Math.max(n,u)),e===f.length-1&&(u=N.getAbsoluteDistance(100,o.padding[1],!0),n=Math.min(n,u))),l||(n=N.getStep(n)),!((n=a(n))===t[e]&&!s)&&n}function lt(t,e){var n=o.ort;return(n?e:t)+", "+(n?t:e)}function ut(t,e,n,r,i){var s=n.slice(),a=r[0],l=o.events.smoothSteps,u=[!t,t],c=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach((function(t,n){var r=at(s,t,s[t]+e,u[n],c[n],!1,l);!1===r?e=0:(e=r-s[t],s[t]=r)})):u=c=[!0];var d=!1;r.forEach((function(t,r){d=pt(t,n[t]+e,u[r],c[r],!1,l)||d})),d&&(r.forEach((function(t){st("update",t),st("slide",t)})),null!=i&&st("drag",a))}function ct(t,e){return o.dir?100-t-e:t}function dt(){k.forEach((function(t){var e=L[t]>50?-1:1,n=3+(f.length+e*t);f[t].style.zIndex=String(n)}))}function pt(t,e,n,r,i,s){return i||(e=at(L,t,e,n,r,!1,s)),!1!==e&&(function(t,e){L[t]=e,C[t]=N.fromStepping(e);var n="translate("+lt(ct(e,0)-U+"%","0")+")";f[t].style[o.transformRule]=n,ht(t),ht(t+1)}(t,e),!0)}function ht(t){if(m[t]){var e=0,n=100;0!==t&&(e=L[t-1]),t!==m.length-1&&(n=L[t]);var r=n-e,i="translate("+lt(ct(e,r)+"%","0")+")",s="scale("+lt(r/100,"1")+")";m[t].style[o.transformRule]=i+" "+s}}function ft(t,e){return null===t||!1===t||void 0===t?L[e]:("number"==typeof t&&(t=String(t)),!1!==(t=o.format.from(t))&&(t=N.toStepping(t)),!1===t||isNaN(t)?L[e]:t)}function mt(t,e,n){var r=l(t),i=void 0===L[0];e=void 0===e||e,o.animate&&!i&&s(w,o.cssClasses.tap,o.animationDuration),k.forEach((function(t){pt(t,ft(r[t],t),!0,!1,n)}));var a=1===k.length?0:1;if(i&&N.hasNoSize()&&(n=!0,L[0]=0,k.length>1)){var u=100/(k.length-1);k.forEach((function(t){L[t]=t*u}))}for(;a<k.length;++a)k.forEach((function(t){pt(t,L[t],!0,!0,n)}));dt(),k.forEach((function(t){st("update",t),null!==r[t]&&e&&st("set",t)}))}function vt(t){if(void 0===t&&(t=!1),t)return 1===C.length?C[0]:C.slice(0);var e=C.map(o.format.to);return 1===e.length?e[0]:e}function gt(t){var e=L[t],n=N.getNearbySteps(e),r=C[t],i=n.thisStep.step,s=null;if(o.snap)return[r-n.stepBefore.startValue||null,n.stepAfter.startValue-r||null];!1!==i&&r+i>n.stepAfter.startValue&&(i=n.stepAfter.startValue-r),s=r>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&r-n.stepBefore.highestStep,100===e?i=null:0===e&&(s=null);var a=N.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,i]}c(y=w,o.cssClasses.target),0===o.dir?c(y,o.cssClasses.ltr):c(y,o.cssClasses.rtl),0===o.ort?c(y,o.cssClasses.horizontal):c(y,o.cssClasses.vertical),c(y,"rtl"===getComputedStyle(y).direction?o.cssClasses.textDirectionRtl:o.cssClasses.textDirectionLtr),h=T(y,o.cssClasses.base),function(t,e){var n=T(e,o.cssClasses.connects);f=[],(m=[]).push(O(n,t[0]));for(var r=0;r<o.handles;r++)f.push(z(e,r)),k[r]=r,m.push(O(n,t[r+1]))}(o.connect,h),(b=o.events).fixed||f.forEach((function(t,e){G(x.start,t.children[0],et,{handleNumbers:[e]})})),b.tap&&G(x.start,h,nt,{}),b.hover&&G(x.move,h,rt,{hover:!0}),b.drag&&m.forEach((function(t,e){if(!1!==t&&0!==e&&e!==m.length-1){var n=f[e-1],r=f[e],i=[t],s=[n,r],a=[e-1,e];c(t,o.cssClasses.draggable),b.fixed&&(i.push(n.children[0]),i.push(r.children[0])),b.dragAll&&(s=f,a=k),i.forEach((function(e){G(x.start,e,et,{handles:s,handleNumbers:a,connect:t})}))}})),mt(o.start),o.pips&&Y(o.pips),o.tooltips&&F(),ot("update"+P),it("update"+P,(function(t,e,n,r,i){k.forEach((function(t){var e=f[t],r=at(L,t,0,!0,!0,!0),s=at(L,t,100,!0,!0,!0),a=i[t],l=String(o.ariaFormat.to(n[t]));r=N.fromStepping(r).toFixed(1),s=N.fromStepping(s).toFixed(1),a=N.fromStepping(a).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",l)}))}));var bt={destroy:function(){for(ot(P),ot(E),Object.keys(o.cssClasses).forEach((function(t){d(w,o.cssClasses[t])}));w.firstChild;)w.removeChild(w.firstChild);delete w.noUiSlider},steps:function(){return k.map(gt)},on:it,off:ot,get:vt,set:mt,setHandle:function(t,e,n,r){if(!((t=Number(t))>=0&&t<k.length))throw new Error("noUiSlider: invalid handle number, got: "+t);pt(t,ft(e,t),!0,!0,r),st("update",t),n&&st("set",t)},reset:function(t){mt(o.start,t)},__moveHandles:function(t,e,n){ut(t,e,L,n)},options:u,updateOptions:function(t,e){var n=vt(),i=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];i.forEach((function(e){void 0!==t[e]&&(u[e]=t[e])}));var s=Q(u);i.forEach((function(e){void 0!==t[e]&&(o[e]=s[e])})),N=s.spectrum,o.margin=s.margin,o.limit=s.limit,o.padding=s.padding,o.pips?Y(o.pips):X(),o.tooltips?F():$(),L=[],mt(r(t.start)?t.start:n,e)},target:w,removePips:X,removeTooltips:$,getPositions:function(){return L.slice()},getTooltips:function(){return g},getOrigins:function(){return f},pips:Y};return bt}function W(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=G(t,Q(e),e);return t.noUiSlider=n,n}var J={__spectrum:x,cssClasses:w,create:W};t.create=W,t.cssClasses=w,t.default=J,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(598);const t={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};console.log((()=>{const e=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(e)?(t.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(e)&&!window.MSStream?(t.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})());var e=n(211),r=n.n(e);const i=document.getElementById("range-slider");if(i){r().create(i,{start:[500,25768],connect:!0,step:1,range:{min:[500],max:[25768]}});const t=[document.getElementById("input-0"),document.getElementById("input-1")];i.noUiSlider.on("update",(function(e,n){t[n].value=Math.round(e[n])}));const e=(t,e)=>{let n=[null,null];n[t]=e,i.noUiSlider.set(n)};t.forEach(((t,n)=>{t.addEventListener("change",(t=>{e(n,t.currentTarget.value)}))}))}n(682),n(367),n(627)})()})();