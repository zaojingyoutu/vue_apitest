(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create_variate"],{"0a9a":function(module,__webpack_exports__,__webpack_require__){"use strict";var D_code_GitHub_vue_apitest_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("5530"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("7a23"),lodash_es__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5a04"),ant_design_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("3af3"),ant_design_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("f64c"),vue_router__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("6c02"),_api_testplan__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("b4a8"),_api_cases__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("58ef"),axios__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__),_api_project__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("24d2"),columns=[{title:"Name",dataIndex:"name"},{title:"project",dataIndex:"project__name"},{title:"module",dataIndex:"module"}],useForm=ant_design_vue__WEBPACK_IMPORTED_MODULE_6__["a"].useForm;__webpack_exports__["a"]=Object(vue__WEBPACK_IMPORTED_MODULE_4__["r"])({setup:function setup(){var planid=Object(vue_router__WEBPACK_IMPORTED_MODULE_8__["c"])().currentRoute.value.query;void 0!=Object(vue_router__WEBPACK_IMPORTED_MODULE_8__["c"])().currentRoute.value.query.id&&Object(_api_testplan__WEBPACK_IMPORTED_MODULE_9__["c"])(Object(vue_router__WEBPACK_IMPORTED_MODULE_8__["c"])().currentRoute.value.query).then((function(res){if(console.log(res),modelRef.name=res.data[0].name,modelRef.describe=res.data[0].describe,modelRef.id=res.data[0].id,modelRef.env=res.data[0].env,modelRef.project_id=res.data[0].project,res.data[0].case_list.includes("[")&&(console.log(),modelRef.case_list=eval("("+res.data[0].case_list+")"),0!=modelRef.case_list.length))for(var i=0;i<modelRef.case_list.length;i++)state.selectedRowKeys.push(modelRef.case_list[i].id);modelRef.env=res.data[0].env}));var data=Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])(),modelRef=Object(vue__WEBPACK_IMPORTED_MODULE_4__["O"])({name:"",describe:"",env:"0",project_id:"",case_list:""}),count=Object(vue__WEBPACK_IMPORTED_MODULE_4__["O"])({cases_count:0,cases_false:0}),rulesRef=Object(vue__WEBPACK_IMPORTED_MODULE_4__["O"])({name:[{required:!0,message:"Please input name"}],describe:[{message:"Please input describe"}],start_time:[{required:!0,message:"Please input start_time"}],end_time:[{required:!0,message:"Please input end_time"}]}),_useForm=useForm(modelRef,rulesRef),resetFields=_useForm.resetFields,validateInfos=_useForm.validateInfos,mergeValidateInfo=_useForm.mergeValidateInfo,onSubmit=function(){var e;console.log(Object(vue__WEBPACK_IMPORTED_MODULE_4__["Y"])(modelRef)),e=void 0==planid.id?"post":"put",Object(_api_testplan__WEBPACK_IMPORTED_MODULE_9__["a"])(modelRef,e).then((function(e){ant_design_vue__WEBPACK_IMPORTED_MODULE_7__["a"].success({content:e.msg,duration:5}),200==e.code&&(window.location.href="/testplan"),console.log(e)}))},errorInfos=Object(vue__WEBPACK_IMPORTED_MODULE_4__["i"])((function(){return mergeValidateInfo(Object(lodash_es__WEBPACK_IMPORTED_MODULE_5__["a"])(validateInfos))})),visible=Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])(!1),size=Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])("default"),showDrawer=function(e){size.value=e,visible.value=!0,Object(_api_cases__WEBPACK_IMPORTED_MODULE_10__["d"])().then((function(e){data.value=e.data,console.log(state.selectedRowKeys)}))},Close=function(){visible.value=!1},onClose=function(){visible.value=!1},formRef=Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])(),onFinish=function(e){console.log("Received values of form:",e),console.log("modelRef.case_list",modelRef.case_list),Object(_api_cases__WEBPACK_IMPORTED_MODULE_10__["d"])(formState).then((function(e){data.value=e.data,total.value=e.total}))},runplan=function(){axios__WEBPACK_IMPORTED_MODULE_11___default()({method:"post",headers:{Authorization:localStorage.getItem("token")},url:"runtestplan/",data:planid}).then((function(e){200==e.data.code?(count.cases_count=e.data.data.count.cases_count,count.cases_result=e.data.data.count.cases_result,ant_design_vue__WEBPACK_IMPORTED_MODULE_7__["a"].success({content:"运行成功！",duration:5})):ant_design_vue__WEBPACK_IMPORTED_MODULE_7__["a"].success({content:"运行失败！",duration:5}),console.log(e),console.log(e.data.data.result)}))},state=Object(vue__WEBPACK_IMPORTED_MODULE_4__["O"])({selectedRowKeys:[],loading:!1}),hasSelected=Object(vue__WEBPACK_IMPORTED_MODULE_4__["i"])((function(){return state.selectedRowKeys.length>0})),start=function(){state.loading=!0,setTimeout((function(){state.loading=!1,state.selectedRowKeys=[]}),1e3)},onSelectChange=function(e,t){console.log("selectedRowKeys changed: ",e,t),state.selectedRowKeys=e,modelRef.case_list=t},formState=Object(vue__WEBPACK_IMPORTED_MODULE_4__["O"])({}),total=Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])(),onChange=function(e){formState["current"]=e.current,Object(_api_cases__WEBPACK_IMPORTED_MODULE_10__["d"])(formState).then((function(e){data.value=e.data,total.value=e.total}))},options1=Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])([{value:"0",label:"测试环境"},{value:"1",label:"预发布环境"},{value:"2",label:"线上环境"}]),focus=function(){console.log("focus")},handleChange=function(e){console.log("selected ".concat(e))},project=Object(vue_router__WEBPACK_IMPORTED_MODULE_8__["c"])().currentRoute.value.query,optionsProject=Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])([]);return Object(_api_project__WEBPACK_IMPORTED_MODULE_12__["c"])().then((function(e){for(var t=0;t<e.data.length;t++)optionsProject.value.push({value:e.data[t].id,label:e.data[t].name}),project.project_id==e.data[t].id&&(modelRef.project_id=e.data[t].id);console.log(optionsProject.value)})),Object(D_code_GitHub_vue_apitest_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(D_code_GitHub_vue_apitest_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])({formState:formState,data:data,columns:columns,runplan:runplan,activeKey:Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])("1"),labelCol:{span:4},wrapperCol:{span:14},validateInfos:validateInfos,resetFields:resetFields,modelRef:modelRef,onSubmit:onSubmit,errorInfos:errorInfos,value1:Object(vue__WEBPACK_IMPORTED_MODULE_4__["P"])(),visible:visible,size:size,showDrawer:showDrawer,onClose:onClose,formRef:formRef,onFinish:onFinish,Close:Close,count:count,hasSelected:hasSelected},Object(vue__WEBPACK_IMPORTED_MODULE_4__["ab"])(state)),{},{start:start,onSelectChange:onSelectChange,total:total,onChange:onChange,focus:focus,handleChange:handleChange,options1:options1,optionsProject:optionsProject})}})},"0f0c":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n("b775");function o(e,t){return a["a"].request({method:t,url:"globalsvariate/",data:e})}function r(e){return a["a"].request({method:"get",url:"globalsvariate/",params:e})}function c(e){return a["a"].request({method:"delete",url:"globalsvariate/",data:[e]})}},1148:function(e,t,n){"use strict";var a=n("da84"),o=n("5926"),r=n("577e"),c=n("1d80"),_=a.RangeError;e.exports=function(e){var t=r(c(this)),n="",a=o(e);if(a<0||a==1/0)throw _("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},"24d2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n("b775");function o(e,t){return a["a"].request({method:t,url:"project/",data:e})}function r(e){return a["a"].request({method:"get",url:"project/",params:e})}function c(e){return a["a"].request({method:"delete",url:"project/",data:[e]})}},2532:function(e,t,n){"use strict";var a=n("23e7"),o=n("e330"),r=n("5a34"),c=n("1d80"),_=n("577e"),u=n("ab13"),l=o("".indexOf);a({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~l(_(c(this)),_(r(e)),arguments.length>1?arguments[1]:void 0)}})},"2b53":function(e,t,n){},"408a":function(e,t,n){var a=n("e330");e.exports=a(1..valueOf)},"44e7":function(e,t,n){var a=n("861d"),o=n("c6b6"),r=n("b622"),c=r("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==o(e))}},"58ef":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return _}));var a=n("b775");function o(e,t){return a["a"].request({method:t,url:"case/",data:e})}function r(e){return a["a"].request({method:"get",url:"case/",params:e})}function c(e){return a["a"].request({method:"post",url:"case/",data:e})}function _(e){return a["a"].request({method:"delete",url:"case/",data:[e]})}},"5a04":function(e,t,n){"use strict";var a=n("ca54"),o=n("7804"),r=n("60ce"),c=n("e56b"),_=n("f0ce"),u=n("ff51"),l=n("1147"),s="[object String]";function i(e){return"string"==typeof e||!Object(u["a"])(e)&&Object(l["a"])(e)&&Object(_["a"])(e)==s}var d=i;function b(e){var t,n=[];while(!(t=e.next()).done)n.push(t.value);return n}var f=b,O=n("61ee"),p=n("1989"),j=n("2a23"),v=n("b703");function m(e,t){return Object(v["a"])(t,(function(t){return e[t]}))}var E=m,g=n("9a4b");function P(e){return null==e?[]:E(e,Object(g["a"])(e))}var h=P,R="[object Map]",D="[object Set]",C=a["a"]?a["a"].iterator:void 0;function M(e){if(!e)return[];if(Object(c["a"])(e))return d(e)?Object(j["a"])(e):Object(o["a"])(e);if(C&&e[C])return f(e[C]());var t=Object(r["a"])(e),n=t==R?O["a"]:t==D?p["a"]:h;return n(e)}t["a"]=M},"5a34":function(e,t,n){var a=n("da84"),o=n("44e7"),r=a.TypeError;e.exports=function(e){if(o(e))throw r("The method doesn't accept regular expressions");return e}},ab13:function(e,t,n){var a=n("b622"),o=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(a){}}return!1}},b4a8:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n("b775");function o(e,t){return a["a"].request({method:t,url:"testplan/",data:e})}function r(e){return a["a"].request({method:"get",url:"testplan/",params:e})}function c(e){return a["a"].request({method:"delete",url:"testplan/",data:[e]})}},b59d:function(e,t,n){"use strict";n("2b53")},b680:function(e,t,n){"use strict";var a=n("23e7"),o=n("da84"),r=n("e330"),c=n("5926"),_=n("408a"),u=n("1148"),l=n("d039"),s=o.RangeError,i=o.String,d=Math.floor,b=r(u),f=r("".slice),O=r(1..toFixed),p=function(e,t,n){return 0===t?n:t%2===1?p(e,t-1,n*e):p(e*e,t/2,n)},j=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},v=function(e,t,n){var a=-1,o=n;while(++a<6)o+=t*e[a],e[a]=o%1e7,o=d(o/1e7)},m=function(e,t){var n=6,a=0;while(--n>=0)a+=e[n],e[n]=d(a/t),a=a%t*1e7},E=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var a=i(e[t]);n=""===n?a:n+b("0",7-a.length)+a}return n},g=l((function(){return"0.000"!==O(8e-5,3)||"1"!==O(.9,0)||"1.25"!==O(1.255,2)||"1000000000000000128"!==O(0xde0b6b3a7640080,0)}))||!l((function(){O({})}));a({target:"Number",proto:!0,forced:g},{toFixed:function(e){var t,n,a,o,r=_(this),u=c(e),l=[0,0,0,0,0,0],d="",O="0";if(u<0||u>20)throw s("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return i(r);if(r<0&&(d="-",r=-r),r>1e-21)if(t=j(r*p(2,69,1))-69,n=t<0?r*p(2,-t,1):r/p(2,t,1),n*=4503599627370496,t=52-t,t>0){v(l,0,n),a=u;while(a>=7)v(l,1e7,0),a-=7;v(l,p(10,a,1),0),a=t-1;while(a>=23)m(l,1<<23),a-=23;m(l,1<<a),v(l,1,1),m(l,2),O=E(l)}else v(l,0,n),v(l,1<<-t,0),O=E(l)+b("0",u);return u>0?(o=O.length,O=d+(o<=u?"0."+b("0",u-o)+O:f(O,0,o-u)+"."+f(O,o-u))):O=d+O,O}})},b775:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),o=n.n(a),r=n("56cd"),c=n("6c02"),_=o.a.create({baseURL:"https://124.71.4.214:8000/api/",timeout:1e4});_.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var u=function(e){if(e.response){var t=e.response.data,n=localStorage.getItem("token");if(403===e.response.status&&(r["a"].error({message:"Forbidden",description:t.message}),window.location.href="#/login"),401===e.response.status&&(!t.result||!t.result.isLogin)){r["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),n&&window.location.reload();var a=Object(c["c"])();a.push("/login")}}return Promise.reject(e)};_.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=t),e}),u),_.interceptors.response.use((function(e){return e.data}),u),t["a"]=_},c580:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("b680");var a=n("7a23"),o=Object(a["n"])("div",{class:"title"},"测试计划",-1),r={class:"selectEnv",style:{float:"left"}},c={class:"selectEnv",style:{float:"left"}},_=Object(a["p"])("Submit"),u=Object(a["p"])("Reset"),l=Object(a["p"])("添加用例 "),s=Object(a["p"])("Cancel"),i=Object(a["p"])("Submit"),d={class:"SearchCases",style:{"margin-bottom":"10px"}},b=Object(a["p"])("Search"),f=Object(a["p"])("Clear"),O=Object(a["p"])("run"),p=Object(a["n"])("br",null,null,-1),j=Object(a["n"])("br",null,null,-1),v=Object(a["p"])("  "),m={style:{color:"red"}};function E(e,t,n,E,g,P){var h=Object(a["T"])("a-input"),R=Object(a["T"])("a-form-item"),D=Object(a["T"])("a-select"),C=Object(a["T"])("a-button"),M=Object(a["T"])("a-form"),q=Object(a["T"])("a-tab-pane"),w=Object(a["T"])("a-table"),I=Object(a["T"])("a-row"),T=Object(a["T"])("a-col"),y=Object(a["T"])("a-drawer"),K=Object(a["T"])("a-progress"),U=Object(a["T"])("a-tabs");return Object(a["K"])(),Object(a["m"])(a["b"],null,[o,Object(a["q"])(U,{activeKey:e.activeKey,"onUpdate:activeKey":t[8]||(t[8]=function(t){return e.activeKey=t})},{default:Object(a["gb"])((function(){return[Object(a["q"])(q,{key:"1",tab:"基本信息"},{default:Object(a["gb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(M,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(a["gb"])((function(){return[Object(a["q"])(R,{label:"name",required:""},{default:Object(a["gb"])((function(){return[Object(a["q"])(h,{value:e.modelRef.name,"onUpdate:value":t[0]||(t[0]=function(t){return e.modelRef.name=t})},null,8,["value"])]})),_:1}),Object(a["q"])(R,{label:"describe"},{default:Object(a["gb"])((function(){return[Object(a["q"])(h,{value:e.modelRef.describe,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelRef.describe=t})},null,8,["value"])]})),_:1}),Object(a["q"])(R,{label:"env"},{default:Object(a["gb"])((function(){return[Object(a["n"])("div",r,[Object(a["q"])(D,{ref:"select",value:e.modelRef.env,"onUpdate:value":t[2]||(t[2]=function(t){return e.modelRef.env=t}),style:{width:"120px"},options:e.options1,onFocus:e.focus,onChange:e.handleChange},null,8,["value","options","onFocus","onChange"])])]})),_:1}),Object(a["q"])(R,{label:"project"},{default:Object(a["gb"])((function(){return[Object(a["n"])("div",c,[Object(a["q"])(D,{ref:"select",value:e.modelRef.project_id,"onUpdate:value":t[3]||(t[3]=function(t){return e.modelRef.project_id=t}),style:{width:"120px"},options:e.optionsProject},null,8,["value","options"])])]})),_:1}),Object(a["q"])(R,Object(a["y"])({class:"error-infos","wrapper-col":{span:14,offset:4}},e.errorInfos),{default:Object(a["gb"])((function(){return[Object(a["q"])(C,{type:"primary",onClick:Object(a["ib"])(e.onSubmit,["prevent"])},{default:Object(a["gb"])((function(){return[_]})),_:1},8,["onClick"]),Object(a["q"])(C,{style:{"margin-left":"10px"},onClick:e.resetFields},{default:Object(a["gb"])((function(){return[u]})),_:1},8,["onClick"])]})),_:1},16)]})),_:1},8,["label-col","wrapper-col"])])]})),_:1}),Object(a["q"])(q,{key:"2",tab:"添加用例","force-render":""},{default:Object(a["gb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(C,{type:"primary",onClick:t[4]||(t[4]=function(t){return e.showDrawer("large")})},{default:Object(a["gb"])((function(){return[l]})),_:1}),Object(a["q"])(w,{dataSource:e.modelRef.case_list,columns:e.columns,pagination:!1},null,8,["dataSource","columns"]),Object(a["q"])(y,{title:"Basic Drawer",size:e.size,visible:e.visible,onClose:e.onClose},{extra:Object(a["gb"])((function(){return[Object(a["q"])(C,{style:{"margin-right":"8px"},onClick:e.Close},{default:Object(a["gb"])((function(){return[s]})),_:1},8,["onClick"]),Object(a["q"])(C,{type:"primary",onClick:e.onClose},{default:Object(a["gb"])((function(){return[i]})),_:1},8,["onClick"])]})),default:Object(a["gb"])((function(){return[Object(a["n"])("div",null,[Object(a["n"])("div",d,[Object(a["q"])(M,{ref:"formRef",name:"advanced_search",class:"ant-advanced-search-form",model:e.formState,onFinish:e.onFinish},{default:Object(a["gb"])((function(){return[Object(a["q"])(I,{gutter:24,style:{float:"left",height:"32px"}},{default:Object(a["gb"])((function(){return[Object(a["q"])(R,{name:"name",label:"name",rules:[{message:"input something"}]},{default:Object(a["gb"])((function(){return[Object(a["q"])(h,{value:e.formState["name"],"onUpdate:value":t[5]||(t[5]=function(t){return e.formState["name"]=t}),placeholder:"placeholder"},null,8,["value"])]})),_:1}),Object(a["q"])(R,{style:{"margin-left":"20px"},name:"project",label:"project",rules:[{message:"input something"}]},{default:Object(a["gb"])((function(){return[Object(a["q"])(h,{value:e.formState["project_id"],"onUpdate:value":t[6]||(t[6]=function(t){return e.formState["project_id"]=t}),placeholder:"placeholder"},null,8,["value"])]})),_:1})]})),_:1}),Object(a["q"])(I,null,{default:Object(a["gb"])((function(){return[Object(a["q"])(T,{span:24,style:{"text-align":"right"}},{default:Object(a["gb"])((function(){return[Object(a["q"])(C,{type:"primary","html-type":"submit"},{default:Object(a["gb"])((function(){return[b]})),_:1}),Object(a["q"])(C,{style:{margin:"0 8px"},onClick:t[7]||(t[7]=function(){return e.formRef.resetFields()})},{default:Object(a["gb"])((function(){return[f]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","onFinish"])]),Object(a["q"])(w,{"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},"row-key":function(e){return e.id},columns:e.columns,"data-source":e.data,pagination:!1,onChange:e.onChange},null,8,["row-selection","row-key","columns","data-source","onChange"])])]})),_:1},8,["size","visible","onClose"])])]})),_:1}),Object(a["q"])(q,{key:"3",tab:"测试报告"},{format:Object(a["gb"])((function(e){return[Object(a["n"])("span",m,Object(a["X"])(e),1)]})),default:Object(a["gb"])((function(){return[Object(a["q"])(C,{type:"primary",onClick:e.runplan},{default:Object(a["gb"])((function(){return[O]})),_:1},8,["onClick"]),p,j,Object(a["n"])("div",null," 运行用例数："+Object(a["X"])(e.count.cases_count)+"   失败用例数："+Object(a["X"])(e.count.cases_result),1),Object(a["q"])(K,{type:"circle",percent:(e.count.cases_result/e.count.cases_count*100).toFixed(2),status:"exception",format:function(e){return"".concat(e," %")}},null,8,["percent","format"]),v,Object(a["q"])(K,{type:"circle",percent:100-(e.count.cases_result/e.count.cases_count*100).toFixed(2),format:function(e){return"".concat(e," %")}},null,8,["percent","format"])]})),_:1})]})),_:1},8,["activeKey"])],64)}var g=n("0a9a"),P=n("6b0d"),h=n.n(P);const R=h()(g["a"],[["render",E]]);t["default"]=R},caad:function(e,t,n){"use strict";var a=n("23e7"),o=n("4d64").includes,r=n("44d2");a({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},dfa2:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"selectEnv",style:{float:"left"}},r={class:"selectEnv",style:{float:"left"}},c=Object(a["p"])("Create"),_=Object(a["p"])("Reset");function u(e,t,n,u,l,s){var i=Object(a["T"])("a-input"),d=Object(a["T"])("a-form-item"),b=Object(a["T"])("a-select"),f=Object(a["T"])("a-button"),O=Object(a["T"])("a-form");return Object(a["K"])(),Object(a["k"])(O,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(a["gb"])((function(){return[Object(a["q"])(d,{label:"变量名",required:""},{default:Object(a["gb"])((function(){return[Object(a["q"])(i,{value:e.modelRef.key,"onUpdate:value":t[0]||(t[0]=function(t){return e.modelRef.key=t})},null,8,["value"])]})),_:1}),Object(a["q"])(d,{label:"变量值"},{default:Object(a["gb"])((function(){return[Object(a["q"])(i,{value:e.modelRef.value,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelRef.value=t})},null,8,["value"])]})),_:1}),Object(a["q"])(d,{label:"环境",required:""},{default:Object(a["gb"])((function(){return[Object(a["n"])("div",o,[Object(a["q"])(b,{ref:"select",value:e.modelRef.env,"onUpdate:value":t[2]||(t[2]=function(t){return e.modelRef.env=t}),style:{width:"120px"},options:e.options1,onFocus:e.focus,onChange:e.handleChange},null,8,["value","options","onFocus","onChange"])])]})),_:1}),Object(a["q"])(d,{label:"项目",required:""},{default:Object(a["gb"])((function(){return[Object(a["n"])("div",r,[Object(a["q"])(b,{ref:"select",value:e.modelRef.project_id,"onUpdate:value":t[3]||(t[3]=function(t){return e.modelRef.project_id=t}),style:{width:"120px"},options:e.optionsProject,onFocus:e.focus,onChange:e.handleChange},null,8,["value","options","onFocus","onChange"])])]})),_:1}),Object(a["q"])(d,Object(a["y"])({class:"error-infos","wrapper-col":{span:14,offset:4}},e.errorInfos),{default:Object(a["gb"])((function(){return[Object(a["q"])(f,{type:"primary",onClick:Object(a["ib"])(e.onSubmit,["prevent"])},{default:Object(a["gb"])((function(){return[c]})),_:1},8,["onClick"]),Object(a["q"])(f,{style:{"margin-left":"10px"},onClick:e.resetFields},{default:Object(a["gb"])((function(){return[_]})),_:1},8,["onClick"])]})),_:1},16)]})),_:1},8,["label-col","wrapper-col"])}n("b0c0");var l=n("5a04"),s=n("3af3"),i=n("f64c"),d=n("6c02"),b=n("0f0c"),f=n("24d2"),O=s["a"].useForm,p=Object(a["r"])({setup:function(){var e=Object(d["c"])().currentRoute.value.query;void 0!=Object(d["c"])().currentRoute.value.query.id&&Object(b["c"])(Object(d["c"])().currentRoute.value.query).then((function(e){console.log(e),t.key=e.data[0].key,t.value=e.data[0].value,t.env=e.data[0].env,t.project_id=e.data[0].project,t.id=e.data[0].id}));var t=Object(a["O"])({key:"",value:"",env:"0",project_id:""}),n=Object(a["O"])({key:[{required:!0,message:"Please input key"}],value:[{message:"Please input value"}],start_time:[{required:!0,message:"Please input start_time"}],env:[{required:!0,message:"Please input env"}]}),o=O(t,n),r=o.resetFields,c=o.validate,_=o.validateInfos,u=o.mergeValidateInfo,s=function(){c().then((function(){var n;console.log(Object(a["Y"])(t)),n=void 0==e.id?"post":"put",Object(b["a"])(t,n).then((function(e){i["a"].success({content:e.msg,duration:5}),200==e.code&&(window.location.href="/variate_list"),console.log(e)}))})).catch((function(e){console.log("error",e)}))},p=Object(a["P"])([{value:"0",label:"测试环境"},{value:"1",label:"预发布环境"},{value:"2",label:"线上环境"}]),j=function(){console.log("focus")},v=function(e){console.log("selected ".concat(e))},m=Object(a["i"])((function(){return u(Object(l["a"])(_))})),E=Object(a["P"])([]);return Object(f["c"])().then((function(n){for(var a=0;a<n.data.length;a++)E.value.push({value:n.data[a].id,label:n.data[a].name}),e.project_id==n.data[a].id&&(t.project_id=n.data[a].id);console.log(E.value)})),{labelCol:{span:4},wrapperCol:{span:14},validateInfos:_,resetFields:r,modelRef:t,onSubmit:s,errorInfos:m,value1:Object(a["P"])(),focus:j,handleChange:v,options1:p,optionsProject:E}}}),j=(n("b59d"),n("6b0d")),v=n.n(j);const m=v()(p,[["render",u],["__scopeId","data-v-71aacb28"]]);t["default"]=m}}]);
//# sourceMappingURL=create_variate.7bd3f69f.js.map