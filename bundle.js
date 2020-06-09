!function(e){function t(t){for(var n,r,i=t[0],o=t[1],l=t[2],c=0,s=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(P,r)&&P[r]&&s.push(P[r][0]),P[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(U&&U(t);s.length;)s.shift()();return A.push.apply(A,l||[]),a()}function a(){for(var e,t=0;t<A.length;t++){for(var a=A[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==P[i]&&(n=!1)}n&&(A.splice(t--,1),e=z(z.s=a[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!k[e])return;for(var a in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(h[a]=t[a]);0==--v&&0===E&&I()}(e,t),n&&n(e,t)};var r,i=!0,o="f5a91afa0cb7b27c3e39",l={},c=[],s=[];function d(t){var a={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==t,active:!0,accept:function(e,t){if(void 0===e)a._selfAccepted=!0;else if("function"==typeof e)a._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)a._acceptedDependencies[e[n]]=t||function(){};else a._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)a._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)a._declinedDependencies[e[t]]=!0;else a._declinedDependencies[e]=!0},dispose:function(e){a._disposeHandlers.push(e)},addDisposeHandler:function(e){a._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=a._disposeHandlers.indexOf(e);t>=0&&a._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":S(t);break;case"prepare":case"check":case"dispose":case"apply":(g=g||[]).push(t)}},check:j,apply:_,status:function(e){if(!e)return p;m.push(e)},addStatusHandler:function(e){m.push(e)},removeStatusHandler:function(e){var t=m.indexOf(e);t>=0&&m.splice(t,1)},data:l[t]};return r=void 0,a}var m=[],p="idle";function f(e){p=e;for(var t=0;t<m.length;t++)m[t].call(null,e)}var u,h,b,g,v=0,E=0,y={},k={},w={};function N(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,a){if("undefined"==typeof XMLHttpRequest)return a(new Error("No browser support"));try{var n=new XMLHttpRequest,r=z.p+""+o+".hot-update.json";n.open("GET",r,!0),n.timeout=t,n.send(null)}catch(e){return a(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)a(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)a(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void a(e)}e(t)}}}))).then((function(e){if(!e)return f(O()?"ready":"idle"),null;k={},y={},w=e.c,b=e.h,f("prepare");var t=new Promise((function(e,t){u={resolve:e,reject:t}}));for(var a in h={},P)x(a);return"prepare"===p&&0===E&&0===v&&I(),t}));var t}function x(e){w[e]?(k[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=z.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):y[e]=!0}function I(){f("ready");var e=u;if(u=null,e)if(i)Promise.resolve().then((function(){return _(i)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&t.push(N(a));e.resolve(t)}}function _(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(a){var n,i,s,d,m;function p(e){for(var t=[e],a={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var r=n.pop(),i=r.id,o=r.chain;if((d=D[i])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var l=0;l<d.parents.length;l++){var c=d.parents[l],s=D[c];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(s.hot._acceptedDependencies[i]?(a[c]||(a[c]=[]),u(a[c],[i])):(delete a[c],t.push(c),n.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];-1===e.indexOf(n)&&e.push(n)}}O();var v={},E=[],y={},k=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var x;m=N(j),x=h[j]?p(m):{type:"disposed",moduleId:j};var I=!1,_=!1,S=!1,A="";switch(x.chain&&(A="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":a.onDeclined&&a.onDeclined(x),a.ignoreDeclined||(I=new Error("Aborted because of self decline: "+x.moduleId+A));break;case"declined":a.onDeclined&&a.onDeclined(x),a.ignoreDeclined||(I=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+A));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(x),a.ignoreUnaccepted||(I=new Error("Aborted because "+m+" is not accepted"+A));break;case"accepted":a.onAccepted&&a.onAccepted(x),_=!0;break;case"disposed":a.onDisposed&&a.onDisposed(x),S=!0;break;default:throw new Error("Unexception type "+x.type)}if(I)return f("abort"),Promise.reject(I);if(_)for(m in y[m]=h[m],u(E,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,m)&&(v[m]||(v[m]=[]),u(v[m],x.outdatedDependencies[m]));S&&(u(E,[x.moduleId]),y[m]=k)}var M,H=[];for(i=0;i<E.length;i++)m=E[i],D[m]&&D[m].hot._selfAccepted&&y[m]!==k&&!D[m].hot._selfInvalidated&&H.push({module:m,parents:D[m].parents.slice(),errorHandler:D[m].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete P[e]}(e)}));var R,U,L=E.slice();for(;L.length>0;)if(m=L.pop(),d=D[m]){var T={},C=d.hot._disposeHandlers;for(s=0;s<C.length;s++)(n=C[s])(T);for(l[m]=T,d.hot.active=!1,delete D[m],delete v[m],s=0;s<d.children.length;s++){var F=D[d.children[s]];F&&((M=F.parents.indexOf(m))>=0&&F.parents.splice(M,1))}}for(m in v)if(Object.prototype.hasOwnProperty.call(v,m)&&(d=D[m]))for(U=v[m],s=0;s<U.length;s++)R=U[s],(M=d.children.indexOf(R))>=0&&d.children.splice(M,1);f("apply"),void 0!==b&&(o=b,b=void 0);for(m in h=void 0,y)Object.prototype.hasOwnProperty.call(y,m)&&(e[m]=y[m]);var q=null;for(m in v)if(Object.prototype.hasOwnProperty.call(v,m)&&(d=D[m])){U=v[m];var J=[];for(i=0;i<U.length;i++)if(R=U[i],n=d.hot._acceptedDependencies[R]){if(-1!==J.indexOf(n))continue;J.push(n)}for(i=0;i<J.length;i++){n=J[i];try{n(U)}catch(e){a.onErrored&&a.onErrored({type:"accept-errored",moduleId:m,dependencyId:U[i],error:e}),a.ignoreErrored||q||(q=e)}}}for(i=0;i<H.length;i++){var B=H[i];m=B.module,c=B.parents,r=m;try{z(m)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:m,error:t,originalError:e}),a.ignoreErrored||q||(q=t),q||(q=e)}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:m,error:e}),a.ignoreErrored||q||(q=e)}}if(q)return f("fail"),Promise.reject(q);if(g)return t(a).then((function(e){return E.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(E)}))}(t=t||{})}function O(){if(g)return h||(h={}),g.forEach(S),g=void 0,!0}function S(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var D={},P={0:0},A=[];function z(t){if(D[t])return D[t].exports;var a=D[t]={i:t,l:!1,exports:{},hot:d(t),parents:(s=c,c=[],s),children:[]};return e[t].call(a.exports,a,a.exports,function(e){var t=D[e];if(!t)return z;var a=function(a){return t.hot.active?(D[a]?-1===D[a].parents.indexOf(e)&&D[a].parents.push(e):(c=[e],r=a),-1===t.children.indexOf(a)&&t.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),c=[]),z(a)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return z[e]},set:function(t){z[e]=t}}};for(var i in z)Object.prototype.hasOwnProperty.call(z,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(a,i,n(i));return a.e=function(e){return"ready"===p&&f("prepare"),E++,z.e(e).then(t,(function(e){throw t(),e}));function t(){E--,"prepare"===p&&(y[e]||x(e),0===E&&0===v&&I())}},a.t=function(e,t){return 1&t&&(e=a(e)),z.t(e,-2&t)},a}(t)),a.l=!0,a.exports}z.m=e,z.c=D,z.d=function(e,t,a){z.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},z.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},z.t=function(e,t){if(1&t&&(e=z(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(z.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)z.d(a,n,function(t){return e[t]}.bind(null,n));return a},z.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return z.d(t,"a",t),t},z.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},z.p="/",z.h=function(){return o};var M=window.webpackJsonp=window.webpackJsonp||[],H=M.push.bind(M);M.push=t,M=M.slice();for(var R=0;R<M.length;R++)t(M[R]);var U=H;A.push([268,1]),a()}({15:function(e,t,a){(e.exports=a(29)(!1)).push([e.i,"*{box-sizing:border-box}html{scroll-behavior:smooth}html,body{height:100%;font-family:'Montserrat', sans-serif;background-color:royalblue;color:white}body{display:flex;justify-content:center}body #root{width:100%}.title{font-family:'Bebas Neue', cursive;color:white}.subtitle{font-family:'Bebas Neue', cursive;color:white}.tile{background-color:royalblue}#nav-styling{background-color:royalblue;display:flex;justify-content:center}#nav-styling a{color:white;border-bottom:3px solid royalblue}#nav-styling a:hover{background-color:transparent;border-bottom:3px solid white}#home{height:100%}#home .hero-body{display:flex;justify-content:center;align-items:center;background-color:royalblue}#home p{opacity:0;animation-delay:1.5s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInDown;-webkit-animation-name:fadeInDown}#home .subtitle{opacity:0;animation-delay:1.5s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInUp;-webkit-animation-name:fadeInUp}#tsparticles{height:100%;width:100%}#about .icon{margin:30px}#about .icon .icon-container{display:flex;flex-direction:column;align-items:center}#about .icon .skills-icon{font-size:4rem;color:royalblue}#about .icon .skills-icon:hover{color:lime;transform:scale(1.1);transition:all .1s ease}#projects{background-color:royalblue;min-height:85vh}#projects .title{display:flex;align-items:center;justify-content:center;margin-bottom:0px}#projects .slide-number-container{display:flex;justify-content:center;margin:15px 0px 25px 0px}#projects .slide-number-container .icon:first-child{margin-right:20px}#projects .slide-number-container .icon:last-child{margin-left:20px}#projects .slide-number-container .icon:hover{cursor:pointer}#projects .slide-number-container p{margin:0px 10px 0px 10px}#projects .slide-number-container .slide-number{transform:scale(1.3);font-weight:bold;color:orange;transition:all ease .1s}#projects .project-child{display:flex;justify-content:space-around;margin-bottom:10px}#projects .project-child img{width:50%;margin-right:5%;opacity:0;animation-delay:0.65s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInLeft;-webkit-animation-name:fadeInLeft}#projects .project-child .project-child-description{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;opacity:0;animation-delay:0.25s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInRight;-webkit-animation-name:fadeInRight}#projects .project-child .project-child-description .subtitle{margin-bottom:10px}#projects .project-child .project-child-description .hozline{width:50%;border:1px solid white;margin-bottom:10px}#projects .project-child .project-child-description .project-child-skill{display:flex;width:100%;justify-content:space-evenly;align-items:flex-end}#projects .project-child .project-child-description .project-child-skill .skills-icon{font-size:2rem;color:white}#projects .project-child .project-child-description .project-child-skill .project-link-container a{color:white}#projects .project-child .project-child-description .project-child-skill .project-link-container:after{display:block;padding:5px 0px 5px 0px;content:'';border-bottom:solid 3px yellow;transform:scaleX(0);transition:transform 250ms ease-in-out}#projects .project-child .project-child-description .project-child-skill .project-link-container:hover:after{transform:scaleX(1)}#projects .project-child .project-child-description .project-child-skill .github-container a{color:white}#projects .project-child .project-child-description .project-child-skill .github-container:after{display:block;padding:5px 0px 5px 0px;content:'';border-bottom:solid 3px yellow;transform:scaleX(0);transition:transform 250ms ease-in-out}#projects .project-child .project-child-description .project-child-skill .github-container:hover:after{transform:scaleX(1)}#placeholder-title{font-family:'Poiret One', cursive}#artistflow-title{font-family:'Cabin Sketch', cursive}#newsme-title{font-family:'Lobster', cursive}#snake-title{font-family:'Press Start 2P', cursive;text-shadow:5px 5px 1px red, 10px 10px 1px blue;color:white}#contact a{color:royalblue;width:100%}#contact a:after{display:block;padding:5px 0px 5px 0px;content:'';border-bottom:solid 3px red;transform:scaleX(0);transition:transform 250ms ease-in-out}#contact a:hover:after{transform:scaleX(1)}.fadeInUp{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInUp;-webkit-animation-name:fadeInUp}.fadeInDown{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInDown;-webkit-animation-name:fadeInDown}.fadeInLeft{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInLeft;-webkit-animation-name:fadeInLeft}.fadeInRight{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInRight;-webkit-animation-name:fadeInRight}@keyframes aitf{0%{background-position:0% 50%}100%{background-position:100% 50%}}@-webkit-keyframes aitf{0%{background-position:0% 50%}100%{background-position:100% 50%}}@keyframes fadeInUp{from{transform:translate3d(0, 40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInUp{from{transform:translate3d(0, 40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes fadeInLeft{from{transform:translate3d(-30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInLeft{from{transform:translate3d(-30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes fadeInRight{from{transform:translate3d(30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInRight{from{transform:translate3d(30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes fadeInDown{from{transform:translate3d(0, -40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInDown{from{transform:translate3d(0, -40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@media only screen and (max-width: 1024px){#root{width:100%}#about .icon{margin:20px}#projects .project-child{flex-direction:column-reverse}#projects .project-child img{width:100%}#placeholder-title,#artistflow-title,#newsme-title,#snake-title,#sudoku-title{padding-bottom:20px}}\n",""])},268:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(60),o=a.n(i),l=(a(66),a(68),function(){return r.a.createElement("nav",{className:"navbar is-fixed-top",id:"nav-styling"},r.a.createElement("a",{href:"#home",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("a",{href:"#about",className:"navbar-item"},"About"),r.a.createElement("a",{href:"#projects",className:"navbar-item"},"Projects"),r.a.createElement("a",{href:"#contact",className:"navbar-item"},"Contact"))}),c=a(61),s=a.n(c),d=function(){return r.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},r.a.createElement(s.a,{params:{particles:{number:{value:160,density:{enable:!0}},color:{value:"#62fc03"},size:{value:8,random:!0},move:{out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{remove:{particles_nb:10}}}}}))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("section",{className:"hero",id:"home"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered",id:"home-title"},r.a.createElement("p",{className:"title is-size-1"},"Jonny Garius"),r.a.createElement("p",{className:"subtitle"},"Software Engineer | ",r.a.createElement("span",{id:"football"},"Footballer")," | ",r.a.createElement("span",{id:"rugby"},"Rugby Enthusiast"))))))},p=function(){return r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("p",{className:"subtitle has-text-grey-darker"},"Skills"),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-javascript-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-python-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-react-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-mongodb-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-express-original"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-django-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-postgresql-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:" skills-icon devicon-nodejs-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-html5-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-css3-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-babel-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-git-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-heroku-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-mocha-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-sass-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-webpack-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon fab fa-3x fa-slack"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon fab fa-3x fa-r-project"})))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section has-background-light",id:"about"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title has-text-grey-darker"},"About"),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column has-text-left has-text-grey-darker is-size-6",id:"separate"},"Hi there, welcome to my portfolio! I'm a London based Software Engineer, currently working as a Teaching Assistant for General Assembly on their Software Engineering Immersive course.",r.a.createElement("br",null),r.a.createElement("br",null),"My first job out of university saw me working as a Researcher at the Office for National Statistics. I used R and SAS for data-linkage projects linking hashed data both deterministically and probablistically with a fantastic team in Titchfield. I discovered that I loved building algorithms to perform tasks efficiently and in as few lines of code as possible. Not only this, I spent time outside of work researching new functions, packages and methods I could implement in my work.",r.a.createElement("br",null),r.a.createElement("br",null),"After my time at the ONS I spent a year in the tech recruitment space, speaking to Software Engineers regularly. It was here I really discovered what Software Engineering entailed, hearing about the fascinating projects they were working on and the problems they faced in their day to day job. Through all these conversations and my previous experiences of coding, it inspired me to make the leap and enroll into General Assembly's Software Engineering Immersive Course. Enjoying every moment, I graduated from the course in February 2020 and was asked to stay on as a Teaching Assistant."),r.a.createElement(p,null)))))},u=a.p+"43a63e7277fff9ee462bb4888da1a25b.png",h=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:u,alt:"placeholder screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"placeholder-title"},"[ PLACEHOLDER ]"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"Created a full stack application with a ReactJS frontend and NodeJS/MongoDB backend. The platform allows users to share locations (restaurants, pubs, coffee shops etc.) with friends or share locations publicly with all users on the platform (hence the name placeholder!)."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/placeholder",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"http://placeholder-ga.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},b=a.p+"a1a23771ac4524ea275c26432f3f7df5.png",g=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:b}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title is-family-sans-serif",id:"sudoku-title"},"SUDOKU SOLVER"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"Made a simple JavaScript, HTML and CSS sudoku solver that utilises 2 methods of puzzle solving for sudoku puzzles. This project was made with a mobile first approach."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/sudoku-solver",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://jgar123.github.io/sudoku-solver/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},v=a.p+"971d0c00b8db4eebaf07e638d047c894.png",E=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:v,alt:"artist Flow screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"artistflow-title"},"artist_Flow"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"Built a full stack application using ReactJS and Django in a team of 3 over a period of a week. Artist_Flow allows users to search for and find new artists in a user friendly way and store favourited artists."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/artist_Flow",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://artist-flow-ga.herokuapp.com/#/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},y=a.p+"62b2fc6279a3183f00f21b2bcd29d9f3.png",k=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:y,alt:"news me screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"newsme-title"},"NewsMe"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"NewsMe is a frontend application built in a pair coding hackathon. It utilises the News API and openWether API to provide users with the most popular news stories via a keyword search. It also allows users to grab a snapshot of the weather or generate a 5 day forecast."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/project-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://jgar123.github.io/project-2/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},w=a.p+"097d30d12fb9be8eec4e43f7c564da0b.png",N=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:w,alt:"snake screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title"},"PAC-MAN"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"A simple version of the classic game Pac-Man utilising the Breadth-First-Search algorithm. This was my first project implementing a pathfinding algorithm to allow ghosts to move intelligently towards Pac-Man. The main aim was to practice pathfinding algorithms hence the lack of styling! (readme and more styling coming soon...)"),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/BFS-Pacman",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://jgar123.github.io/BFS-Pacman",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},j=a.p+"6e292c28fbef5926bbca7fcd4d1df6ef.png",x=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:j,alt:"snake screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"snake-title"},"SNAKE"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"A JavaScript implementation of the classic game snake."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/project-1",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://jgar123.github.io/project-1",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},I=function(e){var t=e.slideIndex;return r.a.createElement("div",null,1===t?r.a.createElement(h,null):null,2===t?r.a.createElement(g,null):null,3===t?r.a.createElement(E,null):null,4===t?r.a.createElement(k,null):null,5===t?r.a.createElement(N,null):null,6===t?r.a.createElement(x,null):null)};function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var S=[1,2,3,4,5,6],D=function(){var e=_(Object(n.useState)(1),2),t=e[0],a=e[1];return r.a.createElement("section",{className:"section",id:"projects"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("div",{className:"title"},"Projects"),r.a.createElement("div",{className:"slide-number-container"},r.a.createElement("div",{className:"icon",onClick:function(){var e=t;a(1===e?6:e-=1)}},r.a.createElement("i",{className:"fas fa-chevron-left"})),S.map((function(e,a){return r.a.createElement("div",{key:a},t===e?r.a.createElement("p",{className:"slide-number",id:a},e):r.a.createElement("p",{id:a},e))})),r.a.createElement("div",{className:"icon",onClick:function(){var e=t;a(6===e?1:e+=1)}},r.a.createElement("i",{className:"fas fa-chevron-right"}))),r.a.createElement(I,{slideIndex:t})))},P=function(){return r.a.createElement("section",{className:"section has-background-light",id:"contact"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title has-text-grey-darker"},"Contact Info"),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("a",{href:"https://www.linkedin.com/in/jonny-garius/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("p",{className:"is-size-7"},"linkedin.com/in/jonny-garius/"))),r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("a",{href:"https://github.com/jgar123",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain fa-2x"})),r.a.createElement("p",{className:"is-size-7"},"github.com/jgar123"))))))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement(m,null),r.a.createElement(f,null),r.a.createElement(D,null),r.a.createElement(P,null))};o.a.render(r.a.createElement(A,null),document.getElementById("root"))},68:function(e,t,a){var n=a(15);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},i=a(30)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(15,(function(){var t=a(15);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))}});