(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["testplan"],{"12e3":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=Object(c["p"])("Create "),o=Object(c["n"])("a",null,"Edit",-1),r=Object(c["p"])(" | "),u=Object(c["n"])("a",null,"report",-1),i=Object(c["p"])(" |"),s=["onClick"],l=Object(c["p"])(" | "),d=["onClick"],b=Object(c["p"])(" 更多 "),f=["onClick"],O=["onClick"],j=Object(c["p"])("删除");function p(t,e,n,p,h,m){var v=Object(c["U"])("router-link"),_=Object(c["U"])("a-button"),k=Object(c["U"])("DownOutlined"),q=Object(c["U"])("a-menu-item"),w=Object(c["U"])("a-menu"),g=Object(c["U"])("a-dropdown"),y=Object(c["U"])("a-table"),U=Object(c["U"])("a-input"),C=Object(c["U"])("a-radio"),E=Object(c["U"])("a-form-item"),L=Object(c["U"])("a-modal");return Object(c["K"])(),Object(c["m"])(c["b"],null,[Object(c["q"])(_,{type:"primary"},{default:Object(c["hb"])((function(){return[Object(c["q"])(v,{to:"create_testplan"},{default:Object(c["hb"])((function(){return[a]})),_:1})]})),_:1}),Object(c["q"])(y,{columns:t.columns,"data-source":t.data,scroll:{y:800}},{bodyCell:Object(c["hb"])((function(n){var a=n.record,j=n.column,p=n.text;return["name"===j.dataIndex?(Object(c["K"])(),Object(c["k"])(v,{key:0,to:{path:"/create_testplan",query:{id:a.id}}},{default:Object(c["hb"])((function(){return[Object(c["n"])("a",null,Object(c["Y"])(p),1)]})),_:2},1032,["to"])):Object(c["l"])("",!0),"operation"===j.key?(Object(c["K"])(),Object(c["m"])(c["b"],{key:1},[Object(c["q"])(v,{to:{path:"/create_testplan",query:{id:a.id}}},{default:Object(c["hb"])((function(){return[o]})),_:2},1032,["to"]),r,Object(c["q"])(v,{to:{path:"/reportList",query:{testplan_id:a.id}}},{default:Object(c["hb"])((function(){return[u]})),_:2},1032,["to"]),i,Object(c["n"])("a",{onClick:function(e){return t.runplan(a.id)}}," run",8,s),l,Object(c["n"])("a",{type:"primary",onClick:function(e){return t.showModal(a)}},"添加定时任务",8,d),Object(c["q"])(g,null,{overlay:Object(c["hb"])((function(){return[Object(c["q"])(w,null,{default:Object(c["hb"])((function(){return[Object(c["q"])(q,null,{default:Object(c["hb"])((function(){return[Object(c["n"])("a",{onClick:function(e){return t.deletes(a)}},"Delete",8,f)]})),_:2},1024),Object(c["q"])(q,null,{default:Object(c["hb"])((function(){return[Object(c["n"])("a",{onClick:function(e){return t.toLocust(a)}},"转locust",8,O)]})),_:2},1024)]})),_:2},1024)]})),default:Object(c["hb"])((function(){return[Object(c["n"])("a",{class:"ant-dropdown-link",onClick:e[0]||(e[0]=Object(c["jb"])((function(){}),["prevent"]))},[b,Object(c["q"])(k)])]})),_:2},1024)],64)):Object(c["l"])("",!0)]})),_:1},8,["columns","data-source"]),Object(c["q"])(L,{visible:t.visible,"onUpdate:visible":e[3]||(e[3]=function(e){return t.visible=e}),title:"添加定时任务",onOk:t.handleOk},{default:Object(c["hb"])((function(){return[Object(c["q"])(E,{label:"cron表达式",rules:[{required:!0}]},{default:Object(c["hb"])((function(){return[Object(c["q"])(U,{value:t.cronData.value.cron,"onUpdate:value":e[1]||(e[1]=function(e){return t.cronData.value.cron=e})},null,8,["value"]),Object(c["q"])(C,{checked:t.checked,"onUpdate:checked":e[2]||(e[2]=function(e){return t.checked=e})},{default:Object(c["hb"])((function(){return[j]})),_:1},8,["checked"])]})),_:1})]})),_:1},8,["visible","onOk"])],64)}n("b0c0");var h=n("b4a8"),m=n("b775");function v(t){return m["a"].request({method:"post",url:"runtestplan/",data:t})}function _(t){return m["a"].request({method:"post",url:"task/",data:t})}function k(t){return m["a"].request({method:"delete",url:"task/"+t})}var q=n("f64c"),w=n("a2b1"),g=[{title:"Full Name",width:"20%",dataIndex:"name",key:"name",ellipsis:!0},{title:"describe",width:"20%",dataIndex:"describe",key:"describe",ellipsis:!0},{title:"project",dataIndex:"project__name",key:"project__name",width:"20%",ellipsis:!0},{title:"createtime",dataIndex:"create_time",key:"create_time",width:"20%",ellipsis:!0},{title:"Action",key:"operation",width:120}],y=Object(c["r"])({setup:function(){var t=Object(c["Q"])();Object(h["c"])().then((function(e){t.value=e.data}));var e=function(t){Object(h["b"])(t.id).then((function(t){200==t.code?(q["a"].success({content:"删除成功！",duration:5}),location.reload()):q["a"].success({content:"删除失败！",duration:5}),console.log(t),console.log(t.data.data.result)}))},n=function(t){q["a"].success({content:"开始运行！",duration:5}),v({id:t}).then((function(t){200==t.code?q["a"].success({content:"运行成功！",duration:5}):q["a"].success({content:"运行失败！",duration:5}),console.log(t),console.log(t.data.result)}))},a=Object(c["Q"])(!1),o=function(t){u.value={test_plan_id:t.id,cron:t.task__cron},t.task__id&&(u.value.id=t.task__id),a.value=!0},r=function(e){console.log(e,u),1==i.value?k(u.value.id).then((function(e){200==e.code?(q["a"].success({content:"删除成功！",duration:5}),Object(h["c"])().then((function(e){t.value=e.data}))):q["a"].success({content:"删除失败！",duration:5})})):_(u.value).then((function(e){200==e.code?(q["a"].success({content:"添加成功！",duration:5}),Object(h["c"])().then((function(e){t.value=e.data}))):q["a"].success({content:"添加失败！",duration:5})})),a.value=!1},u=Object(c["O"])({}),i=Object(c["Q"])(!1),s=function(t){var e={mold:"tofile",name:t.name+".py",testplan_id:t.id,create_user:JSON.parse(localStorage.user).name};Object(w["b"])(e).then((function(t){200==t.code?q["a"].success({content:"添加成功！",duration:5}):q["a"].error({content:"添加失败！"+t.msg,duration:5})}))};return{deletes:e,runplan:n,visible:a,showModal:o,handleOk:r,cronData:u,checked:i,data:t,columns:g,toLocust:s}}}),U=n("6b0d"),C=n.n(U);const E=C()(y,[["render",p]]);e["default"]=E},a2b1:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s}));var c=n("b775");function a(t){return c["a"].request({method:"get",url:"locust/",params:t})}function o(t){return c["a"].request({method:"get",url:"locust/"+t})}function r(t){return c["a"].request({method:"put",url:"locust/"+t.id+"/",data:t})}function u(t){return c["a"].request({method:"post",url:"locust/",data:t})}function i(t){return c["a"].request({method:"post",url:"runLocust/",data:t})}function s(t){return c["a"].request({method:"delete",url:"locust/"+t+"/"})}},b4a8:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r}));var c=n("b775");function a(t,e){return c["a"].request({method:e,url:"testplan/",data:t})}function o(t){return c["a"].request({method:"get",url:"testplan/",params:t})}function r(t){return c["a"].request({method:"delete",url:"testplan/",data:[t]})}},b775:function(t,e,n){"use strict";n("d3b7");var c,a=n("bc3a"),o=n.n(a),r=n("56cd"),u=n("6c02");c="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";var i=o.a.create({baseURL:c,timeout:3e5});i.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var s=function(t){if(t.response){var e=t.response.data,n=localStorage.getItem("token");if(403===t.response.status&&(r["a"].error({message:"Forbidden",description:e.message}),window.location.href="#/login"),401===t.response.status&&(!e.result||!e.result.isLogin)){r["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),n&&window.location.reload();var c=Object(u["d"])();c.push("/login")}}return Promise.reject(t)};i.interceptors.request.use((function(t){var e=localStorage.getItem("token");return e&&(t.headers["Authorization"]=e),t}),s),i.interceptors.response.use((function(t){return"string"!=typeof t.data&&(t.data["status"]=t.status),t.data}),s),e["a"]=i}}]);
//# sourceMappingURL=testplan.7daa9619.js.map