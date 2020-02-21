(this.webpackJsonpardenj=this.webpackJsonpardenj||[]).push([[0],{16:function(n,e,t){n.exports=t(26)},26:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(11),o=t.n(i),c=t(1),l={bodyPrimary:"#fff",bodySecondary:"#fff",textPrimary:"#191414",textSecondary:"#101010",accent1:"#ff6666",accent2:"#66b3ff",screenWidth:{medium:"(min-width: 424px)",large:"(min-width: 699px)"}},m=t(2);function u(){var n=Object(m.a)(["\n\n@import url('href=\"https://fonts.googleapis.com/css?family=Lato:700|Montserrat:500,700&display=swap\"');\n    \n    * {\n        padding: 0;\n        margin: 0;\n    }\n    \n    html, body {\n        font-family: 'Lato', sans-serif;\n    }\n    *, *::after, *::before {\n        box-sizing: border-box;\n    }\n    body {\n        overflow-x: hidden;\n        align-items: center;\n        color: ",";\n        display: flex;\n        height: 100vh;\n        justify-content: center;\n        text-rendering: optimizeLegibility;\n        line-height: 1.5;\n    }\n    \n    h1, h2, h3, h4, h5, h6 {\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700;\n        line-height: 1;\n    }\n"]);return u=function(){return n},n}var d=Object(c.b)(u(),(function(n){return n.theme.textDark}));function h(){var n=Object(m.a)(["\n  min-height: 100vh;\n  width: 100vw;\n  background-color: ",";\n\n  display: grid;\n"]);return h=function(){return n},n}var f=c.c.main(h(),(function(n){return n.theme.bodyPrimary}));function s(n){return a.a.createElement(f,null,n.children)}function p(){var n=Object(m.a)(["\n  grid-area: header;\n  font-weight: 900;\n  margin: auto;\n  line-height: 1;\n  width: 100%;\n\n  h1 {\n    font-size: 2.6rem;\n    color: ",";\n  }\n\n  p {\n    line-height: 2rem;\n    font-size: 1.8rem;\n    width: 80%;\n    margin: 0.4rem 0 0.8rem 0;\n    color: ",";\n  }\n\n  a {\n    color: ",";\n  }\n\n  @media "," {\n    p {\n      width: 80%;\n    }\n  }\n\n  @media "," {\n    h1 {\n      font-size: 3.8rem;\n    }\n\n    p {\n      width: 70%;\n    }\n  }\n"]);return p=function(){return n},n}var g=c.c.header(p(),(function(n){return n.theme.primary}),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.textSecondary}),(function(n){return n.theme.screenWidth.medium}),(function(n){return n.theme.screenWidth.large}));function w(n){return a.a.createElement(g,{"data-testid":"title"},a.a.createElement(a.a.Fragment,null,n.children))}function y(){var n=Object(m.a)(["\n  background-color: transparent;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 1.2rem;\n  padding: 0.8rem 1.2rem;\n  margin: 0 0.6rem 0.4rem 0;\n  border: 4px solid ",";\n  color: ",";\n"]);return y=function(){return n},n}function b(){var n=Object(m.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  background: transparent;\n  width: 60%;\n\n  @media "," {\n    width: 70%;\n  }\n\n  @media "," {\n    width: 100%;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n    cursor: pointer;\n  }\n"]);return b=function(){return n},n}c.c.div(b(),(function(n){return n.theme.screenWidth.medium}),(function(n){return n.theme.screenWidth.large}),(function(n){return n.theme.textPrimary})),c.c.button(y(),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.textDark}));function v(){var n=Object(m.a)(["\n  overflow-x: hidden;\n  align-items: center;\n  background-color: ",";\n  color: ",";\n  min-height: 60vh;\n  width: 100vw;\n  justify-content: center;\n  text-rendering: optimizeLegibility;\n  padding: 2rem;\n\n  @media "," {\n    margin: 0 auto;\n    min-height: 50vh;\n  }\n  @media "," {\n    max-width: 100vw;\n    min-height: 48vh;\n  }\n"]);return v=function(){return n},n}var x=c.c.main(v(),(function(n){return n.theme.bodyPrimary}),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.screenWidth.medium}),(function(n){return n.theme.screenWidth.large}));function E(n){return a.a.createElement(x,null,a.a.createElement(a.a.Fragment,null,n.children))}var j=t(3),k=t(4),O=function(){function n(e,t,r){Object(j.a)(this,n),this._demoInfo=void 0,this._demoInfo={title:e,repoLink:t,demoLink:r}}return Object(k.a)(n,[{key:"exampleData",get:function(){return this._demoInfo}}]),n}(),P=new O("this site","https://github.com/ArdenJ/site","https://ardenj.co"),_=new O("ID3 audio player","https://github.com/ArdenJ/audioplayer","https://w9c0x.csb.app/"),W=new O("React/Apollo calendar","https://github.com/ArdenJ/calendar"),z=t(9),L=t(8);function I(){var n=Object(m.a)(["\n  box-sizing: border-box;\n  height: auto;\n  width: 100vw;\n  padding: 2rem;\n  margin: auto 0;\n  display: grid;\n  align-content: left;\n  grid-template-rows: auto auto;\n  grid-template-columns: 100%;\n\n  h2 {\n    color: ",";\n    font-size: 1.8rem;\n    margin: 0 2rem 2rem 0;\n    width: 100%;\n  }\n\n  .demos {\n    width: auto;\n    flex-wrap: wrap;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  @media "," {\n    width: 80vw;\n\n    .demos {\n      width: 100%;\n      flex-wrap: wrap;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n    }\n  }\n"]);return I=function(){return n},n}function D(){var n=Object(m.a)(["\n  background-color: ",";\n  position: relative;\n  width: 95%;\n\n  li {\n    list-style: none;\n  }\n\n  a {\n    font-weight: 900;\n    color: ",";\n  }\n\n  .animatedDiv {\n    background-color: ",";\n    padding: 1.6rem;\n    margin: 0 2rem 1.6rem 0;\n    border: 5px solid ",";\n    box-shadow: 12px 12px 0 4px ",";\n    z-index: 10;\n    top: 0;\n    left: 0;\n    width: auto;\n  }\n\n  @media "," {\n    width: 70%;\n  }\n\n  @media "," {\n    max-width: 30vw;\n  }\n"]);return D=function(){return n},n}var M=c.c.div(D(),(function(n){return n.theme.bodyPrimary}),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.bodyPrimary}),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.screenWidth.medium}),(function(n){return n.theme.screenWidth.large})),A=c.c.section(I(),(function(n){return n.theme.textPrimary}),(function(n){return n.theme.screenWidth.large}));function J(n){var e=Object(r.createRef)(),t=Object(r.useState)({coordinates:{x:0,y:0}}),i=Object(z.a)(t,2),o=i[0],c=i[1],l=Object(L.b)((function(){return{xy:[0,0],config:{mass:10,tension:210,friction:20}}})),m=Object(z.a)(l,2),u=m[0],d=m[1];return a.a.createElement(M,{className:"container",style:{position:"relative"},onMouseMove:function(){return d({xy:[o.coordinates.x,o.coordinates.y]})},onMouseLeave:function(){return d({xy:[0,0]})}},a.a.createElement(L.a.div,{className:"animatedDiv",ref:e,style:{transform:u.xy.interpolate((function(n,e){return"perspective(800px) rotateX(".concat(-e,"deg) rotateY(").concat(n,"deg) scale(1)")}))},onMouseMove:function(n){function t(n){return n>e.current.offsetWidth/2?n/10/5:0-n/10/5}var r=e.current.getBoundingClientRect(),a=t(n.clientX-r.left),i=t(n.clientY-r.top);c({coordinates:{x:a,y:i}})}},a.a.createElement("div",{style:{margin:"auto"}},n.children)))}var R=function(n){var e=[P,_,W].map((function(n,e){var t=n._demoInfo,r=t.title,i=t.repoLink,o=t.demoLink;return a.a.createElement((function(){return void 0!==o?a.a.createElement(J,{"data-testid":"demo"},a.a.createElement("h1",{className:"demoTitle"},r),a.a.createElement("li",{key:"Demo".concat(r,"_").concat(e)},a.a.createElement("a",{href:"".concat(o),rel:"noopener noreferrer",target:"_blank"},"demo")),a.a.createElement("li",{key:"Repo".concat(r,"_").concat(e)},a.a.createElement("a",{href:"".concat(i),rel:"noopener noreferrer",target:"_blank"},"repo"))):a.a.createElement(J,null,a.a.createElement("h1",{className:"demoTitle"},r),a.a.createElement("li",{key:"Repo".concat(r,"_").concat(e)},a.a.createElement("a",{href:"".concat(i),rel:"noopener noreferrer",target:"_blank"},"repo")))}),{key:"project_".concat(e)})}));return a.a.createElement(A,null,a.a.createElement("h2",null,"Recent Projects:"),a.a.createElement("div",{className:"demos"},e))},N=function(){return a.a.createElement(c.a,{theme:l},a.a.createElement(d,null),a.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"grid",padding:0,margin:0},"data-testid":"app"},a.a.createElement(s,null,a.a.createElement(E,null,a.a.createElement(w,null,a.a.createElement("h1",null,"I'm Arden"),a.a.createElement("p",null,"I like using javascript and graphql to break things"),a.a.createElement("p",null,a.a.createElement("a",{href:"https://www.twitter.com/_ardenj",rel:"noopener noreferrer",target:"_blank"},"twitter"),"\xa0",a.a.createElement("a",{href:"https://www.github.com/ArdenJ",rel:"noopener noreferrer",target:"_blank"},"github")))),a.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.ba5e27ab.chunk.js.map