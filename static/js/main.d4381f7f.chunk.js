(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{21:function(t,e,c){},22:function(t,e,c){},24:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c.n(n),s=c(16),i=c.n(s),o=(c(21),c(15)),u=c(29),r=c(28),b=c(27),l=(c(22),c(4));function j(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)(),j=Object(o.a)(i,2),O=j[0],d=j[1];Object(n.useEffect)((function(){var t=new u.a;return Object(r.a)(1e3).pipe(Object(b.a)(t)).subscribe((function(){"run"===O&&s((function(t){return t+1e3}))})),function(){t.next(),t.complete()}}),[O]);var f=a.a.useCallback((function(){d("run")}),[]),h=a.a.useCallback((function(){d("stop"),s(0)}),[]),p=a.a.useCallback((function(){d("wait")}),[]),k=a.a.useCallback((function(){s(0)}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("span",{className:"watch",children:[" ",new Date(c).toISOString().slice(11,19)]}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{onClick:f,children:"Start"}),Object(l.jsx)("button",{onClick:h,children:"Stop"}),Object(l.jsx)("button",{onClick:p,children:"Wait"}),Object(l.jsx)("button",{onClick:k,children:"Reset"})]})]})}i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d4381f7f.chunk.js.map