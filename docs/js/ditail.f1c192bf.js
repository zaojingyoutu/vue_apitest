(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ditail"],{b775:function(t,e,r){"use strict";r("d3b7");var n,o=r("bc3a"),a=r.n(o),s=r("56cd"),u=r("6c02");n="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8002/api/";var i=a.a.create({baseURL:n,timeout:3e5});i.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var c=function(t){if(t.response){var e=t.response.data,r=localStorage.getItem("token");if(403===t.response.status&&(s["a"].error({message:"Forbidden",description:e.message}),window.location.href="#/login"),401===t.response.status&&(!e.result||!e.result.isLogin)){s["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),r&&window.location.reload();var n=Object(u["d"])();n.push("/login")}}return Promise.reject(t)};i.interceptors.request.use((function(t){var e=localStorage.getItem("token");return e&&(t.headers["Authorization"]=e),t}),c),i.interceptors.response.use((function(t){return"string"!=typeof t.data&&(t.data["status"]=t.status),t.data}),c),e["a"]=i},c84e:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o=["srcdoc"];function a(t,e,r,a,s,u){return Object(n["K"])(),Object(n["m"])("iframe",{srcdoc:t.htmlText,style:{width:"100%",height:"85vh"}},null,8,o)}var s=r("ef7e"),u=r("6c02"),i=Object(n["r"])({setup:function(){var t=Object(n["P"])(),e=Object(u["d"])().currentRoute.value.query;return Object(s["b"])(e.id).then((function(e){t.value=e})),{htmlText:t}}}),c=r("6b0d"),d=r.n(c);const l=d()(i,[["render",a]]);e["default"]=l},ef7e:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return s}));var n=r("b775");function o(t){return n["a"].request({method:"get",url:"locustReport/",params:t})}function a(t){return n["a"].request({method:"get",url:"locustReport/"+t})}function s(t){return n["a"].request({method:"delete",url:"locustReport/"+t+"/"})}}}]);
//# sourceMappingURL=ditail.f1c192bf.js.map