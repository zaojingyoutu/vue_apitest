(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["testplan"],{"12e3":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=Object(a["p"])("Create "),o=["onClick"],r=Object(a["p"])(" | "),u=Object(a["n"])("a",null,"Edit",-1),i=Object(a["p"])(" | "),s=Object(a["n"])("a",null,"report",-1),l=Object(a["p"])(" |"),d=["onClick"],b=Object(a["p"])(" | "),p=["onClick"],O=Object(a["p"])("删除");function j(t,e,n,j,f,h){var v=Object(a["U"])("router-link"),k=Object(a["U"])("a-button"),m=Object(a["U"])("a-table"),_=Object(a["U"])("a-input"),q=Object(a["U"])("a-radio"),w=Object(a["U"])("a-form-item"),y=Object(a["U"])("a-modal");return Object(a["K"])(),Object(a["m"])(a["b"],null,[Object(a["q"])(k,{type:"primary"},{default:Object(a["hb"])((function(){return[Object(a["q"])(v,{to:"create_testplan"},{default:Object(a["hb"])((function(){return[c]})),_:1})]})),_:1}),Object(a["q"])(m,{columns:t.columns,"data-source":t.data,scroll:{y:800}},{bodyCell:Object(a["hb"])((function(e){var n=e.record,c=e.column,O=e.text;return["name"===c.dataIndex?(Object(a["K"])(),Object(a["k"])(v,{key:0,to:{path:"/create_testplan",query:{id:n.id}}},{default:Object(a["hb"])((function(){return[Object(a["n"])("a",null,Object(a["Y"])(O),1)]})),_:2},1032,["to"])):Object(a["l"])("",!0),"operation"===c.key?(Object(a["K"])(),Object(a["m"])(a["b"],{key:1},[Object(a["n"])("a",{onClick:function(e){return t.deletes(n)}},"Delete",8,o),r,Object(a["q"])(v,{to:{path:"/create_testplan",query:{id:n.id}}},{default:Object(a["hb"])((function(){return[u]})),_:2},1032,["to"]),i,Object(a["q"])(v,{to:{path:"/reportList",query:{testplan_id:n.id}}},{default:Object(a["hb"])((function(){return[s]})),_:2},1032,["to"]),l,Object(a["n"])("a",{onClick:function(e){return t.runplan(n.id)}}," run",8,d),b,Object(a["n"])("a",{type:"primary",onClick:function(e){return t.showModal(n)}},"添加定时任务",8,p)],64)):Object(a["l"])("",!0)]})),_:1},8,["columns","data-source"]),Object(a["q"])(y,{visible:t.visible,"onUpdate:visible":e[2]||(e[2]=function(e){return t.visible=e}),title:"添加定时任务",onOk:t.handleOk},{default:Object(a["hb"])((function(){return[Object(a["q"])(w,{label:"cron表达式",rules:[{required:!0}]},{default:Object(a["hb"])((function(){return[Object(a["q"])(_,{value:t.cronData.value.cron,"onUpdate:value":e[0]||(e[0]=function(e){return t.cronData.value.cron=e})},null,8,["value"]),Object(a["q"])(q,{checked:t.checked,"onUpdate:checked":e[1]||(e[1]=function(e){return t.checked=e})},{default:Object(a["hb"])((function(){return[O]})),_:1},8,["checked"])]})),_:1})]})),_:1},8,["visible","onOk"])],64)}var f=n("b4a8"),h=n("b775");function v(t){return h["a"].request({method:"post",url:"runtestplan/",data:t})}function k(t){return h["a"].request({method:"post",url:"task/",data:t})}function m(t){return h["a"].request({method:"delete",url:"task/"+t})}var _=n("f64c"),q=[{title:"Full Name",width:"20%",dataIndex:"name",key:"name",ellipsis:!0},{title:"describe",width:"20%",dataIndex:"describe",key:"describe",ellipsis:!0},{title:"project",dataIndex:"project__name",key:"project__name",width:"20%",ellipsis:!0},{title:"createtime",dataIndex:"create_time",key:"create_time",width:"20%",ellipsis:!0},{title:"Action",key:"operation",width:120}],w=Object(a["r"])({setup:function(){var t=Object(a["Q"])();Object(f["c"])().then((function(e){t.value=e.data}));var e=function(t){Object(f["b"])(t.id).then((function(t){200==t.code?(_["a"].success({content:"删除成功！",duration:5}),location.reload()):_["a"].success({content:"删除失败！",duration:5}),console.log(t),console.log(t.data.data.result)}))},n=function(t){_["a"].success({content:"开始运行！",duration:5}),v({id:t}).then((function(t){200==t.code?_["a"].success({content:"运行成功！",duration:5}):_["a"].success({content:"运行失败！",duration:5}),console.log(t),console.log(t.data.result)}))},c=Object(a["Q"])(!1),o=function(t){u.value={test_plan_id:t.id,cron:t.task__cron},t.task__id&&(u.value.id=t.task__id),c.value=!0},r=function(e){console.log(e,u),1==i.value?m(u.value.id).then((function(e){200==e.code?(_["a"].success({content:"删除成功！",duration:5}),Object(f["c"])().then((function(e){t.value=e.data}))):_["a"].success({content:"删除失败！",duration:5})})):k(u.value).then((function(e){200==e.code?(_["a"].success({content:"添加成功！",duration:5}),Object(f["c"])().then((function(e){t.value=e.data}))):_["a"].success({content:"添加失败！",duration:5})})),c.value=!1},u=Object(a["O"])({}),i=Object(a["Q"])(!1);return{deletes:e,runplan:n,visible:c,showModal:o,handleOk:r,cronData:u,checked:i,data:t,columns:q}}}),y=n("6b0d"),g=n.n(y);const U=g()(w,[["render",j]]);e["default"]=U},b4a8:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r}));var a=n("b775");function c(t,e){return a["a"].request({method:e,url:"testplan/",data:t})}function o(t){return a["a"].request({method:"get",url:"testplan/",params:t})}function r(t){return a["a"].request({method:"delete",url:"testplan/",data:[t]})}},b775:function(t,e,n){"use strict";n("d3b7");var a,c=n("bc3a"),o=n.n(c),r=n("56cd"),u=n("6c02");a="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";var i=o.a.create({baseURL:a,timeout:3e5});i.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var s=function(t){if(t.response){var e=t.response.data,n=localStorage.getItem("token");if(403===t.response.status&&(r["a"].error({message:"Forbidden",description:e.message}),window.location.href="#/login"),401===t.response.status&&(!e.result||!e.result.isLogin)){r["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),n&&window.location.reload();var a=Object(u["d"])();a.push("/login")}}return Promise.reject(t)};i.interceptors.request.use((function(t){var e=localStorage.getItem("token");return e&&(t.headers["Authorization"]=e),t}),s),i.interceptors.response.use((function(t){return"string"!=typeof t.data&&(t.data["status"]=t.status),t.data}),s),e["a"]=i}}]);
//# sourceMappingURL=testplan.18aa7cec.js.map