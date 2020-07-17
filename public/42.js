(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/smooth-dnd/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/smooth-dnd/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";var l,t,r="smooth-dnd-container-instance",f="smooth-dnd-draggable-wrapper",o="animated",p="__smooth_dnd_draggable_translation_value",u="__smooth_dnd_draggable_visibility_value",v="smooth-dnd-ghost",g="smooth-dnd-container",d="smooth-dnd-extra-size-for-insertion",h="smooth-dnd-stretcher-element",y="smooth-dnd-stretcher-instance",s="smooth-dnd-disable-touch-action",c="smooth-dnd-no-user-select",i="smooth-dnd-prevent-auto-scroll-class",b="smooth-dnd-drop-preview-default-class",w="smooth-dnd-drop-preview-inner-class",x="smooth-dnd-drop-preview-constant-class",E="smooth-dnd-drop-preview-flex-container-class",n=Object.freeze({containerInstance:r,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:f,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:o,translationValue:p,visibilityValue:u,ghostClass:v,containerClass:g,extraSizeForInsertion:d,stretcherElementClass:h,stretcherElementInstance:y,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:s,noUserSelectClass:c,preventAutoScrollClass:i,dropPlaceholderDefaultClass:b,dropPlaceholderInnerClass:w,dropPlaceholderWrapperClass:x,dropPlaceholderFlexContainerClass:E}),C={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t=l||(l={})).x="x",t.y="y",t.xy="xy";function S(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}}function O(e){var t=window.getComputedStyle(e),n=t.overflow;if("auto"===n||"scroll"===n)return l.xy;var o=t["overflow-x"],r="auto"===o||"scroll"===o,i=t["overflow-y"],a="auto"===i||"scroll"===i;return r&&a?l.xy:r?l.x:a?l.y:null}function R(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||("auto"===r||"scroll"===r)}var A=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}},I=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right,top:t.top,bottom:t.bottom};if(P(e,"x")&&!B(e,"x")){var o=n.right-n.left;n.right=n.right+e.scrollWidth-o}if(P(e,"y")&&!B(e,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-r}return n},B=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===r||"scroll"===r||"hidden"===r)},P=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight},T=function(e,t){var n=e,o=t||I(e);for(n=e.parentElement;n;)P(n,"x")&&B(n,"x")&&(o=S(o,n.getBoundingClientRect(),"x")),P(n,"y")&&B(n,"y")&&(o=S(o,n.getBoundingClientRect(),"y")),n=n.parentElement;return o},z=function(e,n){for(var o=e;o;){if(o[r]){var t=function(){var t=o[r];if(n.some(function(e){return e===t}))return{v:t}}();if("object"===a(t))return t.v}o=o.parentElement}return null},N=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},L=function(e,t){return-1<e.className.split(" ").map(function(e){return e}).indexOf(t)},M=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},j=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},_=function(e,t){return e.removeChild(e.children[t])},F=function(e,t,n){n>=e.children.length?e.appendChild(t):e.insertBefore(t,e.children[n])},V=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():window.document.selection&&window.document.selection.empty()},X=function(e){if(e){var t=window.getComputedStyle(e);if(t)return t.cursor}return null};function H(e){return!(e.bottom<=e.top||e.right<=e.left)}function Y(e){var s=e.element,c=e.draggables;return function(e,t){var n=e,o=n.removedIndex,r=n.addedIndex,i=n.droppedElement,a=null;if(null!==o&&(a=_(s,o),c.splice(o,1)),null!==r){var l=window.document.createElement("div");l.className="".concat(f),l.appendChild(a&&a.firstElementChild?a.firstElementChild:i),F(s,l,r),r>=c.length?c.push(l):c.splice(r,0,l)}t&&t(e)}}var k=Object.freeze({domDropHandler:Y,reactDropHandler:function(){return{handler:function(){return function(e,t){t&&t(e)}}}}}),G={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d(".concat(e,"px, 0, 0)")}}},W={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,".concat(e,"px, 0)")}}};function q(n,s,e){n[d]=0;var o=function(o){return{get:function(e,t){return e[o[t]||t]},set:function(e,t,n){e[o[t]]=o.setters[t]?o.setters[t](n):n}}}("horizontal"===s?G:W),c={translation:0};function t(){r(n),function(e){var t=e.getBoundingClientRect();c.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,c.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}(n)}function r(e){c.rect=I(e);var t=T(e,c.rect);H(t)&&(c.lastVisibleRect=c.visibleRect),c.visibleRect=t}function i(e){var t=e;if(t.tagName){var n=t.getBoundingClientRect();return"vertical"===s?n.bottom-n.top:n.right-n.left}return o.get(e,"size")*o.get(c,"scale")}function a(e){return o.get(e,"dragPosition")}return window.addEventListener("resize",function(){r(n)}),setTimeout(function(){t()},10),{getSize:i,getContainerRectangles:function(){return{rect:c.rect,visibleRect:c.visibleRect,lastVisibleRect:c.lastVisibleRect}},getBeginEndOfDOMRect:function(e){return{begin:o.get(e,"begin"),end:o.get(e,"end")}},getBeginEndOfContainer:function(){return{begin:o.get(c.rect,"begin")+c.translation,end:o.get(c.rect,"end")+c.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:o.get(c.visibleRect,"begin")+c.translation,end:o.get(c.visibleRect,"end")+c.translation}},getBeginEnd:function(e){var t=function(e){return(o.get(e,"distanceToParent")+(e[p]||0))*o.get(c,"scale")}(e)+(o.get(c.rect,"begin")+c.translation)-o.get(n,"scrollValue");return{begin:t,end:t+i(e)*o.get(c,"scale")}},getAxisValue:a,setTranslation:function(e,t){t?o.set(e.style,"translate",t):e.style.removeProperty("transform"),e[p]=t},getTranslation:function(e){return e[p]},setVisibility:function(e,t){void 0!==e[u]&&e[u]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[u]=t)},isVisible:function(e){return void 0===e[u]||e[u]},isInVisibleRect:function(e,t){var n=c.visibleRect,o=n.left,r=n.top,i=n.right,a=n.bottom;a-r<2&&(a=r+30);var l=c.rect;return"vertical"===s?e>l.left&&e<l.right&&r<t&&t<a:o<e&&e<i&&t>l.top&&t<l.bottom},setSize:function(e,t){o.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0;return{top:"horizontal"===s?(t=e,c.rect.top):(t=c.rect.left,e),left:t}},getScrollSize:function(e){return o.get(e,"scrollSize")},getScrollValue:function(e){return o.get(e,"scrollValue")},setScrollValue:function(e,t){return o.set(e,"scrollValue",t)},invalidate:t,invalidateRects:function(){r(n)},getPosition:function(e){return a(e)},setBegin:function(e,t){o.set(e,"begin",t)}}}function U(e,t,n){var o,r,i,a=n.left,l=n.right,s=n.top,c=n.bottom,u=e.x,d=e.y;if(u<a||l<u||d<s||c<d)return null;i="x"===t?(o=a,r=l,u):(o=s,r=c,d);var f=r-o,g=400<f?100:f/4;return r-i<g?{direction:"end",speedFactor:(g-(r-i))/g}:i-o<g?{direction:"begin",speedFactor:(g-(i-o))/g}:null}function J(l){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"y",c=null,u=null,d=null,f=null;return{animate:function(e,t){d=e,f=t,function a(){null===c&&(c=requestAnimationFrame(function(e){null===u&&(u=e);var t=e-u;u=e;var n,o,r,i=t/1e3*f;o=s,r=i="begin"===d?0-i:i,(n=l)&&(n!==window?"x"===o?n.scrollLeft+=r:n.scrollTop+=r:"x"===o?n.scrollBy(r,0):n.scrollBy(0,r)),c=null,a()}))}()},stop:function(){null!==c&&(cancelAnimationFrame(c),c=null),u=null}}}function K(e){return function(){return T(e,e.getBoundingClientRect())}}var Q,Z,$,ee=function(e){var u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1500,r=e.reduce(function(e,t){var n=function(e){for(var t=[],n=e.element;n;){var o=O(n);if(o&&!L(n,i)){var r={};switch(o){case l.xy:r.x={animator:J(n,"x")},r.y={animator:J(n,"y")};break;case l.x:r.x={animator:J(n,"x")};break;case l.y:r.y={animator:J(n,"y")}}t.push({axisAnimations:r,getRect:K(n),scrollerElement:n})}n=n.parentElement}return t}(t).filter(function(t){return!e.find(function(e){return e.scrollerElement===t.scrollerElement})});return[].concat(D(e),D(n))},[]);return function(e){var t=e.draggableInfo;if(e.reset)r.forEach(function(e){e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop()});else if(t){!function(e,o){e.forEach(function(e){var t=e.axisAnimations,n=(0,e.getRect)();t.x&&(t.x.scrollParams=U(o,"x",n),e.cachedRect=n),t.y&&(t.y.scrollParams=U(o,"y",n),e.cachedRect=n)})}(r,t.mousePosition),r.forEach(function(e){var t=e.axisAnimations,n=t.x,o=t.y;if(n)if(n.scrollParams){var r=n.scrollParams,i=r.direction,a=r.speedFactor;n.animator.animate(i,a*u)}else n.animator.stop();if(o)if(o.scrollParams){var l=o.scrollParams,s=l.direction,c=l.speedFactor;o.animator.animate(s,c*u)}else o.animator.stop()});var n=r.filter(function(e){return e.cachedRect});if(n.length&&1<n.length){var o=function(e,t){for(var n=document.elementFromPoint(t.x,t.y);n;){var o=e.find(function(e){return e.scrollerElement===n});if(o)return o;n=n.parentElement}return null}(n,t.mousePosition);o&&n.forEach(function(e){e!==o&&(e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop())})}}}};"undefined"!=typeof window&&((Q=Element)&&Q.prototype&&!Q.prototype.matches&&(Q.prototype.matches=Q.prototype.matchesSelector||Q.prototype.mozMatchesSelector||Q.prototype.msMatchesSelector||Q.prototype.oMatchesSelector||Q.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),(Z=Node||Element)&&Z.prototype&&null==Z.prototype.firstElementChild&&Object.defineProperty(Z.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}}),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1}));var te={overflow:"hidden",display:"block"},ne={height:"100%",display:"table-cell","vertical-align":"top"},oe=(m($={},".".concat(g),{position:"relative","min-height":"30px","min-width":"30px"}),m($,".".concat(g,".horizontal"),{display:"table"}),m($,".".concat(g,".horizontal > .").concat(h),{display:"inline-block"}),m($,".".concat(g,".horizontal > .").concat(f),ne),m($,".".concat(g,".vertical > .").concat(f),te),m($,".".concat(f),{"box-sizing":"border-box"}),m($,".".concat(f,".horizontal"),ne),m($,".".concat(f,".vertical"),te),m($,".".concat(f,".animated"),{transition:"transform ease"}),m($,".".concat(v),{"box-sizing":"border-box"}),m($,".".concat(v,".animated"),{transition:"all ease-in-out"}),m($,".".concat(v," *"),{"pointer-events":"none"}),m($,".".concat(s," *"),{"touch-action":"none","-ms-touch-action":"none"}),m($,".".concat(c),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),m($,".".concat(w),{flex:"1"}),m($,".".concat(g,".horizontal > .").concat(x),{height:"100%",overflow:"hidden",display:"table-cell","vertical-align":"top"}),m($,".".concat(g,".vertical > .").concat(x),{overflow:"hidden",display:"block",width:"100%"}),m($,".".concat(E),{width:"100%",height:"100%",display:"flex","justify-content":"stretch","align-items":"stretch"}),m($,".".concat(b),{"background-color":"rgba(150, 150, 150, 0.1)",border:"1px solid #ccc"}),$);function re(o){return Object.keys(o).reduce(function(e,t){var n=o[t];return"object"===a(n)?"".concat(e).concat(t,"{").concat(re(n),"}"):"".concat(e).concat(t,":").concat(n,";")},"")}function ie(e){if(e&&"undefined"!=typeof window){var t=window.document.head||window.document.getElementsByTagName("head")[0],n=window.document.createElement("style"),o=re({"body *":{cursor:"".concat(e," !important")}});return n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(window.document.createTextNode(o)),t.appendChild(n),n}return null}var ae,le,se=["mousedown","touchstart"],ce=["mousemove","touchmove"],ue=["mouseup","touchend"],de=null,fe=null,ge=null,me=null,pe=[],ve=!1,he=!1,ye=!1,be=!1,we=null,xe=null,Ee=null,Ce=null,De=(ae=null,le=!1,{start:function(){le||(le=!0,function e(){ae=requestAnimationFrame(function(){de.forEach(function(e){return e.layout.invalidateRects()}),setTimeout(function(){null!==ae&&e()},50)})}())},stop:function(){null!==ae&&(cancelAnimationFrame(ae),ae=null),le=!1}}),Se="undefined"!=typeof window&&!!(window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/webOS/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/Windows Phone/i));function Oe(){"undefined"!=typeof window&&se.forEach(function(e){window.document.addEventListener(e,Ve,{passive:!1})})}function Re(){return me&&me.ghostParent?me.ghostParent:fe&&fe.parentElement||window.document.body}var Ae,Ie,Be,Pe,Te,ze,Ne=(Pe=null,Te=1,ze=5,function(e,t,n){Ae=Je(e),Be=n,(Ie="number"==typeof t?t:Se?200:0)&&(Pe=setTimeout(Fe,Ie)),ce.forEach(function(e){return window.document.addEventListener(e,Le)},{passive:!1}),ue.forEach(function(e){return window.document.addEventListener(e,Me)},{passive:!1}),window.document.addEventListener("drag",je,{passive:!1})});function Le(e){var t=Je(e),n=t.clientX,o=t.clientY;if(Ie)(Math.abs(Ae.clientX-n)>ze||Math.abs(Ae.clientY-o)>ze)&&_e();else if(Math.abs(Ae.clientX-n)>Te||Math.abs(Ae.clientY-o)>Te)return Fe()}function Me(){_e()}function je(){_e()}function _e(){clearTimeout(Pe),ce.forEach(function(e){return window.document.removeEventListener(e,Le)},{passive:!1}),ue.forEach(function(e){return window.document.removeEventListener(e,Me)},{passive:!1}),window.document.removeEventListener("drag",je,{passive:!1})}function Fe(){clearTimeout(Pe),_e(),Be()}function Ve(e){var t=Je(e);if(!ve&&(void 0===t.button||0===t.button)&&(fe=N(t.target,"."+f))){var n=N(fe,"."+g),o=pe.filter(function(e){return e.element===n})[0],r=o.getOptions().dragHandleSelector,i=o.getOptions().nonDragAreaSelector,a=!0;if(r&&!N(t.target,r)&&(a=!1),i&&N(t.target,i)&&(a=!1),a){o.layout.invalidate(),M(window.document.body,s),M(window.document.body,c);window.document.addEventListener("mouseup",function e(){j(window.document.body,s),j(window.document.body,c),window.document.removeEventListener("mouseup",e)})}a&&Ne(t,o.getOptions().dragBeginDelay,function(){V(),et(t,X(e.target)),ce.forEach(function(e){window.document.addEventListener(e,Xe,{passive:!1})}),ue.forEach(function(e){window.document.addEventListener(e,Ue,{passive:!1})})})}}function Xe(e){e.preventDefault();var t=Je(e);if(me){var n=me.container.getOptions();"contain"===n.behaviour?function(e){var t,n,o,r,i=e.clientX,a=e.clientY,l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"vertical",s=me.container.layout.getBeginEndOfContainerVisibleRect();r="vertical"===l?(t=a,n="y",o="top",me.size.offsetHeight):(t=i,n="x",o="left",me.size.offsetWidth);var c=s.begin,u=s.end-r,d=Math.max(c,Math.min(u,t+ge.positionDelta[o]));ge.topLeft[n]=d,me.position[n]=Math.max(s.begin,Math.min(s.end,t+ge.centerDelta[n])),me.mousePosition[n]=Math.max(s.begin,Math.min(s.end,t)),me.position[n]<s.begin+r/2&&(me.position[n]=s.begin+2),me.position[n]>s.end-r/2&&(me.position[n]=s.end-2)}(t,n.orientation):Ee?"y"===Ee?(ge.topLeft.y=t.clientY+ge.positionDelta.top,me.position.y=t.clientY+ge.centerDelta.y,me.mousePosition.y=t.clientY):"x"===Ee&&(ge.topLeft.x=t.clientX+ge.positionDelta.left,me.position.x=t.clientX+ge.centerDelta.x,me.mousePosition.x=t.clientX):(ge.topLeft.x=t.clientX+ge.positionDelta.left,ge.topLeft.y=t.clientY+ge.positionDelta.top,me.position.x=t.clientX+ge.centerDelta.x,me.position.y=t.clientY+ge.centerDelta.y,me.mousePosition.x=t.clientX,me.mousePosition.y=t.clientY),nt(),(be=!we(me))&&We()}else et(t,X(e.target))}var He,Ye,ke,Ge,We=(He=qe,ke=!(Ye=20),Ge=null,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Ge&&clearTimeout(Ge),ke&&!Ge?He.call.apply(He,[null].concat(t)):Ge=setTimeout(function(){Ge=null,He.call.apply(He,[null].concat(t))},Ye)});function qe(){be&&(be=!1,Ke(me,de))}function Ue(){ce.forEach(function(e){window.document.removeEventListener(e,Xe,{passive:!1})}),ue.forEach(function(e){window.document.removeEventListener(e,Ue,{passive:!1})}),xe({reset:!0}),Ce&&(function(e){e&&"undefined"!=typeof window&&(window.document.head||window.document.getElementsByTagName("head")[0]).removeChild(e)}(Ce),Ce=null),me&&(De.stop(),qe(),ye=!0,function(e){function i(){j(ge.ghost,"animated"),ge.ghost.style.transitionDuration=null,Re().removeChild(ge.ghost),e()}function t(e,t,n){var o=e.top,r=e.left;M(ge.ghost,"animated"),n&&M(ge.ghost.firstElementChild,n),ge.topLeft.x=r,ge.topLeft.y=o,nt(t),setTimeout(function(){i()},t+20)}function n(e,t){M(ge.ghost,"animated"),nt(e,.9,!0),setTimeout(function(){t()},e+20)}if(me.targetElement){var o=pe.filter(function(e){return e.element===me.targetElement})[0];if(!(p=o.getOptions()).shouldAnimateDrop||p.shouldAnimateDrop(me.container.getOptions(),me.payload))t(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass);else i()}else{var r=pe.filter(function(e){return e===me.container})[0];if(r){var a=r.getOptions(),l=a.behaviour,s=a.removeOnDropOut;if("move"!==l&&"contain"!==l||!he&&s||!r.getDragResult())n(r.getOptions().animationDuration,i);else{var c=r.layout.getContainerRectangles();if(!H(c.visibleRect)&&H(c.lastVisibleRect))t({top:c.lastVisibleRect.top,left:c.lastVisibleRect.left},r.getOptions().animationDuration,r.getOptions().dropClass);else{var u=r.getDragResult(),d=u.removedIndex,f=u.elementSize,g=r.layout;r.getTranslateCalculator({dragResult:{removedIndex:d,addedIndex:d,elementSize:f,pos:void 0,shadowBeginEnd:void 0}});var m=0<d?g.getBeginEnd(r.draggables[d-1]).end:g.getBeginEndOfContainer().begin;t(g.getTopLeftOfElementBegin(m),r.getOptions().animationDuration,r.getOptions().dropClass)}}}else n(C.animationDuration,i)}var p}(function(){$e(ve=!1);for(var e=de||[],t=e.shift();void 0!==t;)t.handleDrop(me),t=e.shift();we=Ee=me=ge=fe=de=null,ye=!1}))}function Je(e){return e.touches?e.touches[0]:e}function Ke(n,e){var o=!1;e.forEach(function(e){var t=e.handleDrag(n);o=!!t.containerBoxChanged||!1,t.containerBoxChanged=!1}),o&&(o=!1,requestAnimationFrame(function(){pe.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})}))}function Qe(e){var t=e,n=null;return function(e){return!(null!==n||!ve||ye)&&(n=requestAnimationFrame(function(){ve&&!ye&&(Ke(e,t),xe({draggableInfo:e})),n=null}),!0)}}function Ze(e,t){return e.getOptions().autoScrollEnabled?ee(t,e.getScrollMaxSpeed()):function(e){return null}}function $e(o){pe.forEach(function(e){var t=o?e.getOptions().onDragStart:e.getOptions().onDragEnd;if(t){var n={isSource:e===me.container,payload:me.payload};e.isDragRelevant(me.container,me.payload)?n.willAcceptDrop=!0:n.willAcceptDrop=!1,t(n)}})}function et(e,t){if(null!==fe){ve=!0;var n=pe.filter(function(e){return fe.parentElement===e.element})[0];n.setDraggables(),Ee=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,me=function(t){var e=pe.filter(function(e){return t.parentElement===e.element})[0],n=e.draggables.indexOf(t),o=e.getOptions().getGhostParent,r=t.getBoundingClientRect();return{container:e,element:t,size:{offsetHeight:r.bottom-r.top,offsetWidth:r.right-r.left},elementIndex:n,payload:e.getOptions().getChildPayload?e.getOptions().getChildPayload(n):void 0,targetElement:null,position:{x:0,y:0},groupName:e.getOptions().groupName,ghostParent:o?o():null,invalidateShadow:null,mousePosition:null,relevantContainers:null}}(fe),ge=function(e,t,n,o){var r=t.x,i=t.y,a=e.getBoundingClientRect(),l=a.left,s=a.top,c=a.right,u=a.bottom,d=A(n.layout.getContainerRectangles().visibleRect,a),f=d.left+(d.right-d.left)/2,g=d.top+(d.bottom-d.top)/2,m=e.cloneNode(!0);return m.style.zIndex="1000",m.style.boxSizing="border-box",m.style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.transform=null,m.style.removeProperty("transform"),n.shouldUseTransformForGhost()?m.style.transform="translate3d(".concat(l,"px, ").concat(s,"px, 0)"):(m.style.top="".concat(s,"px"),m.style.left="".concat(l,"px")),m.style.width=c-l+"px",m.style.height=u-s+"px",m.style.overflow="visible",m.style.transition=null,m.style.removeProperty("transition"),m.style.pointerEvents="none",m.style.userSelect="none",n.getOptions().dragClass?setTimeout(function(){M(m.firstElementChild,n.getOptions().dragClass);var e=window.getComputedStyle(m.firstElementChild).cursor;Ce=ie(e)}):Ce=ie(o),M(m,n.getOptions().orientation||"vertical"),M(m,v),{ghost:m,centerDelta:{x:f-r,y:g-i},positionDelta:{left:l-r,top:s-i},topLeft:{x:l,y:s}}}(fe,{x:e.clientX,y:e.clientY},me.container,t),me.position={x:e.clientX+ge.centerDelta.x,y:e.clientY+ge.centerDelta.y},me.mousePosition={x:e.clientX,y:e.clientY},de=pe.filter(function(e){return e.isDragRelevant(n,me.payload)}),me.relevantContainers=de,we=Qe(de),xe&&xe({reset:!0,draggableInfo:void 0}),xe=Ze(n,de),de.forEach(function(e){return e.prepareDrag(e,de)}),$e(!0),we(me),Re().appendChild(ge.ghost),De.start()}}var tt=null;function nt(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=ge,r=o.ghost,i=o.topLeft,a=i.x,l=i.y,s=!me.container||me.container.shouldUseTransformForGhost(),c=s?"translate3d(".concat(a,"px,").concat(l,"px, 0)"):null;if(1!==t&&(c=c?"".concat(c," scale(").concat(t,")"):"scale(".concat(t,")")),0<e)return ge.ghost.style.transitionDuration=e+"ms",void requestAnimationFrame(function(){c&&(r.style.transform=c),s||(r.style.left=a+"px",r.style.top=l+"px"),tt=null,n&&(r.style.opacity="0")});null===tt&&(tt=requestAnimationFrame(function(){c&&(r.style.transform=c),s||(r.style.left=a+"px",r.style.top=l+"px"),tt=null,n&&(r.style.opacity="0")}))}function ot(){if(ve&&!he&&!ye){be=!(he=!0);var t=Object.assign({},me,{targetElement:null,position:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER},mousePosition:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER}});de.forEach(function(e){e.handleDrag(t)}),me.targetElement=null,me.cancelDrop=!0,Ue(),he=!1}}"undefined"!=typeof window&&function(){if("undefined"!=typeof window){var e=window.document.head||window.document.getElementsByTagName("head")[0],t=window.document.createElement("style");t.id="smooth-dnd-style-definitions";var n=re(oe);t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(window.document.createTextNode(n)),e.appendChild(t)}}();var rt=(Oe(),{register:function(e){!function(e){pe.push(e),ve&&me&&e.isDragRelevant(me.container,me.payload)&&(de.push(e),e.prepareDrag(e,de),xe&&xe({reset:!0,draggableInfo:void 0}),xe=Ze(e,de),we=Qe(de),e.handleDrag(me))}(e)},unregister:function(e){!function(e){if(pe.splice(pe.indexOf(e),1),ve&&me){me.container===e&&e.fireRemoveElement(),me.targetElement===e.element&&(me.targetElement=null);var t=de.indexOf(e);-1<t&&(de.splice(t,1),xe&&xe({reset:!0,draggableInfo:void 0}),xe=Ze(e,de),we=Qe(de))}}(e)},isDragging:function(){return ve},cancelDrag:ot});function it(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:C.animationDuration;t?(M(e,o),e.style.transitionDuration=n+"ms"):(j(e,o),e.style.removeProperty("transition-duration"))}function at(n){var o=[];return Array.prototype.forEach.call(n.children,function(e){if(e.nodeType===Node.ELEMENT_NODE){var t=e;L(e,f)||(t=function(e){if(It.wrapChild){var t=window.document.createElement("div");return t.className="".concat(f),e.parentElement.insertBefore(t,e),t.appendChild(e),t}return e}(e)),t[p]=0,o.push(t)}else n.removeChild(e)}),o}function lt(e){var g=e.layout;return function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return function e(t,n,o,r){var i=4<arguments.length&&void 0!==arguments[4]&&arguments[4];if(r<o)return o;if(o===r){var a=g.getBeginEnd(t[o]),l=a.begin,s=a.end;return i?n<(s+l)/2?o:o+1:o}var c=Math.floor((r+o)/2),u=g.getBeginEnd(t[c]),d=u.begin,f=u.end;return n<d?e(t,n,o,c-1,i):f<n?e(t,n,c+1,r,i):i?n<(f+d)/2?c:c+1:c}(e,t,0,e.length-1,n)}}function st(e){var t=e.element,n=e.draggables,o=e.layout,a=e.getOptions,l=function(e){var t=e.element,n=e.draggables,o=e.layout;return function(){n.forEach(function(e){it(e,!1),o.setTranslation(e,0),o.setVisibility(e,!0)}),t[y]&&(t[y].parentNode.removeChild(t[y]),t[y]=null)}}({element:t,draggables:n,layout:o,getOptions:a}),s=(It.dropHandler||Y)({element:t,draggables:n,layout:o,getOptions:a});return function(e,t){var n=t.addedIndex,o=t.removedIndex,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(l(),!e.cancelDrop&&(e.targetElement||a().removeOnDropOut||r)){var i={removedIndex:o,addedIndex:null!==n?null!==o&&o<n?n-1:n:null,payload:e.payload};s(i,a().onDrop)}}}function ct(e){var o=e.element,r=e.getOptions,i=null;return function(e){var t=e.draggableInfo,n=i;return null==i&&t.container.element===o&&"copy"!==r().behaviour&&(n=i=t.elementIndex),{removedIndex:n}}}function ut(e){var n=e.draggables,o=e.layout;return function(e){var t=e.dragResult;null!==t.removedIndex&&o.setVisibility(n[t.removedIndex],!1)}}function dt(e){var r=e.element,i=e.layout;return function(e){var t=e.draggableInfo,n=document.elementFromPoint(t.position.x,t.position.y);if(n){var o=z(n,t.relevantContainers);if(o&&o.element===r)return{pos:i.getPosition(t.position)}}return{pos:null}}}function ft(e){var n=e.layout,o=null;return function(e){var t=e.draggableInfo;return null===e.dragResult.pos?o=null:{elementSize:o=o||n.getSize(t.size)}}}function gt(e){var o=e.element;return function(e){var t=e.draggableInfo,n=e.dragResult;!function(e,t){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(t,o,!!n.pos)}}function mt(){return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function pt(e){var r=e.layout,i=null;return function(e){var t=e.dragResult.addedIndex;if(t===i)return null;i=t;var n=r.getBeginEndOfContainer(),o=n.begin;n.end;return{shadowBeginEnd:{rect:r.getTopLeftOfElementBegin(o)}}}}function vt(e){var g=e.layout,m=e.element,p=e.getOptions,v=null;return function(e){var t=e.dragResult,n=t.elementSize,o=t.shadowBeginEnd,r=t.addedIndex,i=t.dropPlaceholderContainer,a=p();if(a.dropPlaceholder){var l="boolean"==typeof a.dropPlaceholder?{}:a.dropPlaceholder,s=l.animationDuration,c=l.className,u=l.showOnTop;if(null===r)return i&&null!==v&&m.removeChild(i),v=null,{dropPlaceholderContainer:void 0};if(!i){var d=document.createElement("div"),f=document.createElement("div");f.className=E,d.className="".concat(w," ").concat(c||b),(i=document.createElement("div")).className="".concat(x),i.style.position="absolute",void 0!==s&&(i.style.transition="all ".concat(s,"ms ease")),i.appendChild(f),f.appendChild(d),g.setSize(i.style,n+"px"),i.style.pointerEvents="none",u?m.appendChild(i):m.insertBefore(i,m.firstElementChild)}return v!==r&&o.dropArea&&g.setBegin(i.style,o.dropArea.begin-g.getBeginEndOfContainer().begin+"px"),v=r,{dropPlaceholderContainer:i}}return null}}function ht(e){var o=Et(e);return function(e){var t=e.draggableInfo,n=e.dragResult;return t.invalidateShadow?o({draggableInfo:t,dragResult:n}):null}}function yt(e){var o=function(e){var i=e.draggables,a=lt({layout:e.layout});return function(e){var t=e.dragResult,n=t.shadowBeginEnd,o=t.pos;if(n)return n.begin+n.beginAdjustment<=o&&n.end>=o?null:o<n.begin+n.beginAdjustment?a(i,o):o>n.end?a(i,o)+1:i.length;var r=a(i,o,!0);return null!==r?r:i.length}}(e);return function(e){var t=e.dragResult,n=null;return null!==t.pos&&null===(n=o({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function bt(){var r=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.shadowBeginEnd;n!==r&&null!==r&&o&&(o.beginAdjustment=0),r=n}}function wt(e){var u=e.element,d=e.draggables,f=e.layout,g=e.getOptions,m=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(null===o)if(null!==n){if(!m){var i=f.getBeginEndOfContainer();i.end=i.begin+f.getSize(u);var a=f.getScrollSize(u)>f.getSize(u)?i.begin+f.getScrollSize(u)-f.getScrollValue(u):i.end,l=0<d.length?f.getBeginEnd(d[d.length-1]).end-d[d.length-1][p]:i.begin;if(a<l+r){(m=window.document.createElement("div")).className=h+" "+g().orientation;var s=0<d.length?r+l-a:r;return f.setSize(m.style,"".concat(s,"px")),u.appendChild(m),u[y]=m,{containerBoxChanged:!0}}}}else if(m){f.setTranslation(m,0);var c=m;return m=null,u.removeChild(c),{containerBoxChanged:!(u[y]=null)}}}}function xt(e){var s=e.draggables,c=e.layout,u=null,d=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(n!==u||o!==d){for(var i=0;i<s.length;i++)if(i!==o){var a=s[i],l=0;null!==o&&o<i&&(l-=r),null!==n&&n<=i&&(l+=r),c.setTranslation(a,l)}return{addedIndex:u=n,removedIndex:d=o}}}}function Et(e){var x=e.draggables,E=e.layout,C=null;return function(e){var t=e.draggableInfo,n=e.dragResult,o=n.addedIndex,r=n.removedIndex,i=n.elementSize,a=n.pos,l=n.shadowBeginEnd;if(null===a)return{shadowBeginEnd:C=null};if(null===o||!t.invalidateShadow&&o===C)return null;var s=o-1,c=Number.MIN_SAFE_INTEGER,u=0,d=0,f=null,g=null;if(s===r&&s--,-1<s){var m=E.getSize(x[s]);if(g=E.getBeginEnd(x[s]),i<m){var p=(m-i)/2;c=g.end-p}else c=g.end;u=g.end}else g={end:E.getBeginEndOfContainer().begin},u=E.getBeginEndOfContainer().begin;var v=Number.MAX_SAFE_INTEGER,h=o;if(h===r&&h++,h<x.length){var y=E.getSize(x[h]);if(f=E.getBeginEnd(x[h]),i<y){var b=(y-i)/2;v=f.begin+b}else v=f.begin;d=f.begin}else f={begin:E.getContainerRectangles().rect.end},d=E.getContainerRectangles().rect.end-E.getContainerRectangles().rect.begin;var w=g&&f?E.getTopLeftOfElementBegin(g.end):null;return C=o,{shadowBeginEnd:{dropArea:{begin:u,end:d},begin:c,end:v,rect:w,beginAdjustment:l?l.beginAdjustment:0}}}}function Ct(){var a=null;return function(e){var t=e.dragResult,n=t.pos,o=t.addedIndex,r=t.shadowBeginEnd;if(null!==n){if(null!=o&&null===a){if(n<r.begin){var i=n-r.begin-5;r.beginAdjustment=i}a=o}}else a=null}}function Dt(e){var t=e.getOptions,n=!1,o=t();return function(e){var t=!!e.dragResult.pos;t!==n&&((n=t)?o.onDragEnter&&o.onDragEnter():o.onDragLeave&&o.onDragLeave())}}function St(e){var t=e.getOptions,s=null,c=t();return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=e.draggableInfo,i=r.payload,a=r.element;if(c.onDropReady&&null!==n&&s!==n){var l=s=n;null!==o&&o<n&&l--,c.onDropReady({addedIndex:l,removedIndex:o,payload:i,element:a?a.firstElementChild:void 0})}}}function Ot(e){return"drop-zone"===e.getOptions().behaviour?Rt(e)(ct,ut,dt,ft,gt,mt,pt,Dt,St):Rt(e)(ct,ut,dt,ft,gt,ht,yt,bt,wt,xt,Et,vt,Ct,Dt,St)}function Rt(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.map(function(e){return e(i)}),r=null;return function(n){return r=o.reduce(function(e,t){return Object.assign(e,t({draggableInfo:n,dragResult:e}))},r||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function At(d){return function(e){var n=Object.assign({},C,e),t=null,o=null,r=function(e,t){var n=at(e),o=t();return M(e,"".concat(g," ").concat(o.orientation)),{element:e,draggables:n,getOptions:t,layout:q(e,o.orientation,o.animationDuration)}}(d,u),i=Ot(r),a=st(r),l=function(t,n){var o=[];function e(){o&&(o.forEach(function(e){return e.removeEventListener("scroll",n)}),window.removeEventListener("scroll",n))}return function(){var e=t;for(;e;)(R(e,"x")||R(e,"y"))&&o.push(e),e=e.parentElement}(),{dispose:function(){e(),o=null},start:function(){o&&(o.forEach(function(e){return e.addEventListener("scroll",n)}),window.addEventListener("scroll",n))},stop:e}}(d,function(){r.layout.invalidateRects(),s()});function s(){null!==o&&(o.invalidateShadow=!0,t=i(o),o.invalidateShadow=!1)}function c(e,t){for(var n=at(t),o=0;o<n.length;o++)e[o]=n[o];for(var r=0;r<e.length-n.length;r++)e.pop()}function u(){return n}return{element:d,draggables:r.draggables,isDragRelevant:function(e){var r=e.element,i=e.getOptions;return function(e,t){var n=i();if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),t);var o=e.getOptions();return"copy"!==n.behaviour&&(N(r,"."+f)!==e.element&&(e.element===r||!(!o.groupName||o.groupName!==n.groupName)))}}(r),layout:r.layout,dispose:function(e){l.dispose(),function(t){It.wrapChild&&Array.prototype.forEach.call(t.children,function(e){e.nodeType===Node.ELEMENT_NODE&&L(e,f)&&(t.insertBefore(e.firstElementChild,e),t.removeChild(e))})}(e.element)},prepareDrag:function(e,t){var n=e.element,o=r.draggables;c(o,n),e.layout.invalidateRects(),o.forEach(function(e){return it(e,!0,u().animationDuration)}),l.start()},handleDrag:function(e){return t=i(o=e)},handleDrop:function(e){l.stop(),t&&t.dropPlaceholderContainer&&d.removeChild(t.dropPlaceholderContainer),o=null,i=Ot(r),a(e,t),t=null},fireRemoveElement:function(){a(o,Object.assign({},t,{addedIndex:null}),!0),t=null},getDragResult:function(){return t},getTranslateCalculator:function(e){return xt(r)(e)},onTranslated:function(){s()},setDraggables:function(){c(r.draggables,d)},getScrollMaxSpeed:function(){return It.maxScrollSpeed},shouldUseTransformForGhost:function(){return!0===It.useTransformForGhost},getOptions:u,setOptions:function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];n=!1===t?Object.assign({},C,e):Object.assign({},C,n,e)}}}}var It=function(e,t){var n=At(e)(t);return e[r]=n,rt.register(n),{dispose:function(){rt.unregister(n),n.dispose(n)},setOptions:function(e,t){n.setOptions(e,t)}}};function Bt(e,t,n){Object.defineProperty(e,n,{set:function(e){t[n]=e},get:function(){return t[n]}})}It.wrapChild=!0,It.cancelDrag=function(){rt.cancelDrag()},It.isDragging=function(){return rt.isDragging()};function Pt(e,t){return console.warn('default export is deprecated. please use named export "smoothDnD"'),It(e,t)}Pt.cancelDrag=function(){It.cancelDrag()},Pt.isDragging=function(){return It.isDragging()},Bt(Pt,It,"useTransformForGhost"),Bt(Pt,It,"maxScrollSpeed"),Bt(Pt,It,"wrapChild"),Bt(Pt,It,"dropHandler"),e.smoothDnD=It,e.constants=n,e.dropHandlers=k,e.default=Pt,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ "./node_modules/vue-ckeditor2/dist/vue-ckeditor2.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-ckeditor2/dist/vue-ckeditor2.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var t=(new Date).getTime();/* harmony default export */ __webpack_exports__["default"] = (function(t,n,e,i,s,o,a,c,r,d){"boolean"!=typeof a&&(r=c,c=a,a=!1);var u,h="function"==typeof e?e.options:e;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,s&&(h.functional=!0)),i&&(h._scopeId=i),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,r(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=u):n&&(u=a?function(){n.call(this,d(this.$root.$options.shadowRoot))}:function(t){n.call(this,c(t))}),u)if(h.functional){var f=h.render;h.render=function(t,n){return u.call(n),f(t,n)}}else{var l=h.beforeCreate;h.beforeCreate=l?[].concat(l,u):[u]}return e}({render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ckeditor"},[n("textarea",{attrs:{name:this.name,id:this.id,types:this.types,config:this.config,disabled:this.readOnlyMode},domProps:{value:this.value}})])},staticRenderFns:[]},void 0,{name:"VueCkeditor",props:{name:{type:String,default:function(){return"editor-".concat(++t)}},value:{type:String},id:{type:String,default:function(){return"editor-".concat(t)}},types:{type:String,default:function(){return"classic"}},config:{type:Object,default:function(){}},instanceReadyCallback:{type:Function},readOnlyMode:{type:Boolean,default:function(){return!1}}},data:function(){return{instanceValue:""}},computed:{instance:function(){return CKEDITOR.instances[this.id]}},watch:{value:function(t){try{this.instance&&this.update(t)}catch(t){}},readOnlyMode:function(t){this.instance.setReadOnly(t)}},mounted:function(){this.create()},methods:{create:function(){var t=this;"undefined"==typeof CKEDITOR?console.log("CKEDITOR is missing (http://ckeditor.com/)"):("inline"===this.types?CKEDITOR.inline(this.id,this.config):CKEDITOR.replace(this.id,this.config),this.instance.setData(this.value),this.instance.on("instanceReady",function(){t.instance.setData(t.value)}),this.instance.on("change",this.onChange),this.instance.on("mode",this.onMode),this.instance.on("blur",function(n){t.$emit("blur",n)}),this.instance.on("focus",function(n){t.$emit("focus",n)}),this.instance.on("contentDom",function(n){t.$emit("contentDom",n)}),CKEDITOR.on("dialogDefinition",function(n){t.$emit("dialogDefinition",n)}),this.instance.on("fileUploadRequest",function(n){t.$emit("fileUploadRequest",n)}),this.instance.on("fileUploadResponse",function(n){setTimeout(function(){t.onChange()},0),t.$emit("fileUploadResponse",n)}),void 0!==this.instanceReadyCallback&&this.instance.on("instanceReady",this.instanceReadyCallback),this.$once("hook:beforeDestroy",function(){t.destroy()}))},update:function(t){this.instanceValue!==t&&(this.instance.setData(t,{internal:!1}),this.instanceValue=t)},destroy:function(){try{var t=window.CKEDITOR;t.instances&&t.instances[this.id]&&t.instances[this.id].destroy()}catch(t){}},onMode:function(){var t=this;if("source"===this.instance.mode){var n=this.instance.editable();n.attachListener(n,"input",function(){t.onChange()})}},onChange:function(){var t=this.instance.getData();t!==this.value&&(this.$emit("input",t),this.instanceValue=t)}}},void 0,!1,void 0,void 0,void 0));


