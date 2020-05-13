!function(e){function t(t){for(var n,r,i=t[0],o=t[1],l=t[2],c=0,s=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(O,r)&&O[r]&&s.push(O[r][0]),O[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(H&&H(t);s.length;)s.shift()();return S.push.apply(S,l||[]),a()}function a(){for(var e,t=0;t<S.length;t++){for(var a=S[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==O[i]&&(n=!1)}n&&(S.splice(t--,1),e=D(D.s=a[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!k[e]||!y[e])return;for(var a in y[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(h[a]=t[a]);0==--g&&0===v&&x()}(e,t),n&&n(e,t)};var r,i=!0,o="6e57e66cc6ef95be9fe3",l={},c=[],s=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,a){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=a||function(){};else t._acceptedDependencies[e]=a||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._declinedDependencies[e[a]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var a=t._disposeHandlers.indexOf(e);a>=0&&t._disposeHandlers.splice(a,1)},check:j,apply:I,status:function(e){if(!e)return p;m.push(e)},addStatusHandler:function(e){m.push(e)},removeStatusHandler:function(e){var t=m.indexOf(e);t>=0&&m.splice(t,1)},data:l[e]};return r=void 0,t}var m=[],p="idle";function f(e){p=e;for(var t=0;t<m.length;t++)m[t].call(null,e)}var u,h,b,g=0,v=0,E={},y={},k={};function w(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,a){if("undefined"==typeof XMLHttpRequest)return a(new Error("No browser support"));try{var n=new XMLHttpRequest,r=D.p+""+o+".hot-update.json";n.open("GET",r,!0),n.timeout=t,n.send(null)}catch(e){return a(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)a(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)a(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void a(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;y={},E={},k=e.c,b=e.h,f("prepare");var t=new Promise((function(e,t){u={resolve:e,reject:t}}));for(var a in h={},O)N(a);return"prepare"===p&&0===v&&0===g&&x(),t}));var t}function N(e){k[e]?(y[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function x(){f("ready");var e=u;if(u=null,e)if(i)Promise.resolve().then((function(){return I(i)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&t.push(w(a));e.resolve(t)}}function I(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var a,n,r,i,s;function d(e){for(var t=[e],a={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var r=n.pop(),o=r.id,l=r.chain;if((i=_[o])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:o};if(i.hot._main)return{type:"unaccepted",chain:l,moduleId:o};for(var c=0;c<i.parents.length;c++){var s=i.parents[c],d=_[s];if(d){if(d.hot._declinedDependencies[o])return{type:"declined",chain:l.concat([s]),moduleId:o,parentId:s};-1===t.indexOf(s)&&(d.hot._acceptedDependencies[o]?(a[s]||(a[s]=[]),m(a[s],[o])):(delete a[s],t.push(s),n.push({chain:l.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var u={},g=[],v={},E=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var y in h)if(Object.prototype.hasOwnProperty.call(h,y)){var j;s=w(y);var N=!1,x=!1,I=!1,S="";switch((j=h[y]?d(s):{type:"disposed",moduleId:y}).chain&&(S="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(N=new Error("Aborted because of self decline: "+j.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(N=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(N=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(j),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),I=!0;break;default:throw new Error("Unexception type "+j.type)}if(N)return f("abort"),Promise.reject(N);if(x)for(s in v[s]=h[s],m(g,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(u[s]||(u[s]=[]),m(u[s],j.outdatedDependencies[s]));I&&(m(g,[j.moduleId]),v[s]=E)}var A,P=[];for(n=0;n<g.length;n++)s=g[n],_[s]&&_[s].hot._selfAccepted&&v[s]!==E&&P.push({module:s,errorHandler:_[s].hot._selfAccepted});f("dispose"),Object.keys(k).forEach((function(e){!1===k[e]&&function(e){delete O[e]}(e)}));for(var z,H,M=g.slice();M.length>0;)if(s=M.pop(),i=_[s]){var R={},U=i.hot._disposeHandlers;for(r=0;r<U.length;r++)(a=U[r])(R);for(l[s]=R,i.hot.active=!1,delete _[s],delete u[s],r=0;r<i.children.length;r++){var L=_[i.children[r]];L&&((A=L.parents.indexOf(s))>=0&&L.parents.splice(A,1))}}for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(i=_[s]))for(H=u[s],r=0;r<H.length;r++)z=H[r],(A=i.children.indexOf(z))>=0&&i.children.splice(A,1);for(s in f("apply"),o=b,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var C=null;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(i=_[s])){H=u[s];var T=[];for(n=0;n<H.length;n++)if(z=H[n],a=i.hot._acceptedDependencies[z]){if(-1!==T.indexOf(a))continue;T.push(a)}for(n=0;n<T.length;n++){a=T[n];try{a(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:H[n],error:e}),t.ignoreErrored||C||(C=e)}}}for(n=0;n<P.length;n++){var q=P[n];s=q.module,c=[s];try{D(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(a){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:a,originalError:e}),t.ignoreErrored||C||(C=a),C||(C=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||C||(C=e)}}return C?(f("fail"),Promise.reject(C)):(f("idle"),new Promise((function(e){e(g)})))}var _={},O={0:0},S=[];function D(t){if(_[t])return _[t].exports;var a=_[t]={i:t,l:!1,exports:{},hot:d(t),parents:(s=c,c=[],s),children:[]};return e[t].call(a.exports,a,a.exports,function(e){var t=_[e];if(!t)return D;var a=function(a){return t.hot.active?(_[a]?-1===_[a].parents.indexOf(e)&&_[a].parents.push(e):(c=[e],r=a),-1===t.children.indexOf(a)&&t.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),c=[]),D(a)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var i in D)Object.prototype.hasOwnProperty.call(D,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(a,i,n(i));return a.e=function(e){return"ready"===p&&f("prepare"),v++,D.e(e).then(t,(function(e){throw t(),e}));function t(){v--,"prepare"===p&&(E[e]||N(e),0===v&&0===g&&x())}},a.t=function(e,t){return 1&t&&(e=a(e)),D.t(e,-2&t)},a}(t)),a.l=!0,a.exports}D.m=e,D.c=_,D.d=function(e,t,a){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(D.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)D.d(a,n,function(t){return e[t]}.bind(null,n));return a},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="/",D.h=function(){return o};var A=window.webpackJsonp=window.webpackJsonp||[],P=A.push.bind(A);A.push=t,A=A.slice();for(var z=0;z<A.length;z++)t(A[z]);var H=P;S.push([218,1]),a()}({218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(61),o=a.n(i),l=(a(67),a(69),function(){return r.a.createElement("nav",{className:"navbar is-fixed-top",id:"nav-styling"},r.a.createElement("a",{href:"#home",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("a",{href:"#about",className:"navbar-item"},"About"),r.a.createElement("a",{href:"#projects",className:"navbar-item"},"Projects"),r.a.createElement("a",{href:"#contact",className:"navbar-item"},"Contact"))}),c=a(62),s=a.n(c),d=function(){return r.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},r.a.createElement(s.a,{params:{particles:{number:{value:160,density:{enable:!0}},color:{value:"#62fc03"},size:{value:8,random:!0},move:{out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{remove:{particles_nb:10}}}}}))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("section",{className:"hero",id:"home"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered",id:"home-title"},r.a.createElement("p",{className:"title is-size-1"},"Jonny Garius"),r.a.createElement("p",{className:"subtitle"},"Software Engineer | ",r.a.createElement("span",{id:"football"},"Footballer")," | ",r.a.createElement("span",{id:"rugby"},"Rugby Enthusiast"))))))},p=function(){return r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("p",{className:"subtitle has-text-grey-darker"},"Skills"),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-javascript-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-python-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-react-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-mongodb-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-express-original"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-django-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-postgresql-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:" skills-icon devicon-nodejs-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-html5-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-css3-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-babel-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-git-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-heroku-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-mocha-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-sass-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-webpack-plain"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon fab fa-3x fa-slack"})),r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon fab fa-3x fa-r-project"})))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section has-background-light",id:"about"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title has-text-grey-darker"},"About"),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column has-text-left has-text-grey-darker is-size-6",id:"separate"},"Hi there, welcome to my portfolio! I'm a London based Software Engineer, currently working as a Teaching Assistant for General Assembly on their Software Engineering Immersive course.",r.a.createElement("br",null),r.a.createElement("br",null),"My first job out of university saw me working as a Researcher at the Office for National Statistics. I used R and SAS for data-linkage projects linking hashed data both deterministically and probablistically with a fantastic team in Titchfield. I discovered that I loved building algorithms to perform tasks efficiently and in as few lines of code as possible. Not only this, I spent time outside of work researching new functions, packages and methods I could implement in my work.",r.a.createElement("br",null),r.a.createElement("br",null),"After my time at the ONS I spent a year in the tech recruitment space, speaking to Software Engineers regularly. It was here I really discovered what Software Engineering entailed, hearing about the fascinating projects they were working on and the problems they faced in their day to day job. Through all these conversations and my previous experiences of coding, it inspired me to make the leap and enroll into General Assembly's Software Engineering Immersive Course. Enjoying every moment, I graduated from the course in February 2020 and was asked to stay on as a Teaching Assistant."),r.a.createElement(p,null)))))},u=a.p+"43a63e7277fff9ee462bb4888da1a25b.png",h=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:u,alt:"placeholder screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"placeholder-title"},"[ PLACEHOLDER ]"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"Created a full stack application with a ReactJS frontend and NodeJS/MongoDB backend. The platform allows users to share locations (restaurants, pubs, coffee shops etc.) with friends or share locations publicly with all users on the platform (hence the name placeholder!)."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/placeholder",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"http://placeholder-ga.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},b=a.p+"a1a23771ac4524ea275c26432f3f7df5.png",g=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:b}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title is-family-sans-serif",id:"sudoku-title"},"SUDOKU SOLVER"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"Made a simple JavaScript, HTML and CSS sudoku solver that utilises 2 methods of puzzle solving for sudoku puzzles. This project was made with a mobile first approach."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/sudoku-solver",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://jgar123.github.io/sudoku-solver/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},v=a.p+"971d0c00b8db4eebaf07e638d047c894.png",E=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:v,alt:"artist Flow screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"artistflow-title"},"artist_Flow"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"Built a full stack application using ReactJS and Django in a team of 3 over a period of a week. Artist_Flow allows users to search for and find new artists in a user friendly way and store favourited artists."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/artist_Flow",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://artist-flow-ga.herokuapp.com/#/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},y=a.p+"62b2fc6279a3183f00f21b2bcd29d9f3.png",k=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:y,alt:"news me screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"newsme-title"},"NewsMe"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"NewsMe is a frontend application built in a pair coding hackathon. It utilises the News API and openWether API to provide users with the most popular news stories via a keyword search. It also allows users to grab a snapshot of the weather or generate a 5 day forecast."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/project-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://jgar123.github.io/project-2/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},w=a.p+"6e292c28fbef5926bbca7fcd4d1df6ef.png",j=function(){return r.a.createElement("div",{className:"project-child"},r.a.createElement("img",{src:w,alt:"snake screenshot"}),r.a.createElement("div",{className:"project-child-description"},r.a.createElement("p",{className:"title",id:"snake-title"},"SNAKE"),r.a.createElement("div",{className:"hozline"}),r.a.createElement("p",null,"A JavaScript implementation of the classic game snake."),r.a.createElement("div",{className:"project-child-skill"},r.a.createElement("div",{className:"github-container"},r.a.createElement("a",{href:"https://github.com/jgar123/project-1",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain"})),r.a.createElement("p",{className:"is-size-7"},"github repo"))),r.a.createElement("div",{className:"project-link-container"},r.a.createElement("a",{href:"https://jgar123.github.io/project-1",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fas fa-external-link-alt fa-lg"})),r.a.createElement("p",{className:"is-size-7"},"go to project"))))))},N=function(e){var t=e.slideIndex;return r.a.createElement("div",null,1===t?r.a.createElement(h,null):null,2===t?r.a.createElement(g,null):null,3===t?r.a.createElement(E,null):null,4===t?r.a.createElement(k,null):null,5===t?r.a.createElement(j,null):null)};function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var _=[1,2,3,4,5],O=function(){var e=x(Object(n.useState)(1),2),t=e[0],a=e[1];return r.a.createElement("section",{className:"section",id:"projects"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("div",{className:"title"},"Projects"),r.a.createElement("div",{className:"slide-number-container"},r.a.createElement("div",{className:"icon",onClick:function(){var e=t;a(1===e?5:e-=1)}},r.a.createElement("i",{className:"fas fa-chevron-left"})),_.map((function(e,a){return r.a.createElement("div",{key:a},t===e?r.a.createElement("p",{className:"slide-number",id:a},e):r.a.createElement("p",{id:a},e))})),r.a.createElement("div",{className:"icon",onClick:function(){var e=t;a(5===e?1:e+=1)}},r.a.createElement("i",{className:"fas fa-chevron-right"}))),r.a.createElement(N,{slideIndex:t})))},S=function(){return r.a.createElement("section",{className:"section has-background-light",id:"contact"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title has-text-grey-darker"},"Contact Info"),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("a",{href:"https://www.linkedin.com/in/jonny-garius/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("p",{className:"is-size-7"},"linkedin.com/in/jonny-garius/"))),r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("a",{href:"https://github.com/jgar123",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon is-large"},r.a.createElement("i",{className:"skills-icon devicon-github-plain fa-2x"})),r.a.createElement("p",{className:"is-size-7"},"github.com/jgar123"))))))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement(m,null),r.a.createElement(f,null),r.a.createElement(O,null),r.a.createElement(S,null))};o.a.render(r.a.createElement(D,null),document.getElementById("root"))},23:function(e,t,a){(e.exports=a(34)(!1)).push([e.i,"*{box-sizing:border-box}html{scroll-behavior:smooth}html,body{height:100%;font-family:'Montserrat', sans-serif;background-color:royalblue;color:white}body{display:flex;justify-content:center}body #root{width:100%}.title{font-family:'Bebas Neue', cursive;color:white}.subtitle{font-family:'Bebas Neue', cursive;color:white}.tile{background-color:royalblue}#nav-styling{background-color:royalblue;display:flex;justify-content:center}#nav-styling a{color:white;border-bottom:3px solid royalblue}#nav-styling a:hover{background-color:transparent;border-bottom:3px solid white}#home{height:100%}#home .hero-body{display:flex;justify-content:center;align-items:center;background-color:royalblue}#home p{opacity:0;animation-delay:1s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInDown;-webkit-animation-name:fadeInDown}#home .subtitle{opacity:0;animation-delay:1s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInUp;-webkit-animation-name:fadeInUp}#tsparticles{height:100%;width:100%}#about .icon{margin:30px}#about .icon .icon-container{display:flex;flex-direction:column;align-items:center}#about .icon .skills-icon{font-size:4rem;color:royalblue}#about .icon .skills-icon:hover{color:lime;transform:scale(1.1);transition:all .1s ease}#projects{background-color:royalblue;min-height:85vh}#projects .title{display:flex;align-items:center;justify-content:center;margin-bottom:0px}#projects .slide-number-container{display:flex;justify-content:center;margin:15px 0px 25px 0px}#projects .slide-number-container .icon:first-child{margin-right:20px}#projects .slide-number-container .icon:last-child{margin-left:20px}#projects .slide-number-container .icon:hover{cursor:pointer}#projects .slide-number-container p{margin:0px 10px 0px 10px}#projects .slide-number-container .slide-number{transform:scale(1.3);font-weight:bold;color:orange;transition:all ease .1s}#projects .project-child{display:flex;justify-content:space-around;margin-bottom:10px}#projects .project-child img{width:50%;margin-right:5%;opacity:0;animation-delay:0.15s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInLeft;-webkit-animation-name:fadeInLeft}#projects .project-child .project-child-description{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;opacity:0;animation-delay:0.15s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInRight;-webkit-animation-name:fadeInRight}#projects .project-child .project-child-description .subtitle{margin-bottom:10px}#projects .project-child .project-child-description .hozline{width:50%;border:1px solid white;margin-bottom:10px}#projects .project-child .project-child-description .project-child-skill{display:flex;width:100%;justify-content:space-evenly;align-items:flex-end}#projects .project-child .project-child-description .project-child-skill .skills-icon{font-size:2rem;color:white}#projects .project-child .project-child-description .project-child-skill .project-link-container a{color:white}#projects .project-child .project-child-description .project-child-skill .project-link-container:after{display:block;padding:5px 0px 5px 0px;content:'';border-bottom:solid 3px yellow;transform:scaleX(0);transition:transform 250ms ease-in-out}#projects .project-child .project-child-description .project-child-skill .project-link-container:hover:after{transform:scaleX(1)}#projects .project-child .project-child-description .project-child-skill .github-container a{color:white}#projects .project-child .project-child-description .project-child-skill .github-container:after{display:block;padding:5px 0px 5px 0px;content:'';border-bottom:solid 3px yellow;transform:scaleX(0);transition:transform 250ms ease-in-out}#projects .project-child .project-child-description .project-child-skill .github-container:hover:after{transform:scaleX(1)}#placeholder-title{font-family:'Poiret One', cursive}#artistflow-title{font-family:'Cabin Sketch', cursive}#newsme-title{font-family:'Lobster', cursive}#snake-title{font-family:'Press Start 2P', cursive;text-shadow:5px 5px 1px red, 10px 10px 1px blue;color:white}#contact a{color:royalblue;width:100%}#contact a:after{display:block;padding:5px 0px 5px 0px;content:'';border-bottom:solid 3px red;transform:scaleX(0);transition:transform 250ms ease-in-out}#contact a:hover:after{transform:scaleX(1)}.fadeInUp{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInUp;-webkit-animation-name:fadeInUp}.fadeInDown{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInDown;-webkit-animation-name:fadeInDown}.fadeInLeft{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInLeft;-webkit-animation-name:fadeInLeft}.fadeInRight{opacity:0;animation-delay:0.4s;animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both;opacity:0;animation-name:fadeInRight;-webkit-animation-name:fadeInRight}@keyframes aitf{0%{background-position:0% 50%}100%{background-position:100% 50%}}@-webkit-keyframes aitf{0%{background-position:0% 50%}100%{background-position:100% 50%}}@keyframes fadeInUp{from{transform:translate3d(0, 40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInUp{from{transform:translate3d(0, 40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes fadeInLeft{from{transform:translate3d(-30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInLeft{from{transform:translate3d(-30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes fadeInRight{from{transform:translate3d(30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInRight{from{transform:translate3d(30px, 0, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes fadeInDown{from{transform:translate3d(0, -40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInDown{from{transform:translate3d(0, -40px, 0)}to{transform:translate3d(0, 0, 0);opacity:1}}@media only screen and (max-width: 1024px){#root{width:100%}#about .icon{margin:20px}#projects .project-child{flex-direction:column-reverse}#projects .project-child img{width:100%}#placeholder-title,#artistflow-title,#newsme-title,#snake-title,#sudoku-title{padding-bottom:20px}}\n",""])},69:function(e,t,a){var n=a(23);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},i=a(35)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(23,(function(){var t=a(23);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))}});