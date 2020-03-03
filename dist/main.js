module.exports=function(r){var e={};function n(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return r[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)n.d(t,a,function(e){return r[e]}.bind(null,a));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=10)}([function(r,e){r.exports=require("react")},function(r,e){r.exports=require("prop-types")},function(r,e){r.exports=require("moment")},function(r,e,n){"use strict";var t,a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var r={};return function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[e]=n}return r[e]}}(),i={};function c(r,e,n){for(var t=0;t<e.length;t++){var a={css:e[t][1],media:e[t][2],sourceMap:e[t][3]};i[r][t]?i[r][t](a):i[r].push(m(a,n))}}function l(r){var e=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var a=n.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(e);else{var i=o(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,d=(s=[],function(r,e){return s[r]=e,s.filter(Boolean).join("\n")});function u(r,e,n,t){var a=n?"":t.css;if(r.styleSheet)r.styleSheet.cssText=d(e,a);else{var o=document.createTextNode(a),i=r.childNodes;i[e]&&r.removeChild(i[e]),i.length?r.insertBefore(o,i[e]):r.appendChild(o)}}function h(r,e,n){var t=n.css,a=n.media,o=n.sourceMap;if(a?r.setAttribute("media",a):r.removeAttribute("media"),o&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p=null,f=0;function m(r,e){var n,t,a;if(e.singleton){var o=f++;n=p||(p=l(e)),t=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=l(e),t=h.bind(null,n,e),a=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return t(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;t(r=e)}else a()}}r.exports=function(r,e,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a()),r=n.base?r+n.base:r,e=e||[],i[r]||(i[r]=[]),c(r,e,n),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){i[r]||(i[r]=[]),c(r,e,n);for(var t=e.length;t<i[r].length;t++)i[r][t]();i[r].length=e.length,0===i[r].length&&delete i[r]}}}},function(r,e,n){"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n=function(r,e){var n=r[1]||"",t=r[3];if(!t)return n;if(e&&"function"==typeof btoa){var a=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,l;return[n].join("\n")}(e,r);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(r,n){"string"==typeof r&&(r=[[null,r,""]]);for(var t=0;t<r.length;t++){var a=[].concat(r[t]);n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a)}},e}},function(r,e){r.exports=require("react-textarea-autosize")},function(r,e,n){var t=n(3),a=n(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1},i=(t(r.i,a,o),a.locals?a.locals:{});r.exports=i},function(r,e,n){(e=n(4)(!1)).push([r.i,".react-chat-container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.react-chat-row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .react-chat-container {\r\n        max-width: 1140px;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .react-chat-container {\r\n        max-width: 960px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 768px) {\r\n    .react-chat-container {\r\n        max-width: 720px;\r\n    }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .react-chat-container {\r\n        max-width: 540px;\r\n    }\r\n}\r\n\r\n.react-chat-viewerBox {\r\n    border-color: rgba(33,37,41,0.15);\r\n    color: #212529;\r\n    background-color: #fff;\r\n    min-height: 300px;\r\n    height: 60vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    width: 400px;\r\n    /* max-width: 500px; */\r\n    margin: auto auto;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    outline: 0;\r\n}\r\n\r\n.react-chat-messagesList {\r\n    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.4);\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    scroll-behavior: smooth;\r\n    border-width: 0 0 1px 0;\r\n    border-style: solid;\r\n    border-color: inherit;\r\n}\r\n\r\n.react-chat-messagesListContent {\r\n    padding: 16px 16px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    flex: 0 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    overflow: hidden;\r\n}\r\n\r\n.react-chat-messageBox {\r\n    max-width: 80%;\r\n    background: none;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    flex-direction: column;\r\n    position: relative;\r\n    margin-top: 3px;\r\n}\r\n\r\n.react-chat-messageBoxLeft {\r\n    padding-left: 40px;\r\n    align-items: flex-start;\r\n    text-align: left;\r\n}\r\n\r\n.react-chat-messageBoxRight {\r\n    padding-right: 40px;\r\n    align-self: flex-end;\r\n    align-items: flex-end;\r\n    text-align: right;\r\n}\r\n\r\n.react-chat-message-buttonGroupLeft a {\r\n    text-align: center;\r\n    color: #212529;\r\n}\r\n\r\n.react-chat-message-buttonGroupRight a {\r\n    text-align: center;\r\n    color: rgba(93, 120, 255, 0.1) ;\r\n}\r\n\r\n.react-chat-message-button {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    border-radius: 12px;\r\n    padding: 5px;\r\n}\r\n\r\n.react-chat-message-button:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.react-chat-message {\r\n    max-width: 100%;\r\n    margin: 2px 0 0;\r\n    position: relative;\r\n    transition: margin .2s ease-in-out;\r\n}\r\n\r\n.react-chat-messageLeft {\r\n    align-items: flex-start;\r\n    text-align: left;\r\n}\r\n\r\n.react-chat-messageRight {\r\n    align-self: flex-end;\r\n    align-items: flex-end;\r\n    text-align: right;\r\n}\r\n\r\n.react-chat-bubble {\r\n    transition: box-shadow .2s ease-in-out;\r\n    order: -1;\r\n    box-shadow: none;\r\n    border-radius: 12px;\r\n    padding: 8px 16px;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    line-height: 1.25;\r\n    word-wrap: break-word;\r\n    font-size: 1rem;\r\n    width: fit-content;\r\n    text-align: left;\r\n    word-break: break-word;\r\n    white-space: break-spaces;\r\n}\r\n\r\n.react-chat-leftBubble {\r\n    border-bottom-left-radius: 2px;\r\n    border-color: rgba(29, 201, 183, 0.1);\r\n    color: #212529;\r\n    background-color: rgba(29, 201, 183, 0.1);\r\n    float: left;\r\n}\r\n\r\n.react-chat-rightBubble {\r\n    border-bottom-right-radius: 2px;\r\n    border-color: rgba(93, 120, 255, 0.1) ;\r\n    color: #fff;\r\n    background-color: rgba(93, 120, 255, 0.1) ;\r\n    float: right;\r\n}\r\n\r\n.react-chat-avatar {\r\n    border-radius: 100%;\r\n    width: 32px;\r\n    height: 32px;\r\n    margin: 0;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    vertical-align: middle;\r\n    border-style: none;\r\n    bottom: 20px;\r\n}\r\n\r\n.react-chat-avatarLeft {\r\n    left: 0;\r\n}\r\n\r\n.react-chat-avatarRight {\r\n    right: 0;\r\n}\r\n\r\n.react-chat-inputBox {\r\n    /*border-color: inherit;*/\r\n    color: #212529;\r\n    background-color: #fff;\r\n    /* padding: 10px 16px; */\r\n/*    border-width: 1px 0 0;\r\n    border-style: solid;*/\r\n    flex: 0 0 auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.react-chat-sendText {\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    padding: 0 5px;\r\n    color: #FFF;\r\n}\r\n\r\n.react-chat-textarea, .react-chat-sendButton {\r\n    padding: 9px 16px !important;\r\n    min-width: 45px !important;\r\n}\r\n\r\n.disabled {\r\n    opacity: 0.3;\r\n    background-color: rgba(29, 201, 183, 0.1)\r\n}\r\n\r\n.react-chat-textarea {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font: inherit;\r\n    background: none;\r\n    flex: 1 1 auto;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n    color: inherit;\r\n    display: flex;\r\n    align-items: center;\r\n    -webkit-appearance: none;\r\n    resize: none;\r\n}\r\n\r\n.react-chat-sendButton {\r\n    /* padding: 0; */\r\n    border-color: transparent !important;\r\n    /* color: inherit; */\r\n    /* background: none !important; */\r\n    box-shadow: none !important;\r\n    transition: color .2s ease-in-out;\r\n    border-radius: 5px;\r\n    max-height: 36px !important;\r\n    background-color: #51965E !important;\r\n    box-sizing: border-box;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    font-family: inherit;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    white-space: nowrap;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    vertical-align: middle;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    outline: none;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n}\r\n.react-chat-SendIcon{\r\n    fill: rgba(255,255,255,1);\r\n}\r\n\r\n.react-chat-SendIcon:hover {\r\n    /* fill: rgba(93, 120, 255, 0.1) ; */\r\n    fill: rgba(255,255,255,1);\r\n}\r\n\r\n.react-chat-SendIcon-disable {\r\n    fill: orange;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.react-chat-additional {\r\n    width: 100%;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    color: #5f6368;\r\n    font-size: 13px;\r\n}\r\n\r\n.react-chat-bubbleWithError {\r\n    position: relative;\r\n}\r\n\r\n.react-chat-error {\r\n    position: absolute;\r\n    fill: red;\r\n}\r\n\r\n.react-chat-errorLeft {\r\n    right: -30px;\r\n}\r\n\r\n.react-chat-errorRight {\r\n    left: -30px;\r\n}\r\n\r\n.react-chat-notification {\r\n    width: 100%;\r\n    word-break: break-word;\r\n}\r\n\r\n.react-chat-typing-indicator {\r\n      background-color: rgba(29, 201, 183, 0.1);\r\n      width: auto;\r\n      border-radius: 50px;\r\n      /*padding: 20px;*/\r\n      display: table;\r\n      margin: 0 auto;\r\n      position: relative;\r\n}\r\n\r\n.react-chat-typing-indicator span {\r\n    height: 1rem;\r\n    width: 1rem;\r\n    float: left;\r\n    margin: 0 1px;\r\n    background-color: #9E9EA1;\r\n    display: block;\r\n    border-radius: 50%;\r\n    opacity: 0.4;\r\n}\r\n\r\n.react-chat-typing-indicator span:nth-of-type(1) {\r\n  -webkit-animation: 1s blink infinite 0.3333s;\r\n          animation: 1s blink infinite 0.3333s;\r\n}\r\n.react-chat-typing-indicator span:nth-of-type(2) {\r\n  -webkit-animation: 1s blink infinite 0.6666s;\r\n          animation: 1s blink infinite 0.6666s;\r\n}\r\n.react-chat-typing-indicator span:nth-of-type(3) {\r\n  -webkit-animation: 1s blink infinite 0.9999s;\r\n          animation: 1s blink infinite 0.9999s;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes blink {\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes bulge {\r\n  50% {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n  }\r\n}\r\n@keyframes bulge {\r\n  50% {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n  }\r\n}\r\n\r\n\r\n\r\n.react-chat-rightBubble-cancelled, .react-chat-leftBubble-cancelled {\r\n    border: none;\r\n    color: #4B4D53;\r\n}\r\n\r\n.react-chat-leftBubble-cancelled {\r\n    margin-right: auto;\r\n}\r\n\r\n.react-chat-rightBubble-cancelled {\r\n    margin-left: auto;\r\n}\r\n\r\n.react-chat-bubble.react-chat-rightBubble-cancelled{\r\n    padding-right: 0px !important;\r\n}\r\n\r\n.react-chat-bubble.react-chat-leftBubble-cancelled{\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.react-chat-additional{\r\n    font-size: 10px;\r\n    color: #969696 !important\r\n}\r\n\r\n.react-chat-message.react-chat-messageRight.react-chat-rightBubble, .react-chat-message.react-chat-messageLeft.react-chat-leftBubble {\r\n    border-radius: 20px;\r\n}\r\n\r\n.react-chat-message.react-chat-messageRight.react-chat-rightBubble {\r\n    border-top-right-radius: 0px;\r\n}\r\n\r\n.react-chat-message.react-chat-messageLeft.react-chat-leftBubble {\r\n    border-top-left-radius: 0px;\r\n}\r\n\r\n.react-chat-avatar { \r\n    bottom: 0;\r\n    top: -5px;\r\n}\r\n\r\n.react-chat-sendButton {\r\n    /* background-color: #51965E !important; */\r\n    color: #fff !important;\r\n}",""]),r.exports=e},function(r,e,n){var t=n(3),a=n(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1},i=(t(r.i,a,o),a.locals?a.locals:{});r.exports=i},function(r,e,n){(e=n(4)(!1)).push([r.i,".react-chat-frame {\r\n    border: 0px;\r\n    background-color: transparent;\r\n    /*pointer-events: none;*/\r\n    z-index: 2147483639;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 280px;\r\n    /*height: 224px;*/\r\n    overflow: hidden;\r\n    opacity: 1;\r\n    max-width: 100%;\r\n    right: 0px;\r\n    max-height: 100%;\r\n}\r\n\r\n.react-chat-frame-wrapper {\r\n    user-select: all;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n    height: 100%;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.react-chat-frame-custom {\r\n    user-select: none;\r\n    width: 240px;\r\n    margin: 20px 20px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.react-chat-frame-icon {\r\n    width: 60px;\r\n    height: 60px;\r\n    padding: 5px 0px 0px 0px;\r\n    border-radius: 25%;\r\n    box-shadow: 0 0 50px 0 rgba(0,0,0,.06);\r\n    overflow: hidden;\r\n    margin: 20px 20px 0px 20px;\r\n    transition: all .3s;\r\n    pointer-events: all;\r\n    cursor: pointer;\r\n    background: rgb(0, 108, 255);\r\n    fill: white;\r\n}\r\n\r\n.react-chat-close-icon {\r\n    width: 15px;\r\n    height: 15px;\r\n    margin: 15px 25px 15px 15px;\r\n    fill: rgba(33,37,41,0.45);\r\n    cursor: pointer;\r\n}",""]),r.exports=e},function(r,e,n){"use strict";n.r(e);var t=n(0),a=n.n(t),o=n(1),i=n.n(o),c=n(5),l=n.n(c);function s(){return(s=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}var d=a.a.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),u=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"});var h=function(r){return a.a.createElement("svg",s({width:"2.2em",height:"1.5em",viewBox:"0 0 24 24"},r),d,u)};function p(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if(!(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)))return;var n=[],t=!0,a=!1,o=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);t=!0);}catch(r){a=!0,o=r}finally{try{t||null==c.return||c.return()}finally{if(a)throw o}}return n}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(r){var e=p(Object(t.useState)(""),2),n=e[0],o=e[1],i=function(r){return r.replace(/^\s+|\s+$/g,"")},c=function(e){r.onSendMessage(e),o("")};return a.a.createElement("div",{className:"react-chat-inputBox ".concat(r.disabled?"disabled":"")},a.a.createElement(l.a,{maxRows:3,className:"react-chat-textarea",placeholder:r.disabled?r.disabledInputPlaceholder:r.placeholder?r.placeholder:"Press shift + enter to send",value:n,onChange:function(r){o(r.target.value)},onKeyPress:function(r){if(r.shiftKey&&13===r.charCode){var e=i(n);return e.length&&c(e),r.preventDefault(),!1}},autoFocus:!0,disabled:r.disabled}),a.a.createElement("button",{className:"react-chat-sendButton",onClick:function(r){var e=i(n);e.length&&c(e)},disabled:r.disabled},a.a.createElement("span",{className:"react-chat-sendText"}," SEND "),a.a.createElement(h,{className:r.disabled?"react-chat-SendIcon-disable":"react-chat-SendIcon"})))}f.propTypes={onSendMessage:i.a.func,disabled:i.a.bool,disabledInputPlaceholder:i.a.string,placeholder:i.a.string};var m=n(2),b=n.n(m);function g(){return(g=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}var x=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),v=a.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"});var y=function(r){return a.a.createElement("svg",g({width:24,height:24},r),x,v)};function w(r){var e=r.type,n=r.timestamp,t=r.timestampFormat,o=(r.buttons,r.left),i=r.author,c=r.hasError,l=r.text;r.activeAuthor;if("text"===e||"indicator"===e){var s;n&&(s="calendar"===t?b()(n).calendar():"fromNow"===t?b()(n).fromNow():b()(n).format(t));var d=d?d.map((function(r,e){if("URL"==r.type)return a.a.createElement("a",{key:e,href:r.payload,target:"_blank",className:"my-1 react-chat-message-button"},r.title)})):[];return a.a.createElement("div",{className:"react-chat-messageBox ".concat(o?"react-chat-messageBoxLeft":"react-chat-messageBoxRight")},a.a.createElement("img",{alt:"avater img",src:i.avatarUrl?i.avatarUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAABlBMVEUAgAAAgAAvApEWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFklEQVQImWNgIAFwMDSAaWYGA2K1AAAiqQC8t2zWVgAAAABJRU5ErkJggg==",className:"react-chat-avatar ".concat(o?"react-chat-avatarLeft":"react-chat-avatarRight")}),a.a.createElement("div",{className:"react-chat-message p-3 ".concat(o?"react-chat-messageLeft react-chat-leftBubble":"react-chat-messageRight react-chat-rightBubble")},a.a.createElement("div",{className:"react-chat-additional"},i.username),a.a.createElement("div",{className:"react-chat-bubble ".concat(o?"react-chat-leftBubble-cancelled":"react-chat-rightBubble-cancelled"," ").concat(c?"react-chat-bubbleWithError":"")},"indicator"===e&&a.a.createElement("div",{className:"react-chat-typing-indicator"},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)),l,d.length>0&&a.a.createElement("div",{className:o?"react-chat-message-buttonGroupLeft":"react-chat-message-buttonGroupRight"},d),c&&a.a.createElement(y,{className:"".concat(o?"react-chat-errorLeft":"react-chat-errorRight"," react-chat-error")})),a.a.createElement("div",{className:"react-chat-additional"},null!==s&&s)))}if("notification"===e)return a.a.createElement("div",{className:"my-3 text-center text-secondary react-chat-notification"},l)}n(6);function E(r){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function A(){return(A=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function k(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function B(r){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function O(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function j(r,e){return(j=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}var S=function(r){function e(r){var n,t,a;return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,(n=!(a=B(e).call(this,r))||"object"!==E(a)&&"function"!=typeof a?O(t):a).scrollToBottom=n.scrollToBottom.bind(O(n)),n.handleOnSendMessage=n.handleOnSendMessage.bind(O(n)),n}var n,t,o;return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&j(r,e)}(e,r),n=e,(t=[{key:"scrollToBottom",value:function(){this.messagesList&&(this.messagesList.scrollTop=this.messagesList.scrollHeight-this.messagesList.clientHeight)}},{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"handleOnSendMessage",value:function(r){this.props.onSendMessage(r)}},{key:"render",value:function(){var r=this,e=this.props,n=e.messages,t=e.userId,o=e.timestampFormat,i=e.height,c=e.width,l=e.disableInput,s=e.disabledInputPlaceholder,d=e.placeholder,u=e.style,h=e.showTypingIndicator,p=e.activeAuthor,m=n.map((function(r,e){return a.a.createElement(w,A({key:e,left:r.author&&r.author.id!==t,timestampFormat:o},r))}));return a.a.createElement("div",{style:u,className:"react-chat-container"},a.a.createElement("div",{className:"react-chat-row"},a.a.createElement("div",{className:"react-chat-viewerBox",style:{height:i,width:c}},a.a.createElement("div",{className:"react-chat-messagesList",ref:function(e){return r.messagesList=e}},a.a.createElement("div",{className:"react-chat-messagesListContent"},m,h&&null!==p&&a.a.createElement(w,{type:"indicator",author:p,text:"",left:!0}))),a.a.createElement(f,{onSendMessage:this.handleOnSendMessage,disabled:l,placeholder:d,disabledInputPlaceholder:s}))))}}])&&k(n.prototype,t),o&&k(n,o),e}(a.a.Component);S.propTypes={messages:i.a.array,userId:i.a.oneOfType([i.a.string,i.a.number]).isRequired,onSendMessage:i.a.func.isRequired,timestampFormat:i.a.string,width:i.a.string,height:i.a.string,disableInput:i.a.bool,disabledInputPlaceholder:i.a.string,placeholder:i.a.string,style:i.a.object,showTypingIndicator:i.a.bool,activeAuthor:i.a.object},S.defaultProps={messages:[],timestampFormat:"calendar",disableInput:!1,disabledInputPlaceholder:"",placeholder:"",showTypingIndicator:!1,activeAuthor:null};var N=S;function M(){return(M=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}var C=a.a.createElement("path",{d:"M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"});var L=function(r){return a.a.createElement("svg",M({width:45,height:45,viewBox:"0 0 576 512"},r),C)};function I(){return(I=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}var T=a.a.createElement("path",{d:"M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"});var R=function(r){return a.a.createElement("svg",I({viewBox:"0 0 448 512"},r),T)};n(8);function P(r){var e=r.icon,n=r.chatbox,t=r.showChatbox,o=r.clickIcon,i=r.showIcon;return a.a.createElement("div",{className:"react-chat-frame"},a.a.createElement("div",{className:"react-chat-frame-wrapper"},t&&void 0!==n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"react-chat-close-icon",onClick:o},a.a.createElement(R,null)),n),!t&&a.a.createElement("div",{className:"react-chat-frame-custom"},r.children),i&&a.a.createElement("div",{className:"react-chat-frame-icon",onClick:o},void 0!==e?e:a.a.createElement(L,null))))}P.propTypes={icon:i.a.element,chatbox:i.a.element.isRequired,showChatbox:i.a.bool,clickIcon:i.a.func,showIcon:i.a.bool};var z=P;n.d(e,"ChatFrame",(function(){return z}));e.default=N}]);