/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)

      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && document.addEventListener(clickHandler, handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },

  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    const clickHandler = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    !isServer(vNode) && el.__vueClickOutside__ && document.removeEventListener(clickHandler, el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "./node_modules/vue-resizable/dist/main.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-resizable/dist/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e,i){var n=i(2);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(5).default)("dd5680da",n,!1,{})},function(t,e,i){"use strict";var n=i(0);i.n(n).a},function(t,e,i){(e=i(3)(!1)).push([t.i,"\n.resizable-component[data-v-7a68f144] {\n    position: relative;\n}\n.resizable-component > .resizable-r[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    z-index: 90;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: e-resize;\n    width: 12px;\n    right: -6px;\n    top: 0;\n    height: 100%;\n}\n.resizable-component > .resizable-rb[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: se-resize;\n    width: 12px;\n    height: 12px;\n    right: -6px;\n    bottom: -6px;\n    z-index: 91;\n}\n.resizable-component > .resizable-b[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    z-index: 90;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: s-resize;\n    height: 12px;\n    bottom: -6px;\n    width: 100%;\n    left: 0;\n}\n.resizable-component > .resizable-lb[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: sw-resize;\n    width: 12px;\n    height: 12px;\n    left: -6px;\n    bottom: -6px;\n    z-index: 91;\n}\n.resizable-component > .resizable-l[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    z-index: 90;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: w-resize;\n    width: 12px;\n    left: -6px;\n    height: 100%;\n    top: 0;\n}\n.resizable-component > .resizable-lt[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: nw-resize;\n    width: 12px;\n    height: 12px;\n    left: -6px;\n    top: -6px;\n    z-index: 91;\n}\n.resizable-component > .resizable-t[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    z-index: 90;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: n-resize;\n    height: 12px;\n    top: -6px;\n    width: 100%;\n    left: 0;\n}\n.resizable-component > .resizable-rt[data-v-7a68f144] {\n    display: block;\n    position: absolute;\n    touch-action: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    cursor: ne-resize;\n    width: 12px;\n    height: 12px;\n    right: -6px;\n    top: -6px;\n    z-index: 91;\n}\n",""]),t.exports=e},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var s=(o=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(h," */")),r=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(r).concat([s]).join("\n")}var o,a,h;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);n&&s[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return l}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"resizable-component",style:t.style},[t._t("default"),t._v(" "),t._l(t.active,(function(e){return[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.maximize,expression:"!maximize"}],key:e,class:"resizable-"+e})]}))],2)};function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}n._withStripped=!0;var o={"resizable-r":{bit:1,cursor:"e-resize"},"resizable-rb":{bit:3,cursor:"se-resize"},"resizable-b":{bit:2,cursor:"s-resize"},"resizable-lb":{bit:6,cursor:"sw-resize"},"resizable-l":{bit:4,cursor:"w-resize"},"resizable-lt":{bit:12,cursor:"nw-resize"},"resizable-t":{bit:8,cursor:"n-resize"},"resizable-rt":{bit:9,cursor:"ne-resize"},"drag-el":{bit:15,cursor:"pointer"}},a={props:{width:{default:void 0,type:[Number,String]},minWidth:{default:0,type:Number},maxWidth:{default:void 0,type:Number},height:{default:void 0,type:[Number,String]},minHeight:{default:0,type:Number},maxHeight:{default:void 0,type:Number},left:{default:0,type:[Number,String]},top:{default:0,type:[Number,String]},active:{default:function(){return["r","rb","b","lb","l","lt","t","rt"]},validator:function(t){return["r","rb","b","lb","l","lt","t","rt"].filter((function(e){return-1!==t.indexOf(e)})).length===t.length},type:Array},fitParent:{default:!1,type:Boolean},dragSelector:{default:void 0,type:String},maximize:{default:!1,type:Boolean}},data:function(){return{w:this.width,h:this.height,minW:this.minWidth,minH:this.minHeight,maxW:this.maxWidth,maxH:this.maxHeight,l:this.left,t:this.top,mouseX:0,mouseY:0,offsetX:0,offsetY:0,parent:{width:0,height:0},resizeState:0,dragElements:[],dragState:!1}},watch:{maxWidth:function(t){this.maxW=t},maxHeight:function(t){this.maxH=t},minWidth:function(t){this.minW=t},minHeight:function(t){this.minH=t},width:function(t){"number"==typeof t&&(this.w=t)},height:function(t){"number"==typeof t&&(this.h=t)},left:function(t){"number"==typeof t&&(this.l=t)},top:function(t){"number"==typeof t&&(this.t=t)},dragSelector:function(t){this.setupDragElements(t)},maximize:function(t){this.setMaximize(t),this.emitEvent("maximize",{state:t})}},mounted:function(){this.width?"number"!=typeof this.width&&(this.w=this.$el.clientWidth):this.w=this.$el.parentElement.clientWidth,this.height?"number"!=typeof this.height&&(this.h=this.$el.clientHeight):this.h=this.$el.parentElement.clientHeight,"number"!=typeof this.left&&(this.l=this.$el.offsetLeft-this.$el.parentElement.offsetLeft),"number"!=typeof this.top&&(this.t=this.$el.offsetTop-this.$el.parentElement.offsetTop),this.minW&&this.w<this.minW&&(this.w=this.minW),this.minH&&this.h<this.minH&&(this.h=this.minH),this.maxW&&this.w>this.maxW&&(this.w=this.maxW),this.maxH&&this.h>this.maxH&&(this.h=this.maxH),this.setMaximize(this.maximize),this.setupDragElements(this.dragSelector),document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mousedown",this.handleDown,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0),this.emitEvent("mount")},beforeDestroy:function(){document.documentElement.removeEventListener("mousemove",this.handleMove,!0),document.documentElement.removeEventListener("mousedown",this.handleDown,!0),document.documentElement.removeEventListener("mouseup",this.handleUp,!0),this.emitEvent("destroy")},computed:{style:function(){return{width:"number"==typeof this.w?this.w+"px":this.w,height:"number"==typeof this.h?this.h+"px":this.h,left:"number"==typeof this.l?this.l+"px":this.l,top:"number"==typeof this.t?this.t+"px":this.t}}},methods:{setMaximize:function(t){var e=this.$el.parentElement;t?(this.prevState={w:this.w,h:this.h,l:this.l,t:this.t},this.t=this.l=0,this.w=e.clientWidth,this.h=e.clientHeight):this.restoreSize()},restoreSize:function(){this.prevState&&(this.l=this.prevState.l,this.t=this.prevState.t,this.h=this.prevState.h,this.w=this.prevState.w)},setupDragElements:function(t){var e=this.$el.querySelectorAll(t);e.forEach((function(t){t.classList.add("drag-el")})),this.dragElements=Array.prototype.slice.call(e)},emitEvent:function(t,e){this.$emit(t,function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({eventName:t,left:this.l,top:this.t,width:this.w,height:this.h},e))},handleMove:function(t){if(0!==this.resizeState){if(this.maximize&&this.prevState){var e=this.parent.width,i=this.parent.height;this.restoreSize(),this.prevState=void 0,this.t=t.clientY>i/2?i-this.h:0,this.l=t.clientX>e/2?e-this.w:0,this.emitEvent("maximize",{state:!1})}var n=t.clientX-this.mouseX+this.offsetX,s=t.clientY-this.mouseY+this.offsetY;this.offsetX=this.offsetY=0,this.resizeState&o["resizable-r"].bit&&(!this.dragState&&this.w+n<this.minW?this.offsetX=n-(n=this.minW-this.w):!this.dragState&&this.maxW&&this.w+n>this.maxW&&(!this.fitParent||this.w+this.l<this.parent.width)?this.offsetX=n-(n=this.maxW-this.w):this.fitParent&&this.l+this.w+n>this.parent.width&&(this.offsetX=n-(n=this.parent.width-this.l-this.w)),this.w+=this.dragState?0:n),this.resizeState&o["resizable-b"].bit&&(!this.dragState&&this.h+s<this.minH?this.offsetY=s-(s=this.minH-this.h):!this.dragState&&this.maxH&&this.h+s>this.maxH&&(!this.fitParent||this.h+this.t<this.parent.height)?this.offsetY=s-(s=this.maxH-this.h):this.fitParent&&this.t+this.h+s>this.parent.height&&(this.offsetY=s-(s=this.parent.height-this.t-this.h)),this.h+=this.dragState?0:s),this.resizeState&o["resizable-l"].bit&&(!this.dragState&&this.w-n<this.minW?this.offsetX=n-(n=this.w-this.minW):!this.dragState&&this.maxW&&this.w-n>this.maxW&&this.l>0?this.offsetX=n-(n=this.w-this.maxW):this.fitParent&&this.l+n<0&&(this.offsetX=n-(n=-this.l)),this.l+=n,this.w-=this.dragState?0:n),this.resizeState&o["resizable-t"].bit&&(!this.dragState&&this.h-s<this.minH?this.offsetY=s-(s=this.h-this.minH):!this.dragState&&this.maxH&&this.h-s>this.maxH&&this.t>0?this.offsetY=s-(s=this.h-this.maxH):this.fitParent&&this.t+s<0&&(this.offsetY=s-(s=-this.t)),this.t+=s,this.h-=this.dragState?0:s),this.mouseX=t.clientX,this.mouseY=t.clientY;var r=this.dragState?"drag:move":"resize:move";this.emitEvent(r)}},handleDown:function(t){for(var e in o)if(this.$el.contains(t.target)&&(t.target.closest&&t.target.closest(".".concat(e))||t.target.classList.contains(e))){"drag-el"===e&&(this.dragState=!0),document.body.style.cursor=o[e].cursor,t.preventDefault&&t.preventDefault(),this.offsetX=this.offsetY=0,this.mouseX=t.clientX,this.mouseY=t.clientY,this.resizeState=o[e].bit,this.parent.height=this.$el.parentElement.clientHeight,this.parent.width=this.$el.parentElement.clientWidth;var i=this.dragState?"drag:start":"resize:start";this.emitEvent(i);break}},handleUp:function(){if(0!==this.resizeState){this.resizeState=0,document.body.style.cursor="";var t=this.dragState?"drag:end":"resize:end";this.emitEvent(t),this.dragState=!1}}},name:"v-resizable"};i(1);var h=function(t,e,i,n,s,r,o,a){var h,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=h):s&&(h=a?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),h)if(l.functional){l._injectStyles=h;var u=l.render;l.render=function(t,e){return h.call(e),u(t,e)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,h):[h]}return{exports:t,options:l}}(a,n,[],!1,null,"7a68f144",null);h.options.__file="src/components/vue-resizable.vue";var l=h.exports},function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],o=r[0],a={id:t+":"+s,css:r[1],media:r[2],sourceMap:r[3]};n[o]?n[o].parts.push(a):i.push(n[o]={id:o,parts:[a]})}return i}i.r(e),i.d(e,"default",(function(){return d}));var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},o=s&&(document.head||document.getElementsByTagName("head")[0]),a=null,h=0,l=!1,u=function(){},c=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,i,s){l=i,c=s||{};var o=n(t,e);return p(o),function(e){for(var i=[],s=0;s<o.length;s++){var a=o[s];(h=r[a.id]).refs--,i.push(h)}e?p(o=n(t,e)):o=[];for(s=0;s<i.length;s++){var h;if(0===(h=i[s]).refs){for(var l=0;l<h.parts.length;l++)h.parts[l]();delete r[h.id]}}}}function p(t){for(var e=0;e<t.length;e++){var i=t[e],n=r[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(b(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var o=[];for(s=0;s<i.parts.length;s++)o.push(b(i.parts[s]));r[i.id]={id:i.id,refs:1,parts:o}}}}function m(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function b(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(l)return u;n.parentNode.removeChild(n)}if(f){var s=h++;n=a||(a=m()),e=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else n=m(),e=y.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}var v,g=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function x(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function y(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),c.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}}])}));

