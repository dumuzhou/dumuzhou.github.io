(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[178],{"0m3q":function(e,t,a){"use strict";a("q1tI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("0Owb"),c=a("tJVT"),l=a("q1tI"),r=a.n(l),i=a("3Mpw"),o=a("dEAq");a("qHiR"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,l=e.showCopy,s=void 0===l||l,m=Object(o["useCopy"])(),d=Object(c["a"])(m,2),u=d[0],v=d[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(i["a"],Object(n["a"])({},i["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,c=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},s&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":v,onClick:()=>u(t)}),c.map(((e,t)=>r.a.createElement("div",l({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",i({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("0Owb"),a("q1tI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("0Owb"),c=a("q1tI"),l=a.n(c);a("tCeM");t["a"]=e=>l.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return g}));var n=a("q1tI"),c=a.n(n),l=a("tJVT"),r=a("/7QA"),i=a("9kvl"),o=a("dEAq"),s=a("Bjia");a("YWOM");function m(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var d=e=>{var t=Object(n["useRef"])(null),a=Object(n["useContext"])(o["context"]),d=a.locale,u=Object(o["useLocaleProps"])(d,e),v=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(u.identifier),h=1===Object.keys(u.sources).length,E=Object(o["useMotions"])(u.motions||[],t.current),b=Object(l["a"])(E,2),p=b[0],f=b[1],g=Object(o["useCopy"])(),_=Object(l["a"])(g,2),w=_[0],k=_[1],j=Object(n["useState"])("_"),O=Object(l["a"])(j,2),x=O[0],N=O[1],y=Object(n["useState"])(m(x,u.sources[x])),C=Object(l["a"])(y,2),M=C[0],V=C[1],Z=u.sources[x][M]||u.sources[x].content,q=Object(o["useTSPlaygroundUrl"])(d,Z),A=Object(o["usePrefersColor"])(),L=Object(l["a"])(A,1);L[0];function I(e){N(e),V(m(e,u.sources[e]))}return c.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",v?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0},c.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&c.a.createElement(o["AnchorLink"],{to:"#".concat(u.identifier)},u.title),u.description&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),c.a.createElement("div",{className:"__dumi-default-previewer-actions"},u.debug&&c.a.createElement("span",{className:"debug-badge"},"Debug Only"),u.motions&&c.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:f,onClick:()=>p()}),c.a.createElement("div",{className:"spacer"}),c.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:()=>w(Z)}),"tsx"===M&&c.a.createElement(o["Link"],{target:"_blank",to:q},c.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),c.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&c.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:x,onChange:I},Object.keys(u.sources).map((e=>c.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(m(e,u.sources[e])):e,key:e})))),c.a.createElement("div",{className:"__dumi-default-previewer-source"},c.a.createElement(s["a"],{code:Z,lang:M,showCopy:!1}))))},u=d,v=(a("oeoJ"),a("D1Df")),h=a.n(v),E=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),i=Object(l["a"])(a,2),s=i[0],m=i[1],d=Object(o["usePrefersColor"])(),u=Object(l["a"])(d,1),v=u[0],E=Object(n["useContext"])(o["context"]),g=E.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[v]),c.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},c.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),c.a.createElement("div",{className:"adm-doc-device-action"},c.a.createElement("a",{onClick:()=>m(Math.random())},b),c.a.createElement(r["Popover"],{content:c.a.createElement(h.a,{value:t,size:96}),trigger:"click"},c.a.createElement("a",null,p)),c.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},f)))}),b=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),p=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),f=c.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),g="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return c.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},c.a.createElement("div",{className:"adm-doc-previewer-source"},c.a.createElement(u,e)),c.a.createElement("div",{className:"adm-doc-previewer-device"},c.a.createElement(E,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),l=a("eqKt"),r=a.n(l),i=e=>c.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&c.a.createElement("img",{src:e.image,alt:e.title}),c.a.createElement("div",{className:r.a.content},c.a.createElement("div",{className:r.a.title},e.title),c.a.createElement("div",{className:r.a.description},e.description)));t["a"]=i},mVOg:function(e,t,a){"use strict";var n=a("tJVT"),c=a("q1tI"),l=a.n(c),r=a("dEAq"),i=a("/7QA");t["a"]=()=>{var e=Object(c["useContext"])(r["context"]),t=e.locale,a=Object(c["useState"])(!1),o=Object(n["a"])(a,2),s=o[0],m=o[1];return l.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},l.a.createElement(i["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},l.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},s8zK:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),l=a("dEAq"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX"),a("gKi5"),a("Bjia")),i=(a("0m3q"),c.a.memo((e=>{e.demos;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u5feb\u901f\u4e0a\u624b"},c.a.createElement(l["AnchorLink"],{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),c.a.createElement("p",null,"antd-mobile-ui \u662f\u7528 taro3 \u5f00\u53d1\uff0c\u517c\u5bb9 rn\u3001h5 \u548c\u5c0f\u7a0b\u5e8f\u7684 ui"),c.a.createElement("h2",{id:"\u5b89\u88c5"},c.a.createElement(l["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),c.a.createElement(r["a"],{code:"$ npm install --save antd-mobile-ui\n$ npm install --save antd-mobile-ui-rn\n# or\n$ yarn add antd-mobile-ui\n$ yarn add antd-mobile-ui-rn",lang:"bash"}),c.a.createElement("h2",{id:"\u914d\u7f6e"},c.a.createElement(l["AnchorLink"],{to:"#\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e"),c.a.createElement("p",null,"\u7f16\u8f91 config/index.js h5 \u4e0b\u589e\u52a0\u914d\u7f6e"),c.a.createElement(r["a"],{code:'esnextModules: ["antd-mobile-ui"],',lang:"javascript"}),c.a.createElement("h2",{id:"\u5f15\u5165"},c.a.createElement(l["AnchorLink"],{to:"#\u5f15\u5165","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5f15\u5165"),c.a.createElement("p",null,"components/antd-mobile-ui/index.tsx"),c.a.createElement(r["a"],{code:"export { Button, Space } from 'antd-mobile-ui'",lang:"javascript"}),c.a.createElement("p",null,"components/antd-mobile-ui/index.rn.tsx"),c.a.createElement(r["a"],{code:"export { Button, Space } from 'antd-mobile-ui-rn'",lang:"javascript"}),c.a.createElement("h2",{id:"\u4f7f\u7528"},c.a.createElement(l["AnchorLink"],{to:"#\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528"),c.a.createElement(r["a"],{code:"import { Button, Space } from 'components/antd-mobile-ui'",lang:"javascript"})))})));t["default"]=e=>{var t=c.a.useContext(l["context"]),a=t.demos;return c.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),c.a.createElement(i,{demos:a})}},tCeM:function(e,t,a){}}]);