(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["variate_list"],{"0f0c":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c}));var a=n("b775");function r(t,e){return a["a"].request({method:e,url:"globalsvariate/",data:t})}function o(t){return a["a"].request({method:"get",url:"globalsvariate/",params:t})}function c(t){return a["a"].request({method:"delete",url:"globalsvariate/",data:[t]})}},3957:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),r=Object(a["p"])("Create "),o=["onClick"],c=Object(a["p"])(" | "),i=Object(a["n"])("a",null,"Edit",-1);function u(t,e,n,u,s,l){var d=Object(a["U"])("router-link"),b=Object(a["U"])("a-button"),p=Object(a["U"])("a-table");return Object(a["K"])(),Object(a["m"])(a["b"],null,[Object(a["q"])(b,{type:"primary"},{default:Object(a["hb"])((function(){return[Object(a["q"])(d,{to:"create_variate"},{default:Object(a["hb"])((function(){return[r]})),_:1})]})),_:1}),Object(a["q"])(p,{columns:t.columns,"data-source":t.data,scroll:{x:1200,y:800}},{bodyCell:Object(a["hb"])((function(e){var n=e.record,r=e.column,u=e.text;return["name"===r.dataIndex?(Object(a["K"])(),Object(a["k"])(d,{key:0,to:{path:"/case",query:{project_id:n.id}}},{default:Object(a["hb"])((function(){return[Object(a["n"])("a",null,Object(a["Y"])(u),1)]})),_:2},1032,["to"])):Object(a["l"])("",!0),"operation"===r.key?(Object(a["K"])(),Object(a["m"])(a["b"],{key:1},[Object(a["n"])("a",{onClick:function(e){return t.deletes(n)}},"Delete",8,o),c,Object(a["q"])(d,{to:{path:"/create_variate",query:{id:n.id}}},{default:Object(a["hb"])((function(){return[i]})),_:2},1032,["to"])],64)):Object(a["l"])("",!0)]})),_:1},8,["columns","data-source"])],64)}var s=n("0f0c"),l=n("f64c"),d=[{title:"变量名",width:"20%",dataIndex:"key",ellipsis:!0,key:"key"},{title:"变量值",width:"20%",dataIndex:"value",ellipsis:!0,key:"value"},{title:"环境",dataIndex:"env",key:"env",ellipsis:!0,width:"20%"},{title:"项目",dataIndex:"project__name",key:"project__name",ellipsis:!0,width:"20%"},{title:"createtime",dataIndex:"create_time",key:"create_time",ellipsis:!0,width:"20%"},{title:"Action",key:"operation",ellipsis:!0,width:120}],b=Object(a["r"])({data:function(){return{data:[],columns:d}},created:function(){var t=this;Object(s["c"])().then((function(e){t.data=e.data,console.log("=========")}))},setup:function(){var t=function(t){Object(s["b"])(t.id).then((function(t){200==t.code?(l["a"].success({content:"删除成功！",duration:5}),location.reload()):l["a"].success({content:"删除失败！",duration:5}),console.log(t),console.log(t.data.data.result)}))};return{deletes:t}}}),p=n("6b0d"),f=n.n(p);const j=f()(b,[["render",u]]);e["default"]=j},b775:function(t,e,n){"use strict";n("d3b7");var a,r=n("bc3a"),o=n.n(r),c=n("56cd"),i=n("6c02");a="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";var u=o.a.create({baseURL:a,timeout:3e5});u.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var s=function(t){if(t.response){var e=t.response.data,n=localStorage.getItem("token");if(403===t.response.status&&(c["a"].error({message:"Forbidden",description:e.message}),window.location.href="#/login"),401===t.response.status&&(!e.result||!e.result.isLogin)){c["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),n&&window.location.reload();var a=Object(i["c"])();a.push("/login")}}return Promise.reject(t)};u.interceptors.request.use((function(t){var e=localStorage.getItem("token");return e&&(t.headers["Authorization"]=e),t}),s),u.interceptors.response.use((function(t){return t.data["status"]=t.status,t.data}),s),e["a"]=u}}]);
//# sourceMappingURL=variate_list.d3005176.js.map