/***/ }),

/***/ "./node_modules/vue-smooth-dnd/dist/vue-smooth-dnd.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-smooth-dnd/dist/vue-smooth-dnd.esm.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-dnd */ "./node_modules/smooth-dnd/dist/index.js");
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_dnd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in smooth_dnd__WEBPACK_IMPORTED_MODULE_0__) if(["Container","Draggable","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return smooth_dnd__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/**
 * Bundle of: vue-smooth-dnd
 * Generated: 2019-10-26
 * Version: 0.8.1
 */




var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

function getTagProps (ctx, tagClasses) {
  var tag = ctx.$props.tag;
  if (tag) {
    if (typeof tag === 'string') {
      var result = { value: tag };
      if (tagClasses) {
        result.props = { class: tagClasses };
      }
      return result;
    } else if (typeof tag === 'object') {
      var result$1 = { value: tag.value || 'div', props: tag.props || {} };

      if (tagClasses) {
        if (result$1.props.class) {
          if (isArray(result$1.props.class)) {
            result$1.props.class.push(tagClasses);
          } else {
            result$1.props.class = [tagClasses, result$1.props.class];
          }
        } else {
          result$1.props.class = tagClasses;
        }
      }

      return result$1;
    }
  }
  return { value: 'div' };
}

function validateTagProp (tag) {
  if (tag) {
    if (typeof tag === 'string') { return true; }
    if (typeof tag === 'object') {
      if (
        typeof tag.value === 'string' ||
        typeof tag.value === 'function' ||
        typeof tag.value === 'object'
      ) {
        return true;
      }
    }
    return false;
  }
  return true;
}

/* eslint-disable curly */

smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["smoothDnD"].dropHandler = smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["dropHandlers"].reactDropHandler().handler;
smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["smoothDnD"].wrapChild = false;

var eventEmitterMap = {
  'drag-start': 'onDragStart',
  'drag-end': 'onDragEnd',
  'drop': 'onDrop',
  'drag-enter': 'onDragEnter',
  'drag-leave': 'onDragLeave',
  'drop-ready': 'onDropReady'
};

function getContainerOptions (props, context) {
  var options = Object.keys(props).reduce(function (result, key) {
    var optionName = key;
    var prop = props[optionName];

    if (prop !== undefined) {
      if (typeof prop === 'function') {
        if (eventEmitterMap[optionName]) {
          result[eventEmitterMap[optionName]] = function (params) {
            context.$emit(optionName, params);
          };
        } else {
          result[optionName] = function () {
            var params = [], len = arguments.length;
            while ( len-- ) params[ len ] = arguments[ len ];

            return (prop).apply(void 0, params);
          };
        }
      } else {
        result[optionName] = prop;
      }
    }

    return result;
  }, {});

  return options;
}

var mapOptions = function (context) {
  var props = Object.assign({}, context.$props, context.$listeners);
  return getContainerOptions(props, context);
};

var Container = {
  name: 'Container',
  mounted: function mounted () {
    this.containerElement = this.$refs.container || this.$el;
    this.container = Object(smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["smoothDnD"])(this.containerElement, mapOptions(this));
  },
  updated: function updated () {
    if (
      this.$refs.container !== this.containerElement &&
      this.$el !== this.containerElement
    ) {
      if (this.container) {
        this.container.dispose();
      }
      this.containerElement = this.$refs.container || this.$el;
      this.container = Object(smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["smoothDnD"])(this.containerElement, mapOptions(this));
      return;
    }

    this.container.setOptions(mapOptions(this));
  },
  destroyed: function destroyed () {
    if (this.container) {
      this.container.dispose();
    }
  },
  props: {
    behaviour: String,
    groupName: String,
    orientation: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    dragBeginDelay: Number,
    animationDuration: Number,
    autoScrollEnabled: { type: Boolean, default: true },
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    removeOnDropOut: { type: Boolean, default: false },
    'drag-start': Function,
    'drag-end': Function,
    drop: Function,
    getChildPayload: Function,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    'drag-enter': Function,
    'drag-leave': Function,
    tag: {
      validator: validateTagProp,
      default: 'div',
    },
    getGhostParent: Function,
    'drop-ready': Function,
    dropPlaceholder: [Object, Boolean]
  },
  render: function (createElement) {
    var tagProps = getTagProps(this);
    return createElement(
      tagProps.value,
      Object.assign({}, { ref: 'container' }, tagProps.props),
      this.$slots.default
    );
  }
};

var wrapChild = function (createElement, ctx) {
  var tagProps = getTagProps(ctx, smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["constants"].wrapperClass);
  return createElement(
    tagProps.value,
    Object.assign({}, tagProps.props),
    ctx.$slots.default
  );
};

var Draggable = {
  name: 'Draggable',
  props: {
    tag: {
      validator: validateTagProp,
      default: 'div'
    }
  },
  render: function (createElement) {
    return wrapChild(createElement, this);
  }
};




/***/ })

}]);