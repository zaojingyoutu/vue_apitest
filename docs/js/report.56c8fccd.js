(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["report"],{"08d1":function(e,t,c){"use strict";c.r(t);c("b0c0"),c("b680");var r=c("7a23"),n={class:"info",style:{width:"40%",float:"left"}},a={style:{position:"relative",top:"100px"}},s=Object(r["p"])("  "),u=Object(r["p"])("  "),o={style:{color:"red"}},i={style:{margin:"10px"}},_={class:"cases"},l={class:"test-result__content"},b=Object(r["p"])(),O=Object(r["n"])("br",null,null,-1),d=Object(r["n"])("br",null,null,-1),j=Object(r["p"])("详情");function f(e,t,c,f,p,m){var g=Object(r["T"])("a-descriptions-item"),v=Object(r["T"])("a-descriptions"),h=Object(r["T"])("a-progress"),E=Object(r["T"])("a-tag"),k=Object(r["T"])("a-drawer"),w=Object(r["T"])("router-link"),P=Object(r["T"])("a-button"),D=Object(r["T"])("a-table");return Object(r["K"])(),Object(r["m"])(r["b"],null,[Object(r["n"])("h1",null,Object(r["X"])(e.info.name),1),Object(r["n"])("div",n,[Object(r["q"])(v,{title:"",bordered:"",column:1},{default:Object(r["gb"])((function(){return[Object(r["q"])(g,{label:"项目"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.info.project),1)]})),_:1}),Object(r["q"])(g,{label:"环境"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.info.env),1)]})),_:1}),Object(r["q"])(g,{label:"用例数"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.info.cases_count),1)]})),_:1}),Object(r["q"])(g,{label:"执行时间"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.info.create_time),1)]})),_:1}),Object(r["q"])(g,{label:"通过率"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(100-(e.count.cases_result/e.count.cases_count*100).toFixed(2))+"%",1)]})),_:1})]})),_:1})]),Object(r["n"])("div",null,[Object(r["n"])("div",a,[Object(r["q"])(h,{type:"circle",percent:(e.count.cases_result/e.count.cases_count*100).toFixed(2),status:"exception",format:function(e){return"".concat(e," %")}},null,8,["percent","format"]),s,Object(r["q"])(h,{type:"circle",percent:(e.count.skip/e.count.cases_count*100).toFixed(2),strokeColor:"#FFA500",format:function(e){return"".concat(e," %")}},null,8,["percent","format"]),u,Object(r["q"])(h,{type:"circle",percent:100-(e.count.cases_result/e.count.cases_count*100).toFixed(2),format:function(e){return"".concat(e," %")}},{format:Object(r["gb"])((function(e){return[Object(r["n"])("span",o,Object(r["X"])(e),1)]})),_:1},8,["percent","format"]),Object(r["n"])("div",i,[Object(r["q"])(E,{color:"#f50"},{default:Object(r["gb"])((function(){return[Object(r["p"])("失败："+Object(r["X"])(e.count.cases_result),1)]})),_:1}),Object(r["q"])(E,{color:"#FFA500"},{default:Object(r["gb"])((function(){return[Object(r["p"])("跳过: "+Object(r["X"])(e.count.skip),1)]})),_:1}),Object(r["q"])(E,{color:"#87d068"},{default:Object(r["gb"])((function(){return[Object(r["p"])("通过："+Object(r["X"])(e.count.cases_count-e.count.cases_result),1)]})),_:1})])])]),Object(r["n"])("div",_,[Object(r["q"])(k,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=function(t){return e.visible=t}),class:"custom-class",style:{color:"red"},title:"Basic Drawer",placement:"right",width:"520",onAfterVisibleChange:e.afterVisibleChange},{default:Object(r["gb"])((function(){return[Object(r["n"])("h2",null,[Object(r["p"])(Object(r["X"])(e.case_details.name)+" ",1),"FALSE"==e.case_details.result?(Object(r["K"])(),Object(r["k"])(E,{key:0,color:"#f50"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.result),1)]})),_:1})):"SKIP"==e.case_details.result?(Object(r["K"])(),Object(r["k"])(E,{key:1,color:"#FFA500"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.result),1)]})),_:1})):(Object(r["K"])(),Object(r["k"])(E,{key:2,color:"#87d068"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.result),1)]})),_:1}))]),Object(r["n"])("div",l,[Object(r["q"])(v,{title:"",column:1},{default:Object(r["gb"])((function(){return[Object(r["q"])(g,{label:"runtime"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.runtaime)+" ms",1)]})),_:1}),Object(r["q"])(g,{label:"Name"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.name),1)]})),_:1}),Object(r["q"])(g,{label:"method"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.method),1)]})),_:1}),Object(r["q"])(g,{label:"URL"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.url),1)]})),_:1}),Object(r["q"])(g,{label:"header"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.header),1)]})),_:1}),Object(r["q"])(g,{label:"parameter"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.parameter),1)]})),_:1}),Object(r["q"])(g,{label:"data"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(e.case_details.data),1)]})),_:1}),"PASS"!=e.case_details.result?(Object(r["K"])(),Object(r["k"])(v,{key:0},{default:Object(r["gb"])((function(){return[Object(r["q"])(g,{label:"response"},{default:Object(r["gb"])((function(){return[Object(r["p"])("msg: "+Object(r["X"])(e.case_details.assert_msg),1)]})),_:1}),b,O,d,Object(r["q"])(g,{label:"assert"},{default:Object(r["gb"])((function(){return[Object(r["p"])("response: "+Object(r["X"])(e.case_details.response),1)]})),_:1})]})),_:1})):Object(r["l"])("",!0)]})),_:1})])]})),_:1},8,["visible","onAfterVisibleChange"]),Object(r["q"])(D,{columns:e.columns,"data-source":e.data,pagination:!1},{bodyCell:Object(r["gb"])((function(t){var c=t.column,n=t.record,a=t.text;return["name"===c.key?(Object(r["K"])(),Object(r["k"])(w,{key:0,to:{path:"/debug",query:{id:n.id}}},{default:Object(r["gb"])((function(){return[Object(r["n"])("a",null,Object(r["X"])(a),1)]})),_:2},1032,["to"])):Object(r["l"])("",!0),"result"===c.key?(Object(r["K"])(),Object(r["m"])(r["b"],{key:1},["FALSE"==n.result?(Object(r["K"])(),Object(r["k"])(E,{key:0,color:"#f50"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(n.result),1)]})),_:2},1024)):"SKIP"==n.result?(Object(r["K"])(),Object(r["k"])(E,{key:1,color:"#FFA500"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(n.result),1)]})),_:2},1024)):(Object(r["K"])(),Object(r["k"])(E,{key:2,color:"#87d068"},{default:Object(r["gb"])((function(){return[Object(r["p"])(Object(r["X"])(n.result),1)]})),_:2},1024))],64)):Object(r["l"])("",!0),"operation"===c.key?(Object(r["K"])(),Object(r["k"])(P,{key:2,type:"primary",onClick:function(t){return e.showDrawer(n)}},{default:Object(r["gb"])((function(){return[j]})),_:2},1032,["onClick"])):Object(r["l"])("",!0)]})),_:1},8,["columns","data-source"])])],64)}var p=c("4bff"),m=(c("8f7e"),c("6b0d")),g=c.n(m);const v=g()(p["a"],[["render",f]]);t["default"]=v},1148:function(e,t,c){"use strict";var r=c("da84"),n=c("5926"),a=c("577e"),s=c("1d80"),u=r.RangeError;e.exports=function(e){var t=a(s(this)),c="",r=n(e);if(r<0||r==1/0)throw u("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(c+=t);return c}},"1c31":function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c("b775");function n(e){return r["a"].request({method:"get",url:"report/",params:e})}},"24b0":function(e,t,c){},"408a":function(e,t,c){var r=c("e330");e.exports=r(1..valueOf)},"4bff":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7a23"),ant_design_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("f64c"),_api_report__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("1c31"),vue_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("6c02"),columns=[{title:"Full Name",width:250,dataIndex:"name",key:"name",fixed:"left",ellipsis:!0},{title:"module",dataIndex:"module",key:"module",width:150},{title:"url",dataIndex:"url",key:"url",width:350,ellipsis:!0},{title:"method",dataIndex:"method",key:"method",width:"20%"},{title:"result",dataIndex:"result",key:"result",width:"20%",ellipsis:!0},{title:"runtime(ms)",dataIndex:"run_time",key:"runtime",width:"20%"},{title:"Action",key:"operation",fixed:"right",width:100}];__webpack_exports__["a"]=Object(vue__WEBPACK_IMPORTED_MODULE_1__["r"])({setup:function setup(){var data=Object(vue__WEBPACK_IMPORTED_MODULE_1__["P"])(),info=Object(vue__WEBPACK_IMPORTED_MODULE_1__["O"])({name:"",project:"",cases_count:"",create_time:"",env:"",passing_rate:""}),count=Object(vue__WEBPACK_IMPORTED_MODULE_1__["O"])({cases_count:0,cases_false:0,skip:0}),planid=Object(vue_router__WEBPACK_IMPORTED_MODULE_4__["c"])().currentRoute.value.query;Object(_api_report__WEBPACK_IMPORTED_MODULE_3__["a"])(planid).then((function(res){201==res.code&&ant_design_vue__WEBPACK_IMPORTED_MODULE_2__["a"].error({content:res.msg,duration:5}),console.log(res.data.result),data.value=eval("("+res.data.details+")");var result=eval("("+res.data.result+")");count.cases_count=result.cases_count,count.cases_result=result.cases_result,count.skip=result.cases_skip,info.project=res.data.project__name,info.env=res.data.env,info.create_time=res.data.create_time,info.cases_count=result.cases_count,info.name=res.data.name,case_details.project=res.data.project__name}));var visible=Object(vue__WEBPACK_IMPORTED_MODULE_1__["P"])(!1),afterVisibleChange=function(e){console.log("visible",e)},case_details=Object(vue__WEBPACK_IMPORTED_MODULE_1__["O"])({name:"",project:"",url:"",method:"",module:"",header:"",parameter:"",data:"",asserts:"",response:"",runtaime:"",result:"",assert_msg:""}),showDrawer=function(e){visible.value=!0,console.log(e),case_details.name=e.name,case_details.url=e.url,case_details.module=e.module,case_details.method=e.method,case_details.header=e.headers,case_details.parameter=e.parameter,case_details.data=e.data,case_details.response=e.response,case_details.result=e.result,case_details.runtaime=e.run_time,case_details.assert_msg=e.assert_msg};return{columns:columns,data:data,count:count,info:info,visible:visible,afterVisibleChange:afterVisibleChange,showDrawer:showDrawer,case_details:case_details}}})},"8f7e":function(e,t,c){"use strict";c("24b0")},b680:function(e,t,c){"use strict";var r=c("23e7"),n=c("da84"),a=c("e330"),s=c("5926"),u=c("408a"),o=c("1148"),i=c("d039"),_=n.RangeError,l=n.String,b=Math.floor,O=a(o),d=a("".slice),j=a(1..toFixed),f=function(e,t,c){return 0===t?c:t%2===1?f(e,t-1,c*e):f(e*e,t/2,c)},p=function(e){var t=0,c=e;while(c>=4096)t+=12,c/=4096;while(c>=2)t+=1,c/=2;return t},m=function(e,t,c){var r=-1,n=c;while(++r<6)n+=t*e[r],e[r]=n%1e7,n=b(n/1e7)},g=function(e,t){var c=6,r=0;while(--c>=0)r+=e[c],e[c]=b(r/t),r=r%t*1e7},v=function(e){var t=6,c="";while(--t>=0)if(""!==c||0===t||0!==e[t]){var r=l(e[t]);c=""===c?r:c+O("0",7-r.length)+r}return c},h=i((function(){return"0.000"!==j(8e-5,3)||"1"!==j(.9,0)||"1.25"!==j(1.255,2)||"1000000000000000128"!==j(0xde0b6b3a7640080,0)}))||!i((function(){j({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,c,r,n,a=u(this),o=s(e),i=[0,0,0,0,0,0],b="",j="0";if(o<0||o>20)throw _("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return l(a);if(a<0&&(b="-",a=-a),a>1e-21)if(t=p(a*f(2,69,1))-69,c=t<0?a*f(2,-t,1):a/f(2,t,1),c*=4503599627370496,t=52-t,t>0){m(i,0,c),r=o;while(r>=7)m(i,1e7,0),r-=7;m(i,f(10,r,1),0),r=t-1;while(r>=23)g(i,1<<23),r-=23;g(i,1<<r),m(i,1,1),g(i,2),j=v(i)}else m(i,0,c),m(i,1<<-t,0),j=v(i)+O("0",o);return o>0?(n=j.length,j=b+(n<=o?"0."+O("0",o-n)+j:d(j,0,n-o)+"."+d(j,n-o))):j=b+j,j}})},b775:function(e,t,c){"use strict";c("d3b7");var r,n=c("bc3a"),a=c.n(n),s=c("56cd"),u=c("6c02");r="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";var o=a.a.create({baseURL:r,timeout:3e5});o.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var i=function(e){if(e.response){var t=e.response.data,c=localStorage.getItem("token");if(403===e.response.status&&(s["a"].error({message:"Forbidden",description:t.message}),window.location.href="#/login"),401===e.response.status&&(!t.result||!t.result.isLogin)){s["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),c&&window.location.reload();var r=Object(u["c"])();r.push("/login")}}return Promise.reject(e)};o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=t),e}),i),o.interceptors.response.use((function(e){return e.data}),i),t["a"]=o}}]);
//# sourceMappingURL=report.56c8fccd.js.map