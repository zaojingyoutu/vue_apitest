(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["report"],{"08d1":function(e,t,c){"use strict";c.r(t);c("b0c0"),c("b680");var n=c("7a23"),a={class:"info",style:{width:"40%",float:"left"}},r={style:{position:"relative",top:"100px"}},s=Object(n["p"])("  "),o=Object(n["p"])("  "),u={style:{color:"red"}},i={style:{margin:"10px"}},l={class:"cases"},_={class:"test-result__content"},b=Object(n["p"])(),d=Object(n["n"])("br",null,null,-1),O=Object(n["n"])("br",null,null,-1),j=Object(n["p"])("详情");function f(e,t,c,f,p,m){var h=Object(n["U"])("a-descriptions-item"),v=Object(n["U"])("a-descriptions"),k=Object(n["U"])("a-progress"),E=Object(n["U"])("a-tag"),w=Object(n["U"])("a-drawer"),g=Object(n["U"])("router-link"),y=Object(n["U"])("a-button"),D=Object(n["U"])("a-table");return Object(n["K"])(),Object(n["m"])(n["b"],null,[Object(n["n"])("h1",null,Object(n["Y"])(e.info.name),1),Object(n["n"])("div",a,[Object(n["q"])(v,{title:"",bordered:"",column:1},{default:Object(n["hb"])((function(){return[Object(n["q"])(h,{label:"项目"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.info.project),1)]})),_:1}),Object(n["q"])(h,{label:"环境"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.info.env),1)]})),_:1}),Object(n["q"])(h,{label:"用例数"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.info.cases_count),1)]})),_:1}),Object(n["q"])(h,{label:"执行时间"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.info.create_time),1)]})),_:1}),Object(n["q"])(h,{label:"通过率"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(100-(e.count.cases_result/e.count.cases_count*100).toFixed(2))+"%",1)]})),_:1})]})),_:1})]),Object(n["n"])("div",null,[Object(n["n"])("div",r,[Object(n["q"])(k,{type:"circle",percent:(e.count.cases_false/e.count.cases_count*100).toFixed(2),status:"exception",format:function(e){return"".concat(e," %")}},null,8,["percent","format"]),s,Object(n["q"])(k,{type:"circle",percent:(e.count.skip/e.count.cases_count*100).toFixed(2),strokeColor:"#FFA500",format:function(e){return"".concat(e," %")}},null,8,["percent","format"]),o,Object(n["q"])(k,{type:"circle",percent:100-(e.count.cases_false/e.count.cases_count*100).toFixed(2),format:function(e){return"".concat(e," %")}},{format:Object(n["hb"])((function(e){return[Object(n["n"])("span",u,Object(n["Y"])(e),1)]})),_:1},8,["percent","format"]),Object(n["n"])("div",i,[Object(n["q"])(E,{color:"#f50"},{default:Object(n["hb"])((function(){return[Object(n["p"])("失败："+Object(n["Y"])(e.count.cases_false),1)]})),_:1}),Object(n["q"])(E,{color:"#FFA500"},{default:Object(n["hb"])((function(){return[Object(n["p"])("跳过: "+Object(n["Y"])(e.count.skip),1)]})),_:1}),Object(n["q"])(E,{color:"#87d068"},{default:Object(n["hb"])((function(){return[Object(n["p"])("通过："+Object(n["Y"])(e.count.cases_count-e.count.cases_false),1)]})),_:1})])])]),Object(n["n"])("div",l,[Object(n["q"])(w,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=function(t){return e.visible=t}),class:"custom-class",style:{color:"red"},title:"Basic Drawer",placement:"right",width:"520",onAfterVisibleChange:e.afterVisibleChange},{default:Object(n["hb"])((function(){return[Object(n["n"])("h2",null,[Object(n["p"])(Object(n["Y"])(e.case_details.name)+" ",1),"FALSE"==e.case_details.result?(Object(n["K"])(),Object(n["k"])(E,{key:0,color:"#f50"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.result),1)]})),_:1})):"SKIP"==e.case_details.result?(Object(n["K"])(),Object(n["k"])(E,{key:1,color:"#FFA500"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.result),1)]})),_:1})):(Object(n["K"])(),Object(n["k"])(E,{key:2,color:"#87d068"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.result),1)]})),_:1}))]),Object(n["n"])("div",_,[Object(n["q"])(v,{title:"",column:1},{default:Object(n["hb"])((function(){return[Object(n["q"])(h,{label:"runtime"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.runtaime)+" ms",1)]})),_:1}),Object(n["q"])(h,{label:"Name"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.name),1)]})),_:1}),Object(n["q"])(h,{label:"method"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.method),1)]})),_:1}),Object(n["q"])(h,{label:"URL"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.url),1)]})),_:1}),Object(n["q"])(h,{label:"header"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.header),1)]})),_:1}),Object(n["q"])(h,{label:"parameter"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.parameter),1)]})),_:1}),Object(n["q"])(h,{label:"data"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(e.case_details.data),1)]})),_:1}),"PASS"!=e.case_details.result?(Object(n["K"])(),Object(n["k"])(v,{key:0},{default:Object(n["hb"])((function(){return[Object(n["q"])(h,{label:"response"},{default:Object(n["hb"])((function(){return[Object(n["p"])("msg: "+Object(n["Y"])(e.case_details.assert_msg),1)]})),_:1}),b,d,O,Object(n["q"])(h,{label:"assert"},{default:Object(n["hb"])((function(){return[Object(n["p"])("response: "+Object(n["Y"])(e.case_details.response),1)]})),_:1})]})),_:1})):Object(n["l"])("",!0)]})),_:1})])]})),_:1},8,["visible","onAfterVisibleChange"]),Object(n["q"])(D,{columns:e.columns,"data-source":e.data,pagination:!1},{bodyCell:Object(n["hb"])((function(t){var c=t.column,a=t.record,r=t.text;return["name"===c.key?(Object(n["K"])(),Object(n["k"])(g,{key:0,to:{path:"/debug",query:{id:a.id}}},{default:Object(n["hb"])((function(){return[Object(n["n"])("a",null,Object(n["Y"])(r),1)]})),_:2},1032,["to"])):Object(n["l"])("",!0),"result"===c.key?(Object(n["K"])(),Object(n["m"])(n["b"],{key:1},["FALSE"==a.result?(Object(n["K"])(),Object(n["k"])(E,{key:0,color:"#f50"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(a.result),1)]})),_:2},1024)):"SKIP"==a.result?(Object(n["K"])(),Object(n["k"])(E,{key:1,color:"#FFA500"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(a.result),1)]})),_:2},1024)):(Object(n["K"])(),Object(n["k"])(E,{key:2,color:"#87d068"},{default:Object(n["hb"])((function(){return[Object(n["p"])(Object(n["Y"])(a.result),1)]})),_:2},1024))],64)):Object(n["l"])("",!0),"operation"===c.key?(Object(n["K"])(),Object(n["k"])(y,{key:2,type:"primary",onClick:function(t){return e.showDrawer(a)}},{default:Object(n["hb"])((function(){return[j]})),_:2},1032,["onClick"])):Object(n["l"])("",!0)]})),_:1},8,["columns","data-source"])])],64)}var p=c("4bff"),m=(c("e709"),c("6b0d")),h=c.n(m);const v=h()(p["a"],[["render",f]]);t["default"]=v},1148:function(e,t,c){"use strict";var n=c("da84"),a=c("5926"),r=c("577e"),s=c("1d80"),o=n.RangeError;e.exports=function(e){var t=r(s(this)),c="",n=a(e);if(n<0||n==1/0)throw o("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(c+=t);return c}},"1c31":function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return r}));var n=c("b775");function a(e){return n["a"].request({method:"get",url:"report/",params:e})}function r(e){return n["a"].request({method:"delete",url:"report/",data:[e]})}},"1f22":function(e,t,c){},"2f1c":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=["onClick"];function r(e,t,c,r,s,o){var u=Object(n["U"])("router-link"),i=Object(n["U"])("a-table");return Object(n["K"])(),Object(n["k"])(i,{columns:e.columns,"data-source":e.data,scroll:{y:800}},{bodyCell:Object(n["hb"])((function(t){var c=t.record,r=t.column,s=t.text;return["name"===r.dataIndex?(Object(n["K"])(),Object(n["k"])(u,{key:0,to:{path:"/report",query:{id:c.id}}},{default:Object(n["hb"])((function(){return[Object(n["n"])("a",null,Object(n["Y"])(s),1)]})),_:2},1032,["to"])):Object(n["l"])("",!0),"result"===r.dataIndex?(Object(n["K"])(),Object(n["m"])(n["b"],{key:1},[Object(n["p"])(Object(n["Y"])(JSON.parse(s).cases_false>0?"失败":"通过"),1)],64)):Object(n["l"])("",!0),"operation"===r.key?(Object(n["K"])(),Object(n["m"])("a",{key:2,onClick:function(t){return e.deletes(c)}},"Delete",8,a)):Object(n["l"])("",!0)]})),_:1},8,["columns","data-source"])}var s=c("1c31"),o=c("f64c"),u=[{title:"Full Name",width:"20%",dataIndex:"name",key:"name",ellipsis:!0},{title:"result",width:"20%",dataIndex:"result",key:"result",ellipsis:!0},{title:"project",dataIndex:"project__name",key:"project__name",width:"20%",ellipsis:!0},{title:"createtime",dataIndex:"create_time",key:"create_time",width:"20%",ellipsis:!0},{title:"Action",key:"operation",width:120}],i=Object(n["r"])({data:function(){return{data:[],columns:u}},created:function(){var e=this;Object(s["b"])().then((function(t){e.data=t.data,console.log("=========")}))},setup:function(){var e=function(e){Object(s["a"])(e.id).then((function(e){200==e.code?(o["a"].success({content:"删除成功！",duration:5}),location.reload()):o["a"].success({content:"删除失败！",duration:5}),console.log(e),console.log(e.data.data.result)}))};return{deletes:e}}}),l=c("6b0d"),_=c.n(l);const b=_()(i,[["render",r]]);t["default"]=b},"408a":function(e,t,c){var n=c("e330");e.exports=n(1..valueOf)},"4bff":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7a23"),ant_design_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("f64c"),_api_report__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("1c31"),vue_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("6c02"),columns=[{title:"Full Name",width:250,dataIndex:"name",key:"name",fixed:"left",ellipsis:!0},{title:"module",dataIndex:"module",key:"module",width:150},{title:"url",dataIndex:"url",key:"url",width:350,ellipsis:!0},{title:"method",dataIndex:"method",key:"method",width:"20%"},{title:"result",dataIndex:"result",key:"result",width:"20%",ellipsis:!0},{title:"runtime(ms)",dataIndex:"run_time",key:"runtime",width:"20%"},{title:"Action",key:"operation",fixed:"right",width:100}];__webpack_exports__["a"]=Object(vue__WEBPACK_IMPORTED_MODULE_1__["r"])({setup:function setup(){var data=Object(vue__WEBPACK_IMPORTED_MODULE_1__["Q"])(),info=Object(vue__WEBPACK_IMPORTED_MODULE_1__["O"])({name:"",project:"",cases_count:"",create_time:"",env:"",passing_rate:""}),count=Object(vue__WEBPACK_IMPORTED_MODULE_1__["O"])({cases_count:0,cases_false:0,skip:0}),id=Object(vue_router__WEBPACK_IMPORTED_MODULE_4__["d"])().currentRoute.value.query;Object(_api_report__WEBPACK_IMPORTED_MODULE_3__["b"])(id).then((function(res){201==res.code&&ant_design_vue__WEBPACK_IMPORTED_MODULE_2__["a"].error({content:res.msg,duration:5}),data.value=eval("("+res.data[0].details+")");var result=eval("("+res.data[0].result+")");count.cases_count=result.cases_count,count.cases_result=result.cases_result,count.skip=result.cases_skip,info.project=res.data[0].project__name,info.env=res.data[0].env,info.create_time=res.data[0].create_time,info.cases_count=result.cases_count,info.name=res.data[0].name,case_details.project=res.data[0].project__name}));var visible=Object(vue__WEBPACK_IMPORTED_MODULE_1__["Q"])(!1),afterVisibleChange=function(e){console.log("visible",e)},case_details=Object(vue__WEBPACK_IMPORTED_MODULE_1__["O"])({name:"",project:"",url:"",method:"",module:"",header:"",parameter:"",data:"",asserts:"",response:"",runtaime:"",result:"",assert_msg:""}),showDrawer=function(e){visible.value=!0,console.log(e),case_details.name=e.name,case_details.url=e.url,case_details.module=e.module,case_details.method=e.method,case_details.header=e.headers,case_details.parameter=e.parameter,case_details.data=e.data,case_details.response=e.response,case_details.result=e.result,case_details.runtaime=e.run_time,case_details.assert_msg=e.assert_msg};return{columns:columns,data:data,count:count,info:info,visible:visible,afterVisibleChange:afterVisibleChange,showDrawer:showDrawer,case_details:case_details}}})},b680:function(e,t,c){"use strict";var n=c("23e7"),a=c("da84"),r=c("e330"),s=c("5926"),o=c("408a"),u=c("1148"),i=c("d039"),l=a.RangeError,_=a.String,b=Math.floor,d=r(u),O=r("".slice),j=r(1..toFixed),f=function(e,t,c){return 0===t?c:t%2===1?f(e,t-1,c*e):f(e*e,t/2,c)},p=function(e){var t=0,c=e;while(c>=4096)t+=12,c/=4096;while(c>=2)t+=1,c/=2;return t},m=function(e,t,c){var n=-1,a=c;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=b(a/1e7)},h=function(e,t){var c=6,n=0;while(--c>=0)n+=e[c],e[c]=b(n/t),n=n%t*1e7},v=function(e){var t=6,c="";while(--t>=0)if(""!==c||0===t||0!==e[t]){var n=_(e[t]);c=""===c?n:c+d("0",7-n.length)+n}return c},k=i((function(){return"0.000"!==j(8e-5,3)||"1"!==j(.9,0)||"1.25"!==j(1.255,2)||"1000000000000000128"!==j(0xde0b6b3a7640080,0)}))||!i((function(){j({})}));n({target:"Number",proto:!0,forced:k},{toFixed:function(e){var t,c,n,a,r=o(this),u=s(e),i=[0,0,0,0,0,0],b="",j="0";if(u<0||u>20)throw l("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return _(r);if(r<0&&(b="-",r=-r),r>1e-21)if(t=p(r*f(2,69,1))-69,c=t<0?r*f(2,-t,1):r/f(2,t,1),c*=4503599627370496,t=52-t,t>0){m(i,0,c),n=u;while(n>=7)m(i,1e7,0),n-=7;m(i,f(10,n,1),0),n=t-1;while(n>=23)h(i,1<<23),n-=23;h(i,1<<n),m(i,1,1),h(i,2),j=v(i)}else m(i,0,c),m(i,1<<-t,0),j=v(i)+d("0",u);return u>0?(a=j.length,j=b+(a<=u?"0."+d("0",u-a)+j:O(j,0,a-u)+"."+O(j,a-u))):j=b+j,j}})},b775:function(e,t,c){"use strict";c("d3b7");var n,a=c("bc3a"),r=c.n(a),s=c("56cd"),o=c("6c02");n="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";var u=r.a.create({baseURL:n,timeout:3e5});u.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var i=function(e){if(e.response){var t=e.response.data,c=localStorage.getItem("token");if(403===e.response.status&&(s["a"].error({message:"Forbidden",description:t.message}),window.location.href="#/login"),401===e.response.status&&(!t.result||!t.result.isLogin)){s["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),c&&window.location.reload();var n=Object(o["d"])();n.push("/login")}}return Promise.reject(e)};u.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=t),e}),i),u.interceptors.response.use((function(e){return"string"!=typeof e.data&&(e.data["status"]=e.status),e.data}),i),t["a"]=u},e709:function(e,t,c){"use strict";c("1f22")}}]);
//# sourceMappingURL=report.1c4ab4c1.js.map