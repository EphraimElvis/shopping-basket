(this["webpackJsonpshopping-basket"]=this["webpackJsonpshopping-basket"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c(4),s=c.n(i),r=(c(9),c(10),c(2)),a=c(0),o=[{id:0,product:"Apples",price:1},{id:1,product:"Bread",price:.8},{id:2,product:"Milk",price:1.3},{id:3,product:"Soup",price:.65}],l=[0,0,0,0],j=function(){var t=Object(n.useState)([0,0,0,0]),e=Object(r.a)(t,2),c=e[0],i=e[1],s=Object(n.useState)(l),j=Object(r.a)(s,2),u=j[0],b=(j[1],Object(n.useState)(u)),d=Object(r.a)(b,2),p=(d[0],d[1],Object(n.useState)(0)),O=Object(r.a)(p,2),h=O[0],x=O[1],f=Object(n.useState)(0),m=Object(r.a)(f,2),v=m[0],N=m[1];Object(n.useEffect)((function(){var t=c.reduce((function(t,e,c,n){var i=t.total,s=t.subTotal,r=o[c].price;return s+=r*e,{total:i+=k(r,c,n)*e,subTotal:s}}),{total:0,subTotal:0}),e=t.total,n=t.subTotal;x(e),N(n),console.log(e,n)}),[c]);var S=function(t,e){var n=Object.assign([],c);n[t]=e,i(n)},k=function(t,e,c){if(0===e)return t-.1*t;if(1===e&&c[3]>=2){c[1];return t-.5*t}return t},g=o.map((function(t,e){return Object(a.jsxs)("div",{className:"list-items",children:[Object(a.jsx)("label",{className:"product-name",children:t.product}),Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("button",{onClick:function(){return function(t){S(t,0===c[t]?c[t]:c[t]-1)}(e,Math.trunc(t.price))},children:"-"}),Object(a.jsx)("label",{className:"displayValue",children:c[e]}),Object(a.jsx)("button",{onClick:function(){return function(t,e,n){S(t,c[t]+1)}(e,t.price,t.product)},children:"+"}),Object(a.jsx)("h4",{className:"unit-price",children:"Unit / \xa3".concat(t.price)})]})]},t.product)}));return Object(a.jsxs)("div",{className:"cart",children:[Object(a.jsxs)("div",{className:"list-item-container",children:[Object(a.jsx)("h3",{children:"Shopping Cart"}),g]}),Object(a.jsxs)("div",{className:"list-item-details-container",children:[Object(a.jsx)("h4",{children:"Price Details"}),Object(a.jsxs)("h5",{children:["Subtotal GBP ",Object(a.jsx)("span",{children:v.toFixed(2)})]}),Object(a.jsxs)("h5",{children:["TOTAL: ",Object(a.jsx)("span",{children:h.toFixed(2)})]})]})]})},u=function(){return Object(a.jsx)("div",{className:"item-container",children:Object(a.jsx)(j,{})})};var b=function(){return Object(a.jsx)("div",{className:"main-container App",children:Object(a.jsx)(u,{})})};s.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.73d76adc.chunk.js.map