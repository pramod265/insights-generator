(this["webpackJsonpinsights-generator"]=this["webpackJsonpinsights-generator"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),r=n.n(i),a=(n(9),n(2)),o=(n.p,n.p+"static/media/undraw_Data_points_re_vkpq.7f5d03c3.svg"),j=(n.p,n(10),n(0)),l=n(12);var b=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=(t[0],t[1]),s=Object(c.useState)(""),i=Object(a.a)(s,2),r=(i[0],i[1]),b=Object(c.useState)(),h=Object(a.a)(b,2),d=h[0],u=h[1],O=Object(c.useState)(!1),f=Object(a.a)(O,2),m=f[0],x=f[1];return Object(c.useEffect)((function(){fetch("/time").then((function(e){return e.json()})).then((function(e){n(e.time)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"Menu-bar",children:[Object(j.jsx)("div",{id:"home-name",children:" Insight-Generator "}),Object(j.jsx)("nav",{id:"main-menu",children:Object(j.jsxs)("ul",{class:"nav-bar",children:[Object(j.jsx)("li",{class:"nav-button-home",children:Object(j.jsx)("a",{href:"#",children:"Home"})}),Object(j.jsx)("li",{class:"nav-button-services",children:Object(j.jsx)("a",{href:"#",children:"Services"})}),Object(j.jsx)("li",{class:"nav-button-products",children:Object(j.jsx)("a",{href:"#",children:"About"})})]})})]}),Object(j.jsx)("div",{className:"Chart-container",children:Object(j.jsx)("img",{src:o,className:"Chart",alt:"logo"})}),Object(j.jsxs)("div",{className:"Main-content",children:[Object(j.jsxs)("div",{id:"Description-text",children:[Object(j.jsxs)("h3",{children:[" Understand Your Data ",Object(j.jsx)("br",{})," Like Never Before "]}),Object(j.jsxs)("p",{className:"Description",children:["Insight-Generator is world's first patform to ",Object(j.jsx)("br",{})," get Insights of any csv file withim seconds."]})]}),Object(j.jsxs)("div",{className:"Converter-container",children:[Object(j.jsx)("p",{children:" Attach Your CSV File Here ... "}),Object(j.jsx)("input",{type:"file",name:"file",onChange:function(e){u(e.target.files[0]),x(!0)},className:""}),m?Object(j.jsx)("div",{}):Object(j.jsx)("p",{}),Object(j.jsx)("div",{className:"Div-button",onClick:function(){var e=new FormData;r("Your report is being generated, Please Wait...."),e.append("file",d),fetch("http://127.0.0.1:5000/generate_report",{method:"POST",body:e}).then((function(e){return e.blob()})).then((function(e){l(e,"my_report.html"),console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))},children:Object(j.jsx)("div",{className:"Button-center",children:"Get Report"})})]})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.49be466c.chunk.js.map