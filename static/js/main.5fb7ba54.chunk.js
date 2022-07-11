(this["webpackJsonplanguage-proj"]=this["webpackJsonplanguage-proj"]||[]).push([[0],{145:function(e,a,t){},146:function(e,a,t){},148:function(e,a,t){"use strict";t.r(a);var o=t(1),r=t.n(o),n=t(41),i=t.n(n),s=t(6),c=t(3),l=function(e){for(var a=0,t=0;t<e.length;t++)a+=e[t];return a/e.length-1},d=[84e3,86e3,85e3,87e3,9e4,91e3],g=[10800,11800,12500,13100,13200,14100],p=l(d),b=l(g),u="Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse.",h=["This language mainly focuses on jobs like Data Science and AI. While they do make a lot of money, the python developers, software developers don't.","The demand for Python jobs such as Data Science and Machine Learning, has rose ever since the beginning of the last decade."],j=[1e5,101e3,112e3,121e3,12e4,107e3],m=[29200,28100,26700,29700,28600,27100],y=l(j),v=l(m),x=["Over the last decade, the pay for Java Developers peaked midway through the decade. Ever since 2018, the average pay has fallen into 2020.","The demand and popularity for Java has remained pretty steady throughout the decade. Companies demand for Java Developers is around the same now than how it was in 2010."],f=[101e3,99e3,95100,97e3,89700,95200],O=[9300,10300,11100,11e3,10400,9800],C=l(f),k=l(O),P=["The pay for C# developers has remained steady and constant over the decade.","Although the demand for C# developers isn't as high as something like a Java or Python Developer, it is still one of the best technologes to use in some parts of the US."],B=[68e3,67800,7e4,85e3,82300,87e3],J=[20200,20500,20700,21200,21600,22e3],w=l(B),N=l(J),S=["The demand for javascript developers has increased over the last decade. Mainly the demand comes from web development itself.","The popularity and demand for javascript developers varies from React JS, Vue Js, and Angular, atleast that's the demand. This has remained the same throughout the last decade."],M=(t(145),t(2)),T=(t(146),t(0));var R=function(e){var a=Object(o.useRef)(null),t={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"Python",data:d,borderColor:"rgb(144, 19, 247)",backgroundColor:"rgba(144, 19, 247, 0.4)",pointBackgroundColor:"rgb(144, 19, 247)",pointBorderColor:"rgb(144, 19, 247)"}]},r={title:{display:!0,text:"Pay"},scales:{yAxes:[{ticks:{min:6e4,max:13e4,stepSize:3e4}}]}},n={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"Python",data:g,borderColor:"rgb(5, 255, 255)",backgroundColor:"rgba(5, 255, 255)",pointBackgroundColor:"rgb(5, 255, 255)",pointBorderColor:"rgb(5, 255, 255)"}]},i={title:{display:!0,text:"Popularity"},scales:{yAxes:[{ticks:{min:8e3,max:35e3,stepSize:15e3}}]}},s={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"C#",data:f,borderColor:"rgb(144, 19, 247)",backgroundColor:"rgba(144, 19, 247, 0.4)",pointBackgroundColor:"rgb(144, 19, 247)",pointBorderColor:"rgb(144, 19, 247)"}]},l={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"C#",data:O,borderColor:"rgb(5, 255, 255)",backgroundColor:"rgba(5, 255, 255)",pointBackgroundColor:"rgb(5, 255, 255)",pointBorderColor:"rgb(5, 255, 255)"}]},p={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"Java",data:j,borderColor:"rgb(144, 19, 247)",backgroundColor:"rgba(144, 19, 247, 0.4)",pointBackgroundColor:"rgb(144, 19, 247)",pointBorderColor:"rgb(144, 19, 247)"}]},b={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"Java",data:m,borderColor:"rgb(5, 255, 255)",backgroundColor:"rgba(5, 255, 255)",pointBackgroundColor:"rgb(5, 255, 255)",pointBorderColor:"rgb(5, 255, 255)"}]},y={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"Javascript",data:B,borderColor:"rgb(144, 19, 247)",backgroundColor:"rgba(144, 19, 247, 0.4)",pointBackgroundColor:"rgb(144, 19, 247)",pointBorderColor:"rgb(144, 19, 247)"}]},v={labels:["2012","2014","2016","2018","2020"],datasets:[{label:"Javascript",data:J,borderColor:"rgb(5, 255, 255)",backgroundColor:"rgba(5, 255, 255)",pointBackgroundColor:"rgb(5, 255, 255)",pointBorderColor:"rgb(5, 255, 255)"}]};return Object(o.useEffect)((function(){M.a.fromTo(a.current,{opacity:0},{opacity:1,delay:.5})})),Object(T.jsx)("div",{className:"lan-page-container",ref:a,children:Object(T.jsxs)("div",{className:"right-side-container",children:[Object(T.jsx)("h1",{children:e.language}),Object(T.jsx)("div",{className:"top-p-thing",children:"python"===e.language?u:"c#"===e.language?"C# is a modern, general-purpose, object-oriented programming language developed by Microsoft and approved by European Computer Manufacturers Association and International Standards Organization. C# was developed by Anders Hejlsberg and his team during the development of .Net Framework.":"java"===e.language?"Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications. The Java syntax is similar to C++, but is strictly an object-oriented programming language.":"javascript"===e.language?"JavaScript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.":u}),Object(T.jsxs)("div",{className:"graph-div",children:[Object(T.jsx)("div",{className:"line-stuff",children:"python"===e.language?Object(T.jsx)(c.Line,{data:t,options:r}):"c#"===e.language?Object(T.jsx)(c.Line,{data:s,options:{title:{display:!0,text:"Pay"},scales:{yAxes:[{ticks:{min:6e4,max:13e4,stepSize:3e4}}]}}}):"java"===e.language?Object(T.jsx)(c.Line,{data:p,options:{title:{display:!0,text:"Pay"},scales:{yAxes:[{ticks:{min:6e4,max:13e4,stepSize:3e4}}]}}}):"javascript"===e.language?Object(T.jsx)(c.Line,{data:y,options:{title:{display:!0,text:"Pay"},scales:{yAxes:[{ticks:{min:6e4,max:13e4,stepSize:3e4}}]}}}):Object(T.jsx)(c.Line,{data:t,options:r})}),Object(T.jsx)("p",{children:"python"===e.language?h[0]:"c#"===e.language?P[0]:"java"===e.language?x[0]:"javascript"===e.language?S[0]:h[0]})]}),Object(T.jsxs)("div",{className:"graph-div",children:[Object(T.jsx)("div",{className:"line-stuff",children:"python"===e.language?Object(T.jsx)(c.Bar,{data:n,options:i}):"c#"===e.language?Object(T.jsx)(c.Bar,{data:l,options:{title:{display:!0,text:"Popularity"},scales:{yAxes:[{ticks:{min:8e3,max:35e3,stepSize:15e3}}]}}}):"java"===e.language?Object(T.jsx)(c.Bar,{data:b,options:{title:{display:!0,text:"Popularity"},scales:{yAxes:[{ticks:{min:8e3,max:35e3,stepSize:15e3}}]}}}):"javascript"===e.language?Object(T.jsx)(c.Bar,{data:v,options:{title:{display:!0,text:"Popularity"},scales:{yAxes:[{ticks:{min:8e3,max:35e3,stepSize:15e3}}]}}}):Object(T.jsx)(c.Bar,{data:n,options:i})}),Object(T.jsx)("p",{children:"python"===e.language?h[1]:"c#"===e.language?P[1]:"java"===e.language?x[1]:"javascript"===e.language?S[1]:h[1]})]})]})})};var A=function(){var e=Object(o.useRef)(null),a=Object(o.useRef)(null),t=Object(o.useRef)(null),r=Object(o.useRef)(null),n=Object(o.useRef)(null),i=Object(o.useRef)(null),l=Object(o.useRef)(null),u=Object(o.useState)(0),h=Object(s.a)(u,2),x=h[0],P=h[1],S=Object(o.useState)(""),A=Object(s.a)(S,2),z=A[0],L=A[1],D=Object(o.useState)(""),E=Object(s.a)(D,2),I=E[0],F=E[1],K=Object(o.useState)(""),V=Object(s.a)(K,2),W=V[0],H=V[1],G=Object(o.useState)(""),U=Object(s.a)(G,2),Y=U[0],q=U[1],Q=Object(o.useState)("compare"),X=Object(s.a)(Q,2),Z=X[0],$=X[1],_=Object(o.useState)("Pay"),ee=Object(s.a)(_,2),ae=ee[0],te=ee[1],oe=function(){var e=Object(o.useState)({width:void 0,height:void 0}),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(o.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),re={labels:["2012","2014","2016","2018","2020"],datasets:[{label:W,data:"Python"===W?d:"Java"===W?j:"C#"===W?f:"Javascript"===W?B:[],borderColor:"rgb(144, 19, 247)",backgroundColor:"rgba(144, 19, 247, 0.4)",pointBackgroundColor:"rgb(144, 19, 247)",pointBorderColor:"rgb(144, 19, 247)"},{label:Y,data:"Python"===Y?d:"Java"===Y?j:"C#"===Y?f:"Javascript"===Y?B:[],borderColor:"rgb(5, 255, 255)",backgroundColor:"rgba(5, 255, 255, 0.4)",pointBackgroundColor:"rgb(5, 255, 255)",pointBorderColor:"rgb(5, 255, 255)"}]},ne={labels:["2012","2014","2016","2018","2020"],datasets:[{label:W,data:"Python"===W?g:"Java"===W?m:"C#"===W?O:"Javascript"===W?J:[],borderColor:"rgb(144, 19, 247)",backgroundColor:"rgba(144, 19, 247)",pointBackgroundColor:"rgb(144, 19, 247)",pointBorderColor:"rgb(144, 19, 247)"},{label:Y,data:"Python"===Y?g:"Java"===Y?m:"C#"===Y?O:"Javascript"===Y?J:[],borderColor:"rgb(5, 255, 255)",backgroundColor:"rgba(5, 255, 255)",pointBackgroundColor:"rgb(5, 255, 255)",pointBorderColor:"rgb(5, 255, 255)"}]},ie={labels:[W,Y],datasets:[{label:"Sales 2019 (M)",data:["Python"===W?Math.round(p):"Java"===W?Math.round(y):"C#"===W?Math.round(C):"Javascript"===W?Math.round(w):[],"Python"===Y?Math.round(p):"Java"===Y?Math.round(y):"C#"===Y?Math.round(C):"Javascript"===Y?Math.round(w):[]],borderColor:["rgb(144, 19, 247)","rgb(5, 255, 255)"],backgroundColor:["rgba(144, 19, 247, 0.4)","rgba(5, 255, 255, 0.4)"]}]},se={labels:[W,Y],datasets:[{label:"Sales 2019 (M)",data:["Python"===W?Math.round(b):"Java"===W?Math.round(v):"C#"===W?Math.round(k):"Javascript"===W?Math.round(N):[],"Python"===Y?Math.round(b):"Java"===Y?Math.round(v):"C#"===Y?Math.round(k):"Javascript"===Y?Math.round(N):[]],borderColor:["rgb(144, 19, 247)","rgb(5, 255, 255)"],backgroundColor:["rgba(144, 19, 247, 0.4)","rgba(5, 255, 255, 0.4)"]}]};Object(o.useEffect)((function(){oe.width<=1024?(console.log("less than"),M.a.fromTo(a.current,{opacity:0},{opacity:1,delay:3,duration:1.5}),M.a.fromTo(e.current,{marginBottom:"100px"},{margin:"0px",delay:"none",duration:.5}),M.a.fromTo(t.current,{opacity:0,marginBottom:"100px"},{opacity:1,marginBottom:"0px",delay:1.25,duration:.25}),M.a.fromTo(r.current,{opacity:0,marginBottom:"100px"},{opacity:1,marginBottom:"0px",delay:1.4,duration:.25}),M.a.fromTo(n.current,{opacity:0,marginBottom:"100px"},{opacity:1,marginBottom:"0px",delay:1.55,duration:.25}),M.a.fromTo(i.current,{opacity:0,marginBottom:"100px"},{opacity:1,marginBottom:"0px",delay:1.7,duration:.25}),M.a.fromTo(l.current,{opacity:0,marginBottom:"100px"},{opacity:1,marginBottom:"0px",delay:1.85,duration:.25})):oe.width>1024&&(console.log("more than"),M.a.fromTo(a.current,{opacity:0},{opacity:1,delay:3,duration:1.5}),M.a.fromTo(e.current,{marginRight:"100px"},{margin:"0px",delay:"none",duration:.5}),M.a.fromTo(t.current,{opacity:0,marginRight:"100px"},{opacity:1,marginRight:"0px",delay:1.25,duration:.25}),M.a.fromTo(r.current,{opacity:0,marginRight:"100px"},{opacity:1,marginRight:"0px",delay:1.4,duration:.25}),M.a.fromTo(n.current,{opacity:0,marginRight:"100px"},{opacity:1,marginRight:"0px",delay:1.55,duration:.25}),M.a.fromTo(i.current,{opacity:0,marginRight:"100px"},{opacity:1,marginRight:"0px",delay:1.7,duration:.25}),M.a.fromTo(l.current,{opacity:0,marginRight:"100px"},{opacity:1,marginRight:"0px",delay:1.85,duration:.25}))}),[oe.width]);var ce=function(){return btoa(Math.random()).substring(0,12)};return Object(T.jsxs)("div",{className:"page-container",children:[Object(T.jsx)("div",{className:"left-side-container",children:Object(T.jsxs)("div",{className:"left-side-box",ref:e,children:[Object(T.jsx)("div",{ref:t,className:"other-button",onClick:function(){$("compare")},style:{backgroundColor:"compare"===Z?"rgb(113, 21, 188)":"",opacity:0},children:Object(T.jsx)("img",{alt:"",id:"globe",src:"/language-stats/globe.png"})}),Object(T.jsx)("div",{ref:r,className:"other-button",onClick:function(){$("python")},style:{backgroundColor:"python"===Z?"rgb(113, 21, 188)":"",opacity:0},children:Object(T.jsx)("img",{alt:"",id:"python",src:"/language-stats/python.png"})}),Object(T.jsx)("div",{ref:n,className:"other-button",onClick:function(){$("c#")},style:{backgroundColor:"c#"===Z?"rgb(113, 21, 188)":"",opacity:0},children:Object(T.jsx)("img",{className:"invert-filter",id:"csharp-java",alt:"",src:"/language-stats/c-sharp1.png"})}),Object(T.jsx)("div",{ref:i,className:"other-button",onClick:function(){$("java")},style:{backgroundColor:"java"===Z?"rgb(113, 21, 188)":"",opacity:0},children:Object(T.jsx)("img",{alt:"",id:"csharp-java",src:"/language-stats/java.png"})}),Object(T.jsx)("div",{ref:l,className:"other-button",onClick:function(){$("javascript")},style:{backgroundColor:"javascript"===Z?"rgb(113, 21, 188)":"",opacity:0},children:Object(T.jsx)("img",{className:"invert-filter",id:"javascript",alt:"",src:"/language-stats/javascript.png"})})]})}),"compare"!==Z?Object(T.jsx)(R,{language:Z}):Object(T.jsxs)("div",{className:"right-side-container",ref:a,children:[Object(T.jsxs)("form",{className:"input-container",onSubmit:function(e){e.preventDefault(),z!==I&&""!==z&&""!==I?("Python"===z&&(H(z),P(0)),"Java"===z&&(H(z),P(0)),"C#"===z&&(H(z),P(0)),"Javascript"===z&&(H(z),P(0)),"Python"===I&&(q(I),P(0)),"Java"===I&&(q(I),P(0)),"C#"===I&&(q(I),P(0)),"Javascript"===I&&(q(I),P(0))):P(1)},children:[Object(T.jsxs)("div",{className:"input-stuff-container",children:[Object(T.jsxs)("div",{className:"color-select-container",style:{display:"flex",alignItems:"center"},children:[Object(T.jsx)("div",{className:"left-select"}),Object(T.jsx)("select",{onChange:function(e){e.preventDefault(),L(e.target.value)},children:Object(T.jsxs)("optgroup",{children:[Object(T.jsx)("option",{defaultValue:!0,children:"Choose"}),Object(T.jsx)("option",{value:"Java",children:"Java"}),Object(T.jsx)("option",{value:"Python",children:"Python"}),Object(T.jsx)("option",{value:"C#",children:"C#"}),Object(T.jsx)("option",{value:"Javascript",children:"Javascript"})]})})]}),Object(T.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(T.jsx)("select",{onChange:function(e){e.preventDefault(),F(e.target.value)},children:Object(T.jsxs)("optgroup",{children:[Object(T.jsx)("option",{defaultValue:!0,children:"Choose"}),Object(T.jsx)("option",{value:"Java",children:"Java"}),Object(T.jsx)("option",{value:"Python",children:"Python"}),Object(T.jsx)("option",{value:"C#",children:"C#"}),Object(T.jsx)("option",{value:"Javascript",children:"Javascript"})]})}),Object(T.jsx)("div",{className:"right-select"})]})]}),Object(T.jsx)("button",{className:"main-button",children:"Go"})]}),Object(T.jsx)("div",{id:"red-error",style:{opacity:x,color:"red"},children:"You cannot input the same language"}),Object(T.jsx)("div",{className:"pay-popularity-click-container",children:Object(T.jsxs)("div",{className:"content",children:[Object(T.jsx)("div",{id:"right-border",onClick:function(){te("Pay")},style:{backgroundColor:"Pay"===ae?"rgb(144, 19, 247)":"white",color:"Pay"===ae?"white":"rgb(144, 19, 247)"},children:"Pay"}),Object(T.jsx)("div",{id:"left-border",onClick:function(){te("Popularity")},style:{backgroundColor:"Pay"!==ae?"rgb(144, 19, 247)":"white",color:"Pay"!==ae?"white":"rgb(144, 19, 247"},children:"Popularity"})]})}),Object(T.jsx)("div",{className:"graph-container",children:"Pay"===ae?Object(T.jsxs)("div",{className:"pay-graph-container",children:[Object(T.jsx)("div",{className:"donut-div",children:Object(T.jsx)(c.Doughnut,{data:ie,options:{title:{display:!0,text:"Pay"}},datasetKeyProvider:ce})}),Object(T.jsx)("div",{className:"line-div",children:Object(T.jsx)(c.Line,{data:re,options:{title:{display:!0,text:"Pay"},scales:{yAxes:[{ticks:{min:6e4,max:13e4,stepSize:38e3}}]}},datasetKeyProvider:ce})})]}):Object(T.jsxs)("div",{className:"popularity-graph-container",children:[Object(T.jsx)("div",{className:"bar-div",children:Object(T.jsx)(c.Bar,{data:ne,options:{title:{display:!0,text:"Popularity"},scales:{yAxes:[{ticks:{min:8e3,max:35e3,stepSize:12e3}}]}},datasetKeyProvider:ce})}),Object(T.jsx)("div",{className:"pie-div",children:Object(T.jsx)(c.Pie,{data:se,options:{title:{display:!0,text:"Popularity"}},datasetKeyProvider:ce})})]})})]})]})};var z=function(){return Object(T.jsx)("div",{children:Object(T.jsx)(A,{})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,149)).then((function(a){var t=a.getCLS,o=a.getFID,r=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),o(e),r(e),n(e),i(e)}))};i.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(z,{})}),document.getElementById("root")),L()}},[[148,1,2]]]);
//# sourceMappingURL=main.5fb7ba54.chunk.js.map