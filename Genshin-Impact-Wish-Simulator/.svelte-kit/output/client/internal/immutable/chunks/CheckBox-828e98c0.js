import{S as q,i as D,s as L,R as T,k as v,a as I,q as U,l as b,m as C,c as S,r as V,h as g,n as o,b as A,G as m,H as G,T as H,U as N,V as P,f as R,t as j,$ as w}from"./index-c0d078cd.js";import{p as F}from"./audio-460a91c6.js";function J(i){let s,t,_,u,h,a,r,k,n,d,f,E,y;const z=i[4].default,l=T(z,i,i[3],null);return{c(){s=v("div"),t=v("input"),h=I(),a=v("label"),r=v("i"),k=U("\u2714"),n=I(),l&&l.c(),this.h()},l(e){s=b(e,"DIV",{class:!0});var c=C(s);t=b(c,"INPUT",{type:!0,name:!0,id:!0,class:!0}),h=S(c),a=b(c,"LABEL",{for:!0,class:!0});var p=C(a);r=b(p,"I",{class:!0});var B=C(r);k=V(B,"\u2714"),B.forEach(g),n=S(p),l&&l.l(p),p.forEach(g),c.forEach(g),this.h()},h(){o(t,"type","checkbox"),o(t,"name",_="check"+i[1]),o(t,"id",u="check"+i[1]),t.checked=i[0],o(t,"class","svelte-1fmz7al"),o(r,"class","svelte-1fmz7al"),o(a,"for",d="check"+i[1]),o(a,"class","svelte-1fmz7al"),o(s,"class","checkbox svelte-1fmz7al")},m(e,c){A(e,s,c),m(s,t),m(s,h),m(s,a),m(a,r),m(r,k),m(a,n),l&&l.m(a,null),f=!0,E||(y=G(t,"change",i[2]),E=!0)},p(e,[c]){(!f||c&2&&_!==(_="check"+e[1]))&&o(t,"name",_),(!f||c&2&&u!==(u="check"+e[1]))&&o(t,"id",u),(!f||c&1)&&(t.checked=e[0]),l&&l.p&&(!f||c&8)&&H(l,z,e,e[3],f?P(z,e[3],c,null):N(e[3]),null),(!f||c&2&&d!==(d="check"+e[1]))&&o(a,"for",d)},i(e){f||(R(l,e),f=!0)},o(e){j(l,e),f=!1},d(e){e&&g(s),l&&l.d(e),E=!1,y()}}}function K(i,s,t){let{$$slots:_={},$$scope:u}=s,{checked:h=!1}=s,{id:a="_0"}=s;const r=w(),k=n=>{const{checked:d}=n.target;r("change",{checked:d}),F("click2")};return i.$$set=n=>{"checked"in n&&t(0,h=n.checked),"id"in n&&t(1,a=n.id),"$$scope"in n&&t(3,u=n.$$scope)},[h,a,k,u,_]}class Q extends q{constructor(s){super(),D(this,s,K,J,L,{checked:0,id:1})}}export{Q as C};
