(this.webpackJsonpvilegermedcomponentsreact=this.webpackJsonpvilegermedcomponentsreact||[]).push([[0],{19:function(n,t,e){},20:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var r=e(3),i=e(0),c=e.n(i),o=e(13),a=e.n(o),d=(e(19),e(20),e(4)),u=e(1),p=e(5),s=e(11),b=Object(i.createContext)(),g=function(n){var t=Object(i.useState)(null),e=Object(s.a)(t,2),c=e[0],o=e[1],a=Object(i.useState)(1),d=Object(s.a)(a,2),u=d[0],p=d[1];return Object(i.useEffect)((function(){fetch("/data/phototest.json").then((function(n){return n.json()})).then((function(n){return o(n.phototest)}))}),[]),c&&console.log(c),Object(r.jsx)(b.Provider,{value:{data:c,pictureid:u,setPictureid:p},children:n.children})};function j(){var n=Object(d.a)(["\n\nborder-radius:12px;\nwidth: 100px;\nheight: 100px;\nbox-shadow: 5px 5px 5px #3c3654;\n\n\n\n"]);return j=function(){return n},n}function f(){var n=Object(d.a)(["\nborder-radius:20px;\nborder: none;\nmargin-left: 10px;\nmargin-bottom:20px;\nmargin-top: 40px;\n\n\n\n\n"]);return f=function(){return n},n}var l=function(n){var t=n.image,e=n.id,r=(n.props,Object(i.useContext)(b)),c=r.setPictureid,o=r.pictureid;console.log(o);var a=Object(p.a)(f()),d=Object(p.a)(j());return Object(u.a)("div",{css:a,onClick:function(){return c(e)},children:Object(u.a)("img",{css:d,src:"img/".concat(t,".jpg")})})};function h(){var n=Object(d.a)(["\n    grid-column: 1/2;\n    grid-row: 2/8;\n    border-radius:12px;\n    margin-left: 40px;\n    margin-right: 20px;\n    margin-top:40px;\n    margin-bottom:40px;\n    width: 300px;\n    height: 300px;\n    box-shadow: 5px 5px 5px #3c3654;\n    \n    \n    "]);return h=function(){return n},n}var x=function(n){var t=n.image,e=(n.props,Object(p.a)(h()));return Object(u.a)("img",{css:e,src:"img/".concat(t,".jpg"),alt:"landscape"})};function O(){var n=Object(d.a)(["\n\ngrid-column: 2/9;\ngrid-row: 5/6;\njustify-self: start; \nmargin-left: 20px;\npadding-left: 10px;\n\n"]);return O=function(){return n},n}var m=function(n){var t=n.headline,e=(n.props,Object(p.a)(O()));return Object(u.a)("h1",{css:e,children:t})};function v(){var n=Object(d.a)(["\n    grid-column: 2/9;\n    grid-row: 6/7;\n    justify-self: start;\n    border-radius:20px;\n    margin-left: 20px;\n    margin-bottom:20px;\n    margin-top: 40px;\n    padding-left:10px;\n    "]);return v=function(){return n},n}var w=function(n){var t=n.text,e=(n.props,Object(p.a)(v()));return Object(u.a)("p",{css:e,children:t})};function y(){var n=Object(d.a)(["\n    display:flex;\n    grid-column: 2/9;\n    grid-row: 7/8;\n    justify-self: start;\n    overflow:scroll;\n    overflow-y:hidden;\n    width:400px;\n    height:180px;\n  \n  \n   \n    \n\n\n    \n    \n    \n    \n    \n    "]);return y=function(){return n},n}function C(){var n=Object(d.a)(["\ndisplay:grid;\ngrid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\nbackground-color:#696382;\nwidth: 771px;\nheight: 454px;\nmargin: 20px;\n\n\n\n"]);return C=function(){return n},n}var P=function(n){var t=Object(i.useContext)(b).data;t&&console.log("from context:",t[1].text);var e=Object(i.useContext)(b).pictureid;console.log("hey det er jo "+e);var r=t&&t.find((function(n){return n.id===e}));console.log(r),console.log(n);var c=Object(p.a)(C()),o=Object(p.a)(y());return r&&Object(u.b)("div",{css:c,children:[t&&Object(u.a)(x,{image:r.photo}),t&&Object(u.a)(m,{headline:r.name}),t&&Object(u.a)(w,{text:r.text}),Object(u.b)("div",{css:o,children:[t&&Object(u.a)(l,{id:t[0].id,image:t[0].photo}),t&&Object(u.a)(l,{id:t[1].id,image:t[1].photo}),t&&Object(u.a)(l,{id:t[2].id,image:t[2].photo}),t&&Object(u.a)(l,{id:t[3].id,image:t[3].photo}),t&&Object(u.a)(l,{id:t[4].id,image:t[4].photo}),t&&Object(u.a)(l,{id:t[5].id,image:t[5].photo}),t&&Object(u.a)(l,{id:t[6].id,image:t[6].photo}),t&&Object(u.a)(l,{id:t[7].id,image:t[7].photo}),t&&Object(u.a)(l,{id:t[8].id,image:t[8].photo}),t&&Object(u.a)(l,{id:t[9].id,image:t[9].photo}),t&&Object(u.a)(l,{id:t[10].id,image:t[10].photo})]})]})};var k=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(g,{children:Object(r.jsx)(P,{})})})},F=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),i(n),c(n),o(n)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),F()}},[[21,1,2]]]);
//# sourceMappingURL=main.c508ac68.chunk.js.map