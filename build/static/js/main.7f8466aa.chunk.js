(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(27),a=n(28),r=n(35),s=n(33),i=n(1),o=n.n(i),j=n(29),u=n.n(j),l=n(15),d=n(34),b=n(30),O=n(3),h=n(16),f=n.n(h),x=(n(65),n(66),n(0));var p=function(){return Object(x.jsx)("header",{children:Object(x.jsx)("h1",{"data-testid":"header",children:"RESTy"})})};n(68);var v=function(){return Object(x.jsxs)("footer",{children:[" \xa9",(new Date).getFullYear(),"  Murad Alazzeh "]})},m=n(36),g=n(31);n(69);var k=function(e){var t=Object(i.useState)("GET"),n=Object(O.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)("https://pokeapi.co/api/v2/pokemon"),s=Object(O.a)(r,2),o=s[0],j=s[1],u=Object(i.useState)(!1),l=Object(O.a)(u,2),d=l[0],b=l[1],h=Object(i.useState)(""),f=Object(O.a)(h,2),p=f[0],v=f[1],k=function(e){a(e.target.id),b(!1)};function C(e){e.preventDefault(),b(!0),a(e.target.id)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:c,url:o,request:p};e.handleApiCall(n)},children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"URL: "}),Object(x.jsx)("input",{name:"url","data-testid":"button",onChange:function(e){j(e.target.value)},type:"text"}),Object(x.jsx)(m.a,{variant:"success",type:"submit",children:"GO!"})," "]}),Object(x.jsxs)("label",{className:"methods",children:[Object(x.jsx)(g.a,{bg:"primary",id:"get",onClick:k,children:"GET"}),Object(x.jsx)("span",{id:"post",onClick:C,children:"POST"}),Object(x.jsx)("span",{id:"put",onClick:C,children:"PUT"}),Object(x.jsx)("span",{id:"delete",onClick:k,children:"DELETE"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Enter value : "}),d&&Object(x.jsx)("textarea",{onChange:function(e){v(e.target.value)},rows:8,cols:35})]})]})})};var C=function(){return Object(x.jsx)("h2",{children:"Loading \u3064\u3065\u304f"})},E=n(32),S=n.n(E);n(73),n(74);var y=function(e){return console.log(e),Object(x.jsx)("section",{"data-testid":"data",children:Object(x.jsx)("pre",{children:e.data?Object(x.jsx)(S.a,{data:e.data}):Object(x.jsx)(C,{})})})};var w=function(e){var t=Object(i.useState)([]),n=Object(O.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)({}),s=Object(O.a)(r,2),j=s[0],u=s[1];Object(i.useEffect)((function(){console.log(" test for CHANGE:method : ".concat(j.method))}),[j.method]);var h=function(){var e=Object(b.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("get"!==t.method){e.next=3;break}return e.next=3,f.a.get(t.url).then((function(e){console.log("**********",e);var t={headers:[e.headers],results:[e.data]};a(t)})).catch((function(e){console.log(e),a(["loading... \u3064\u3065\u304f"])}));case 3:if("post"!==t.method){e.next=6;break}return e.next=6,f.a.post(t.url,t.request).then((function(e){a([].concat(Object(d.a)(c),[e.request]))}));case 6:u(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(o.a.Fragment,{children:[Object(x.jsx)(p,{}),Object(x.jsxs)("div",{children:["Request Method: ",j.method]}),Object(x.jsxs)("div",{children:["URL: ",j.url]}),Object(x.jsx)(k,{handleApiCall:h}),Object(x.jsx)(y,{data:c}),Object(x.jsx)(v,{})]})},T=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsx)(w,{})}}]),n}(o.a.Component),q=document.getElementById("root");u.a.render(Object(x.jsx)(T,{}),q)}},[[75,1,2]]]);
//# sourceMappingURL=main.7f8466aa.chunk.js.map