(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create_variate"],{"04d1":function(e,t,n){var a=n("342f"),c=a.match(/firefox\/(\d+)/i);e.exports=!!c&&+c[1]},"0f0c":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n("b775");function c(e,t){return a["a"].request({method:t,url:"globalsvariate/",data:e})}function r(e){return a["a"].request({method:"get",url:"globalsvariate/",params:e})}function o(e){return a["a"].request({method:"delete",url:"globalsvariate/",data:[e]})}},1148:function(e,t,n){"use strict";var a=n("da84"),c=n("5926"),r=n("577e"),o=n("1d80"),u=a.RangeError;e.exports=function(e){var t=r(o(this)),n="",a=c(e);if(a<0||a==1/0)throw u("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},"166b":function(e,t,n){"use strict";var a=n("7a23"),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},r=c,o=n("b3f0");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e,t){var n=u({},e,t.attrs);return a["q"](o["a"],a["y"](n,{icon:r}),null)};i.displayName="MenuOutlined",i.inheritAttrs=!1;t["a"]=i},"24d2":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n("b775");function c(e,t){return a["a"].request({method:t,url:"project/",data:e})}function r(e){return a["a"].request({method:"get",url:"project/",params:e})}function o(e){return a["a"].request({method:"delete",url:"project/",data:[e]})}},2532:function(e,t,n){"use strict";var a=n("23e7"),c=n("e330"),r=n("5a34"),o=n("1d80"),u=n("577e"),l=n("ab13"),i=c("".indexOf);a({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~i(u(o(this)),u(r(e)),arguments.length>1?arguments[1]:void 0)}})},3553:function(e,t,n){"use strict";n("f90b")},"408a":function(e,t,n){var a=n("e330");e.exports=a(1..valueOf)},"44e7":function(e,t,n){var a=n("861d"),c=n("c6b6"),r=n("b622"),o=r("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==c(e))}},"4e82":function(e,t,n){"use strict";var a=n("23e7"),c=n("e330"),r=n("59ed"),o=n("7b0b"),u=n("07fa"),l=n("577e"),i=n("d039"),s=n("addb"),b=n("a640"),d=n("04d1"),f=n("d998"),j=n("2d00"),O=n("512c"),v=[],p=c(v.sort),h=c(v.push),m=i((function(){v.sort(void 0)})),_=i((function(){v.sort(null)})),y=b("sort"),g=!i((function(){if(j)return j<70;if(!(d&&d>3)){if(f)return!0;if(O)return O<603;var e,t,n,a,c="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(a=0;a<47;a++)v.push({k:t+a,v:n})}for(v.sort((function(e,t){return t.v-e.v})),a=0;a<v.length;a++)t=v[a].k.charAt(0),c.charAt(c.length-1)!==t&&(c+=t);return"DGBEFHACIJK"!==c}})),q=m||!_||!y||!g,w=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:l(t)>l(n)?1:-1}};a({target:"Array",proto:!0,forced:q},{sort:function(e){void 0!==e&&r(e);var t=o(this);if(g)return void 0===e?p(t):p(t,e);var n,a,c=[],l=u(t);for(a=0;a<l;a++)a in t&&h(c,t[a]);s(c,w(e)),n=c.length,a=0;while(a<n)t[a]=c[a++];while(a<l)delete t[a++];return t}})},"512c":function(e,t,n){var a=n("342f"),c=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!c&&+c[1]},"58ef":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var a=n("b775");function c(e,t){return a["a"].request({method:t,url:"case/",data:e})}function r(e){return a["a"].request({method:"get",url:"case/",params:e})}function o(e){return a["a"].request({method:"post",url:"case/",data:e})}function u(e){return a["a"].request({method:"delete",url:"case/",data:[e]})}},"5a04":function(e,t,n){"use strict";var a=n("ca54"),c=n("7804"),r=n("60ce"),o=n("e56b"),u=n("f0ce"),l=n("ff51"),i=n("1147"),s="[object String]";function b(e){return"string"==typeof e||!Object(l["a"])(e)&&Object(i["a"])(e)&&Object(u["a"])(e)==s}var d=b;function f(e){var t,n=[];while(!(t=e.next()).done)n.push(t.value);return n}var j=f,O=n("61ee"),v=n("1989"),p=n("2a23"),h=n("b703");function m(e,t){return Object(h["a"])(t,(function(t){return e[t]}))}var _=m,y=n("9a4b");function g(e){return null==e?[]:_(e,Object(y["a"])(e))}var q=g,w="[object Map]",k="[object Set]",x=a["a"]?a["a"].iterator:void 0;function C(e){if(!e)return[];if(Object(o["a"])(e))return d(e)?Object(p["a"])(e):Object(c["a"])(e);if(x&&e[x])return j(e[x]());var t=Object(r["a"])(e),n=t==w?O["a"]:t==k?v["a"]:q;return n(e)}t["a"]=C},"5a34":function(e,t,n){var a=n("da84"),c=n("44e7"),r=a.TypeError;e.exports=function(e){if(c(e))throw r("The method doesn't accept regular expressions");return e}},"6f40":function(e,t,n){},"8fc6":function(e,t,n){"use strict";var a=n("7a23"),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},r=c,o=n("b3f0");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e,t){var n=u({},e,t.attrs);return a["q"](o["a"],a["y"](n,{icon:r}),null)};i.displayName="MinusCircleOutlined",i.inheritAttrs=!1;t["a"]=i},a434:function(e,t,n){"use strict";var a=n("23e7"),c=n("da84"),r=n("23cb"),o=n("5926"),u=n("07fa"),l=n("7b0b"),i=n("65f0"),s=n("8418"),b=n("1dde"),d=b("splice"),f=c.TypeError,j=Math.max,O=Math.min,v=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,a,c,b,d,h,m=l(this),_=u(m),y=r(e,_),g=arguments.length;if(0===g?n=a=0:1===g?(n=0,a=_-y):(n=g-2,a=O(j(o(t),0),_-y)),_+n-a>v)throw f(p);for(c=i(m,a),b=0;b<a;b++)d=y+b,d in m&&s(c,b,m[d]);if(c.length=a,n<a){for(b=y;b<_-a;b++)d=b+a,h=b+n,d in m?m[h]=m[d]:delete m[h];for(b=_;b>_-a+n;b--)delete m[b-1]}else if(n>a)for(b=_-a;b>y;b--)d=b+a-1,h=b+n-1,d in m?m[h]=m[d]:delete m[h];for(b=0;b<n;b++)m[b+y]=arguments[b+2];return m.length=_-a+n,c}})},ab13:function(e,t,n){var a=n("b622"),c=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(a){}}return!1}},addb:function(e,t,n){var a=n("4dae"),c=Math.floor,r=function(e,t){var n=e.length,l=c(n/2);return n<8?o(e,t):u(e,r(a(e,0,l),t),r(a(e,l),t),t)},o=function(e,t){var n,a,c=e.length,r=1;while(r<c){a=r,n=e[r];while(a&&t(e[a-1],n)>0)e[a]=e[--a];a!==r++&&(e[a]=n)}return e},u=function(e,t,n,a){var c=t.length,r=n.length,o=0,u=0;while(o<c||u<r)e[o+u]=o<c&&u<r?a(t[o],n[u])<=0?t[o++]:n[u++]:o<c?t[o++]:n[u++];return e};e.exports=r},b4a8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n("b775");function c(e,t){return a["a"].request({method:t,url:"testplan/",data:e})}function r(e){return a["a"].request({method:"get",url:"testplan/",params:e})}function o(e){return a["a"].request({method:"delete",url:"testplan/",data:[e]})}},b680:function(e,t,n){"use strict";var a=n("23e7"),c=n("da84"),r=n("e330"),o=n("5926"),u=n("408a"),l=n("1148"),i=n("d039"),s=c.RangeError,b=c.String,d=Math.floor,f=r(l),j=r("".slice),O=r(1..toFixed),v=function(e,t,n){return 0===t?n:t%2===1?v(e,t-1,n*e):v(e*e,t/2,n)},p=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},h=function(e,t,n){var a=-1,c=n;while(++a<6)c+=t*e[a],e[a]=c%1e7,c=d(c/1e7)},m=function(e,t){var n=6,a=0;while(--n>=0)a+=e[n],e[n]=d(a/t),a=a%t*1e7},_=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var a=b(e[t]);n=""===n?a:n+f("0",7-a.length)+a}return n},y=i((function(){return"0.000"!==O(8e-5,3)||"1"!==O(.9,0)||"1.25"!==O(1.255,2)||"1000000000000000128"!==O(0xde0b6b3a7640080,0)}))||!i((function(){O({})}));a({target:"Number",proto:!0,forced:y},{toFixed:function(e){var t,n,a,c,r=u(this),l=o(e),i=[0,0,0,0,0,0],d="",O="0";if(l<0||l>20)throw s("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return b(r);if(r<0&&(d="-",r=-r),r>1e-21)if(t=p(r*v(2,69,1))-69,n=t<0?r*v(2,-t,1):r/v(2,t,1),n*=4503599627370496,t=52-t,t>0){h(i,0,n),a=l;while(a>=7)h(i,1e7,0),a-=7;h(i,v(10,a,1),0),a=t-1;while(a>=23)m(i,1<<23),a-=23;m(i,1<<a),h(i,1,1),m(i,2),O=_(i)}else h(i,0,n),h(i,1<<-t,0),O=_(i)+f("0",l);return l>0?(c=O.length,O=d+(c<=l?"0."+f("0",l-c)+O:j(O,0,c-l)+"."+j(O,c-l))):O=d+O,O}})},c580:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("b680");var a=n("7a23"),c=Object(a["n"])("div",{class:"title"},"测试计划",-1),r={class:"selectEnv",style:{float:"left"}},o={class:"selectEnv",style:{float:"left"}},u=Object(a["p"])("Submit"),l=Object(a["p"])("Reset "),i=Object(a["p"])("添加用例 "),s=["onClick"],b=["onClick"],d={style:{height:"300px"}},f=Object(a["p"])("response"),j=Object(a["p"])("parameter"),O=Object(a["p"])("data"),v=Object(a["p"])("无"),p=Object(a["p"])("jmespath"),h=Object(a["p"])("正则"),m=Object(a["p"])("json提取"),_=Object(a["p"])("code提取"),y={key:0},g=Object(a["p"])("查看/编辑"),q=Object(a["p"])(" 响应数据：response.json() 全局变量设置：set_global_svariate(dict) 局部变量设置：self.set_variate(key,value) "),w={key:1,class:"extractVariable"},k=Object(a["p"])(" 添加变量 "),x=Object(a["n"])("span",null," asserts ",-1),C=Object(a["p"])("response"),R=Object(a["p"])("响应状态"),U=Object(a["p"])("无"),K=Object(a["p"])(" 添加断言 "),F=Object(a["p"])("Cancel"),S=Object(a["p"])("Submit"),P={class:"SearchCases",style:{"margin-bottom":"10px"}},M={class:"selectEnv",style:{float:"left"}},I=Object(a["p"])("Search "),V=Object(a["p"])("Clear "),Q=Object(a["p"])("run"),A=Object(a["n"])("br",null,null,-1),E=Object(a["n"])("br",null,null,-1),D=Object(a["p"])("  "),z={style:{color:"red"}};function N(e,t,n,N,H,T){var B=Object(a["U"])("a-input"),Y=Object(a["U"])("a-form-item"),J=Object(a["U"])("a-select"),W=Object(a["U"])("a-textarea"),G=Object(a["U"])("a-button"),Z=Object(a["U"])("a-form"),L=Object(a["U"])("a-tab-pane"),X=Object(a["U"])("router-link"),$=Object(a["U"])("MenuOutlined"),ee=Object(a["U"])("a-table"),te=Object(a["U"])("a-select-option"),ne=Object(a["U"])("MyCodemirror"),ae=Object(a["U"])("a-modal"),ce=Object(a["U"])("MinusCircleOutlined"),re=Object(a["U"])("a-space"),oe=Object(a["U"])("PlusOutlined"),ue=Object(a["U"])("a-tabs"),le=Object(a["U"])("a-row"),ie=Object(a["U"])("a-col"),se=Object(a["U"])("a-drawer"),be=Object(a["U"])("a-progress");return Object(a["K"])(),Object(a["m"])(a["b"],null,[c,Object(a["q"])(ue,{activeKey:e.activeKey,"onUpdate:activeKey":t[19]||(t[19]=function(t){return e.activeKey=t})},{default:Object(a["hb"])((function(){return[Object(a["q"])(L,{key:"1",tab:"基本信息"},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(Z,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(a["hb"])((function(){return[Object(a["q"])(Y,{label:"name",required:""},{default:Object(a["hb"])((function(){return[Object(a["q"])(B,{value:e.modelRef.name,"onUpdate:value":t[0]||(t[0]=function(t){return e.modelRef.name=t})},null,8,["value"])]})),_:1}),Object(a["q"])(Y,{label:"describe"},{default:Object(a["hb"])((function(){return[Object(a["q"])(B,{value:e.modelRef.describe,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelRef.describe=t})},null,8,["value"])]})),_:1}),Object(a["q"])(Y,{label:"env"},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",r,[Object(a["q"])(J,{ref:"select",value:e.modelRef.env,"onUpdate:value":t[2]||(t[2]=function(t){return e.modelRef.env=t}),style:{width:"120px"},options:e.options1,onFocus:e.focus,onChange:e.handleChange},null,8,["value","options","onFocus","onChange"])])]})),_:1}),Object(a["q"])(Y,{label:"project"},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",o,[Object(a["q"])(J,{ref:"select",value:e.modelRef.project_id,"onUpdate:value":t[3]||(t[3]=function(t){return e.modelRef.project_id=t}),style:{width:"120px"},options:e.optionsProject},null,8,["value","options"])])]})),_:1}),Object(a["q"])(Y,{label:"通知邮件"},{default:Object(a["hb"])((function(){return[Object(a["q"])(B,{value:e.modelRef.email,"onUpdate:value":t[4]||(t[4]=function(t){return e.modelRef.email=t})},null,8,["value"])]})),_:1}),Object(a["q"])(Y,{label:"用户变量"},{default:Object(a["hb"])((function(){return[Object(a["q"])(W,{value:e.modelRef.user_variables,"onUpdate:value":t[5]||(t[5]=function(t){return e.modelRef.user_variables=t}),style:{"margin-top":"0px","margin-bottom":"0px",height:"150px"}},null,8,["value"])]})),_:1}),Object(a["q"])(Y,Object(a["y"])({class:"error-infos","wrapper-col":{span:14,offset:4}},e.errorInfos),{default:Object(a["hb"])((function(){return[Object(a["q"])(G,{type:"primary",onClick:Object(a["jb"])(e.onSubmit,["prevent"])},{default:Object(a["hb"])((function(){return[u]})),_:1},8,["onClick"]),Object(a["q"])(G,{style:{"margin-left":"10px"},onClick:e.resetFields},{default:Object(a["hb"])((function(){return[l]})),_:1},8,["onClick"])]})),_:1},16)]})),_:1},8,["label-col","wrapper-col"])])]})),_:1}),Object(a["q"])(L,{key:"2",tab:"添加用例","force-render":""},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(G,{type:"primary",onClick:t[6]||(t[6]=function(t){return e.showDrawer("large")})},{default:Object(a["hb"])((function(){return[i]})),_:1}),Object(a["q"])(ee,{dataSource:e.modelRef.case_list,columns:e.columns,pagination:!1,customRow:e.customRow},{bodyCell:Object(a["hb"])((function(t){var n=t.record,c=t.column,r=t.text;return["name"===c.dataIndex?(Object(a["K"])(),Object(a["k"])(X,{key:0,to:{path:"/apiDetail",query:{id:n.id}}},{default:Object(a["hb"])((function(){return[Object(a["n"])("a",null,Object(a["Y"])(r),1)]})),_:2},1032,["to"])):Object(a["l"])("",!0),"operation"===c.dataIndex?(Object(a["K"])(),Object(a["m"])(a["b"],{key:1},[Object(a["n"])("a",{onClick:function(t){return e.deletes(n)}},"Delete",8,s),Object(a["n"])("a",{onClick:function(t){return e.showModal(n)},type:"primary",style:{"padding-right":"15px"}}," | 编辑",8,b),Object(a["q"])($)],64)):Object(a["l"])("",!0)]})),_:1},8,["dataSource","columns","customRow"]),Object(a["n"])("div",null,[Object(a["q"])(ae,{"wrap-class-name":"full-modal",visible:e.visible2.state,"onUpdate:visible":t[14]||(t[14]=function(t){return e.visible2.state=t}),title:e.detail.name,width:"680px",onOk:t[15]||(t[15]=function(t){return e.handleOk2(e.record)})},{default:Object(a["hb"])((function(){return[Object(a["q"])(ue,{activeKey:e.activeKey2,"onUpdate:activeKey":t[13]||(t[13]=function(t){return e.activeKey2=t}),style:{padding:"4px"}},{default:Object(a["hb"])((function(){return[Object(a["q"])(L,{key:"4",tab:"data"},{default:Object(a["hb"])((function(){return[Object(a["q"])(W,{value:e.detail.data,"onUpdate:value":t[7]||(t[7]=function(t){return e.detail.data=t}),style:{"margin-top":"0px","margin-bottom":"0px",height:"300px"}},null,8,["value"])]})),_:1}),Object(a["q"])(L,{key:"5",tab:"header","force-render":""},{default:Object(a["hb"])((function(){return[Object(a["q"])(W,{value:e.detail.header,"onUpdate:value":t[8]||(t[8]=function(t){return e.detail.header=t}),style:{"margin-top":"0px","margin-bottom":"0px",height:"300px"}},null,8,["value"])]})),_:1}),Object(a["q"])(L,{key:"6",tab:"parameter"},{default:Object(a["hb"])((function(){return[Object(a["q"])(W,{value:e.detail.parameter,"onUpdate:value":t[9]||(t[9]=function(t){return e.detail.parameter=t}),style:{"margin-top":"0px","margin-bottom":"0px",height:"300px"}},null,8,["value"])]})),_:1}),Object(a["q"])(L,{key:"7",tab:"变量提取"},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",d,[Object(a["q"])(Z,{ref:"formRef",name:"dynamic_form_nest_item",model:e.modelRef.case_list,onFinish:e.onFinish},{default:Object(a["hb"])((function(){return[(Object(a["K"])(!0),Object(a["m"])(a["b"],null,Object(a["S"])(e.detail.variable,(function(n,c){return Object(a["K"])(),Object(a["k"])(re,{key:n.id,style:{display:"flex","margin-bottom":"8px"},align:"baseline"},{default:Object(a["hb"])((function(){return[Object(a["q"])(J,{ref_for:!0,ref:"select",value:n.mold,"onUpdate:value":function(e){return n.mold=e},style:{width:"100px"},onFocus:e.focus,placeholder:"提取类型"},{default:Object(a["hb"])((function(){return[Object(a["q"])(te,{value:"response"},{default:Object(a["hb"])((function(){return[f]})),_:1}),Object(a["q"])(te,{value:"parameter"},{default:Object(a["hb"])((function(){return[j]})),_:1}),Object(a["q"])(te,{value:"data"},{default:Object(a["hb"])((function(){return[O]})),_:1}),Object(a["q"])(te,{value:"None"},{default:Object(a["hb"])((function(){return[v]})),_:1})]})),_:2},1032,["value","onUpdate:value","onFocus"]),Object(a["q"])(J,{ref_for:!0,ref:"select",value:n.type,"onUpdate:value":function(e){return n.type=e},style:{width:"100px"},onFocus:e.focus,placeholder:"提取方式"},{default:Object(a["hb"])((function(){return[Object(a["q"])(te,{value:"jmespath"},{default:Object(a["hb"])((function(){return[p]})),_:1}),Object(a["q"])(te,{value:"re"},{default:Object(a["hb"])((function(){return[h]})),_:1}),Object(a["q"])(te,{value:"json"},{default:Object(a["hb"])((function(){return[m]})),_:1}),Object(a["q"])(te,{value:"code"},{default:Object(a["hb"])((function(){return[_]})),_:1})]})),_:2},1032,["value","onUpdate:value","onFocus"]),"code"===n.type?(Object(a["K"])(),Object(a["m"])("div",y,[Object(a["n"])("div",null,[Object(a["q"])(G,{type:"primary",onClick:function(t){return e.caseVariableShowModal(n)}},{default:Object(a["hb"])((function(){return[g]})),_:2},1032,["onClick"]),Object(a["q"])(ae,{visible:e.caseVisible,"onUpdate:visible":t[11]||(t[11]=function(t){return e.caseVisible=t}),style:{width:"50%"},title:"code",onOk:function(t){return e.caseVariableHandleOk(c)}},{default:Object(a["hb"])((function(){return[Object(a["q"])(ne,{value:e.caseVariableCode.value,"onUpdate:value":t[10]||(t[10]=function(t){return e.caseVariableCode.value=t}),style:{height:"200px"}},null,8,["value"]),q]})),_:2},1032,["visible","onOk"])])])):(Object(a["K"])(),Object(a["m"])("div",w,[Object(a["q"])(Y,{class:"item",name:["cases",c,"value"],rules:{message:"Missing value"}},{default:Object(a["hb"])((function(){return[Object(a["q"])(B,{value:n.value,"onUpdate:value":function(e){return n.value=e},placeholder:"公式"},null,8,["value","onUpdate:value"])]})),_:2},1032,["name"]),Object(a["q"])(Y,{class:"item",name:["cases",c,"name"],rules:{message:"Missing  name"}},{default:Object(a["hb"])((function(){return[Object(a["q"])(B,{value:n.name,"onUpdate:value":function(e){return n.name=e},placeholder:"变量名称"},null,8,["value","onUpdate:value"])]})),_:2},1032,["name"])])),Object(a["q"])(ce,{onClick:function(t){return e.removeVariable(e.detail.variable,n)}},null,8,["onClick"])]})),_:2},1024)})),128)),Object(a["q"])(Y,null,{default:Object(a["hb"])((function(){return[Object(a["q"])(G,{type:"dashed",block:"",onClick:t[12]||(t[12]=function(t){return e.addVariable(e.detail)})},{default:Object(a["hb"])((function(){return[Object(a["q"])(oe),k]})),_:1})]})),_:1})]})),_:1},8,["model","onFinish"])])]})),_:1}),Object(a["q"])(L,{key:"8"},{tab:Object(a["hb"])((function(){return[x]})),default:Object(a["hb"])((function(){return[Object(a["q"])(Z,{ref:"formRef",name:"dynamic_form_nest_item",onFinish:e.onFinish},{default:Object(a["hb"])((function(){return[(Object(a["K"])(!0),Object(a["m"])(a["b"],null,Object(a["S"])(e.detail.asserts,(function(t){return Object(a["K"])(),Object(a["k"])(re,{key:t.id,style:{display:"flex","margin-bottom":"8px"},align:"baseline"},{default:Object(a["hb"])((function(){return[Object(a["q"])(J,{ref_for:!0,ref:"select",value:t.mold,"onUpdate:value":function(e){return t.mold=e},style:{width:"120px"},onFocus:e.focus,placeholder:"断言类型"},{default:Object(a["hb"])((function(){return[Object(a["q"])(te,{value:"response"},{default:Object(a["hb"])((function(){return[C]})),_:1}),Object(a["q"])(te,{value:"Status"},{default:Object(a["hb"])((function(){return[R]})),_:1}),Object(a["q"])(te,{value:"None"},{default:Object(a["hb"])((function(){return[U]})),_:1})]})),_:2},1032,["value","onUpdate:value","onFocus"]),Object(a["q"])(Y,null,{default:Object(a["hb"])((function(){return["response"==t.mold?(Object(a["K"])(),Object(a["k"])(B,{key:0,value:t.value,"onUpdate:value":function(e){return t.value=e},placeholder:"请填写断言json"},null,8,["value","onUpdate:value"])):(Object(a["K"])(),Object(a["k"])(B,{key:1,value:t.value,"onUpdate:value":function(e){return t.value=e},placeholder:"请填写响应状态码"},null,8,["value","onUpdate:value"]))]})),_:2},1024),Object(a["q"])(ce,{onClick:function(n){return e.removeAssert(t)}},null,8,["onClick"])]})),_:2},1024)})),128)),Object(a["q"])(Y,null,{default:Object(a["hb"])((function(){return[Object(a["q"])(G,{type:"dashed",block:"",onClick:e.addAssert},{default:Object(a["hb"])((function(){return[Object(a["q"])(oe),K]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["onFinish"])]})),_:1})]})),_:1},8,["activeKey"])]})),_:1},8,["visible","title"])]),Object(a["q"])(se,{title:"Basic Drawer",size:e.size,visible:e.visible,onClose:e.onClose},{extra:Object(a["hb"])((function(){return[Object(a["q"])(G,{style:{"margin-right":"8px"},onClick:e.Close},{default:Object(a["hb"])((function(){return[F]})),_:1},8,["onClick"]),Object(a["q"])(G,{type:"primary",onClick:e.onClose},{default:Object(a["hb"])((function(){return[S]})),_:1},8,["onClick"])]})),default:Object(a["hb"])((function(){return[Object(a["n"])("div",null,[Object(a["n"])("div",P,[Object(a["q"])(Z,{ref:"formRef",name:"advanced_search",class:"ant-advanced-search-form",model:e.formState,onFinish:e.onFinish},{default:Object(a["hb"])((function(){return[Object(a["q"])(le,{gutter:24,style:{float:"left",height:"32px"}},{default:Object(a["hb"])((function(){return[Object(a["q"])(Y,{name:"name",label:"name",rules:[{message:"input something"}]},{default:Object(a["hb"])((function(){return[Object(a["q"])(B,{value:e.formState["name"],"onUpdate:value":t[16]||(t[16]=function(t){return e.formState["name"]=t}),placeholder:"placeholder"},null,8,["value"])]})),_:1}),Object(a["q"])(Y,{label:"project"},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",M,[Object(a["q"])(J,{ref:"select",value:e.formState["project_id"],"onUpdate:value":t[17]||(t[17]=function(t){return e.formState["project_id"]=t}),style:{width:"120px"},options:e.optionsProject},null,8,["value","options"])])]})),_:1})]})),_:1}),Object(a["q"])(le,null,{default:Object(a["hb"])((function(){return[Object(a["q"])(ie,{span:24,style:{"text-align":"right"}},{default:Object(a["hb"])((function(){return[Object(a["q"])(G,{type:"primary","html-type":"submit"},{default:Object(a["hb"])((function(){return[I]})),_:1}),Object(a["q"])(G,{style:{margin:"0 8px"},onClick:t[18]||(t[18]=function(){return e.formRef.resetFields()})},{default:Object(a["hb"])((function(){return[V]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","onFinish"])]),Object(a["q"])(ee,{"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,getCheckboxProps:e.getCheckboxProps},"row-key":function(e){return e.id},columns:e.columns,"data-source":e.data,pagination:!1},null,8,["row-selection","row-key","columns","data-source"])])]})),_:1},8,["size","visible","onClose"])])]})),_:1}),Object(a["q"])(L,{key:"3",tab:"测试报告"},{format:Object(a["hb"])((function(e){return[Object(a["n"])("span",z,Object(a["Y"])(e),1)]})),default:Object(a["hb"])((function(){return[Object(a["q"])(G,{type:"primary",onClick:e.runplan},{default:Object(a["hb"])((function(){return[Q]})),_:1},8,["onClick"]),A,E,Object(a["n"])("div",null," 运行用例数："+Object(a["Y"])(e.count.cases_count)+"   失败用例数："+Object(a["Y"])(e.count.cases_false),1),Object(a["q"])(be,{type:"circle",percent:(e.count.cases_false/e.count.cases_count*100).toFixed(2),status:"exception",format:function(e){return"".concat(e," %")}},null,8,["percent","format"]),D,Object(a["q"])(be,{type:"circle",percent:100-(e.count.cases_false/e.count.cases_count*100).toFixed(2),format:function(e){return"".concat(e," %")}},null,8,["percent","format"])]})),_:1})]})),_:1},8,["activeKey"])],64)}var H=n("5530"),T=n("2909"),B=(n("4e82"),n("4de4"),n("d3b7"),n("a434"),n("caad"),n("2532"),n("5a04")),Y=n("3af3"),J=n("f64c"),W=n("6c02"),G=n("b4a8"),Z=n("58ef"),L=n("bc3a"),X=n.n(L),$=n("24d2"),ee=n("8fc6"),te=n("166b"),ne=n("2778"),ae=[{title:"Name",dataIndex:"name"},{title:"project",dataIndex:"project__name"},{title:"module",dataIndex:"module"},{title:"操作",dataIndex:"operation"}],ce=Y["a"].useForm,re=Object(a["r"])({components:{MinusCircleOutlined:ee["a"],MenuOutlined:te["a"],MyCodemirror:ne["a"]},setup:function(){var e=Object(W["d"])(),t=Object(W["d"])().currentRoute.value.query;void 0!=Object(W["d"])().currentRoute.value.query.id&&Object(G["c"])(Object(W["d"])().currentRoute.value.query).then((function(e){if(c.name=e.data[0].name,c.describe=e.data[0].describe,c.id=e.data[0].id,c.env=e.data[0].env,c.project_id=e.data[0].project,c.email=e.data[0].email,c.user_variables=e.data[0].user_variables||"",C.project_id=e.data[0].project,c.case_list=e.data[0].case_list,0!=c.case_list.length)for(var t=0;t<c.case_list.length;t++)g.selectedRowKeys.push(c.case_list[t].id),k.selectedRowKeys.push(c.case_list[t].id);c.env=e.data[0].env}));var n=Object(a["Q"])(),c=Object(a["O"])({name:"",describe:"",env:"0",project_id:"",case_list:[],email:"",user_variables:""}),r=Object(a["O"])({cases_count:0,cases_false:0}),o=Object(a["O"])({name:[{required:!0,message:"Please input name"}],describe:[{message:"Please input describe"}],start_time:[{required:!0,message:"Please input start_time"}],end_time:[{required:!0,message:"Please input end_time"}]}),u=ce(c,o),l=u.resetFields,i=u.validateInfos,s=u.mergeValidateInfo,b=function(e){for(var t=0;t<e.length;t++)c.case_list[t]["sort"]=t},d=function(){var n;b(c.case_list),n=void 0==t.id?"post":"put",Object(G["a"])(c,n).then((function(t){J["a"].success({content:t.msg,duration:5}),200==t.code&&e.push("/testplan")}))},f=Object(a["i"])((function(){return s(Object(B["a"])(i))})),j=Object(a["Q"])(!1),O=Object(a["Q"])("default"),v=function(e){O.value=e,j.value=!0,Object(Z["d"])(C).then((function(e){n.value=e.data}))},p=function(){j.value=!1},h=function(){if(k.selectedRowKeys=g.selectedRowKeys,c.case_list.length>0){var e,t=Object(T["a"])(k.selectedRows).filter((function(e){return Object(T["a"])(c.case_list).every((function(t){return t.id!==e.id}))}));(e=c.case_list).push.apply(e,Object(T["a"])(t))}else{var n;(n=c.case_list).push.apply(n,Object(T["a"])(k.selectedRows))}j.value=!1},m=Object(a["Q"])(),_=function(e){console.log("Received values of form:",e),Object(Z["d"])(C).then((function(e){n.value=e.data,R.value=e.total}))},y=function(){X()({method:"post",headers:{Authorization:localStorage.getItem("token")},url:"runtestplan/",data:t}).then((function(e){200==e.data.code?(r.cases_count=e.data.data.count.cases_count,r.cases_result=e.data.data.count.cases_result,J["a"].success({content:"运行成功！",duration:5})):J["a"].success({content:"运行失败！",duration:5})}))},g=Object(a["O"])({selectedRowKeys:[],loading:!1}),q=Object(a["i"])((function(){return g.selectedRowKeys.length>0})),w=function(){g.loading=!0,setTimeout((function(){g.loading=!1}),1e3)},k=Object(a["O"])({selectedRowKeys:[],selectedRows:[]}),x=function(e,t){g.selectedRowKeys=e,k.selectedRows=t},C=Object(a["O"])({}),R=Object(a["Q"])(),U=function(e){C["current"]=e.current,Object(Z["d"])(C).then((function(e){n.value=e.data,R.value=e.total}))},K=Object(a["Q"])([{value:"0",label:"开发环境"},{value:"1",label:"测试环境"},{value:"2",label:"线上环境"}]),F=function(){},S=function(e){console.log("selected ".concat(e))},P=Object(W["d"])().currentRoute.value.query,M=Object(a["Q"])([]);Object($["c"])().then((function(e){for(var t=0;t<e.data.length;t++)M.value.push({value:e.data[t].id,label:e.data[t].name}),P.project_id==e.data[t].id&&(c.project_id=e.data[t].id)}));var I,V=function(e){var t=c.case_list.indexOf(e);c.case_list.splice(t,1);var n=g.selectedRowKeys.indexOf(e.id);delete g.selectedRowKeys[n]},Q=function(e){return{disabled:k.selectedRowKeys.includes(e.id)}},A=Object(a["O"])({name:"",id:"",data:"",header:"",parameter:"",variable:"",asserts:[]}),E=Object(a["Q"])({record:"",state:!1}),D=function(e){E.value.state=!0,E.value.record=e,A.id=e.id,A.name=e.name,A.header=e.header,A.data=e.data,A.parameter=e.parameter,A.variable=e.variable,A.asserts=e.asserts||[],A.project__name=e.project__name,A.module=e.module},z=function(){var e=Object(H["a"])({},A),t=c.case_list.indexOf(E.value.record);c.case_list[t]=e,E.value.state=!1},N=function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)},Y=function(e){null==(e.variable||null)&&(e["variable"]=[]),e.variable.push({mold:"response",value:"",name:"",runRelation:!1,runTeardown:!1})},L=function(e){var t=A.asserts.indexOf(e);-1!==t&&A.asserts.splice(t,1)},ee=function(){A.asserts.push({value:"",mold:"response"})};function te(e,t){var n;return{props:{},style:{cursor:"pointer"},onMouseenter:function(e){var t=e||window.event;t.target.draggable=!0},onDragstart:function(e){var n=e||window.event;n.stopPropagation(),I=t},onDragover:function(e){var t=e||window.event;t.preventDefault()},onDrop:function(e){var a=e||window.event;if(a.stopPropagation(),n=t,I<n){var r=c.case_list[I];c.case_list.splice(n+1,0,r),c.case_list.splice(I,1)}else if(I>n){var o=c.case_list[I];c.case_list.splice(n,0,o),c.case_list.splice(I+1,1)}}}}var ne=Object(a["O"])({value:""}),re=Object(a["Q"])(!1),oe=function(e){ne.value="",ne.value=e.value,re.value=!0},ue=function(e){A.variable[e].value=ne.value,re.value=!1};return Object(H["a"])(Object(H["a"])({removeAssert:L,removeVariable:N,addVariable:Y,formState:C,data:n,columns:ae,runplan:y,activeKey:Object(a["Q"])("1"),labelCol:{span:4},wrapperCol:{span:14},validateInfos:i,resetFields:l,modelRef:c,onSubmit:d,errorInfos:f,value1:Object(a["Q"])(),visible:j,size:O,showDrawer:v,onClose:h,formRef:m,onFinish:_,Close:p,count:r,hasSelected:q},Object(a["bb"])(g)),{},{start:w,onSelectChange:x,total:R,onChange:U,focus:F,handleChange:S,options1:K,optionsProject:M,deletes:V,getCheckboxProps:Q,visible2:E,showModal:D,handleOk2:z,detail:A,activeKey2:Object(a["Q"])("4"),addAssert:ee,customRow:te,caseVisible:re,caseVariableShowModal:oe,caseVariableHandleOk:ue,caseVariableCode:ne})}}),oe=(n("3553"),n("6b0d")),ue=n.n(oe);const le=ue()(re,[["render",N]]);t["default"]=le},caad:function(e,t,n){"use strict";var a=n("23e7"),c=n("4d64").includes,r=n("44d2");a({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d312:function(e,t,n){"use strict";n("6f40")},d998:function(e,t,n){var a=n("342f");e.exports=/MSIE|Trident/.test(a)},dfa2:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"selectEnv",style:{float:"left"}},r={class:"selectEnv",style:{float:"left"}},o=Object(a["p"])("Create"),u=Object(a["p"])("Reset");function l(e,t,n,l,i,s){var b=Object(a["U"])("a-input"),d=Object(a["U"])("a-form-item"),f=Object(a["U"])("a-select"),j=Object(a["U"])("a-button"),O=Object(a["U"])("a-form");return Object(a["K"])(),Object(a["k"])(O,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(a["hb"])((function(){return[Object(a["q"])(d,{label:"变量名",required:""},{default:Object(a["hb"])((function(){return[Object(a["q"])(b,{value:e.modelRef.key,"onUpdate:value":t[0]||(t[0]=function(t){return e.modelRef.key=t})},null,8,["value"])]})),_:1}),Object(a["q"])(d,{label:"变量值"},{default:Object(a["hb"])((function(){return[Object(a["q"])(b,{value:e.modelRef.value,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelRef.value=t})},null,8,["value"])]})),_:1}),Object(a["q"])(d,{label:"环境",required:""},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",c,[Object(a["q"])(f,{ref:"select",value:e.modelRef.env,"onUpdate:value":t[2]||(t[2]=function(t){return e.modelRef.env=t}),style:{width:"120px"},options:e.options1,onFocus:e.focus,onChange:e.handleChange},null,8,["value","options","onFocus","onChange"])])]})),_:1}),Object(a["q"])(d,{label:"项目",required:""},{default:Object(a["hb"])((function(){return[Object(a["n"])("div",r,[Object(a["q"])(f,{ref:"select",value:e.modelRef.project_id,"onUpdate:value":t[3]||(t[3]=function(t){return e.modelRef.project_id=t}),style:{width:"120px"},options:e.optionsProject,onFocus:e.focus,onChange:e.handleChange},null,8,["value","options","onFocus","onChange"])])]})),_:1}),Object(a["q"])(d,Object(a["y"])({class:"error-infos","wrapper-col":{span:14,offset:4}},e.errorInfos),{default:Object(a["hb"])((function(){return[Object(a["q"])(j,{type:"primary",onClick:Object(a["jb"])(e.onSubmit,["prevent"])},{default:Object(a["hb"])((function(){return[o]})),_:1},8,["onClick"]),Object(a["q"])(j,{style:{"margin-left":"10px"},onClick:e.resetFields},{default:Object(a["hb"])((function(){return[u]})),_:1},8,["onClick"])]})),_:1},16)]})),_:1},8,["label-col","wrapper-col"])}n("b0c0");var i=n("5a04"),s=n("3af3"),b=n("f64c"),d=n("6c02"),f=n("0f0c"),j=n("24d2"),O=s["a"].useForm,v=Object(a["r"])({setup:function(){var e=Object(d["d"])(),t=Object(d["d"])().currentRoute.value.query;void 0!=Object(d["d"])().currentRoute.value.query.id&&Object(f["c"])(Object(d["d"])().currentRoute.value.query).then((function(e){console.log(e),n.key=e.data[0].key,n.value=e.data[0].value,n.env=e.data[0].env,n.project_id=e.data[0].project,n.id=e.data[0].id}));var n=Object(a["O"])({key:"",value:"",env:"0",project_id:""}),c=Object(a["O"])({key:[{required:!0,message:"Please input key"}],value:[{message:"Please input value"}],start_time:[{required:!0,message:"Please input start_time"}],env:[{required:!0,message:"Please input env"}]}),r=O(n,c),o=r.resetFields,u=r.validate,l=r.validateInfos,s=r.mergeValidateInfo,v=function(){u().then((function(){var c;console.log(Object(a["Z"])(n)),c=void 0==t.id?"post":"put",Object(f["a"])(n,c).then((function(t){b["a"].success({content:t.msg,duration:5}),200==t.code&&e.push("/variate_list"),console.log(t)}))})).catch((function(e){console.log("error",e)}))},p=Object(a["Q"])([{value:"0",label:"开发环境"},{value:"1",label:"测试环境"},{value:"2",label:"线上环境"}]),h=function(){console.log("focus")},m=function(e){console.log("selected ".concat(e))},_=Object(a["i"])((function(){return s(Object(i["a"])(l))})),y=Object(a["Q"])([]);return Object(j["c"])().then((function(e){for(var a=0;a<e.data.length;a++)y.value.push({value:e.data[a].id,label:e.data[a].name}),t.project_id==e.data[a].id&&(n.project_id=e.data[a].id);console.log(y.value)})),{labelCol:{span:4},wrapperCol:{span:14},validateInfos:l,resetFields:o,modelRef:n,onSubmit:v,errorInfos:_,value1:Object(a["Q"])(),focus:h,handleChange:m,options1:p,optionsProject:y}}}),p=(n("d312"),n("6b0d")),h=n.n(p);const m=h()(v,[["render",l],["__scopeId","data-v-2d3371b8"]]);t["default"]=m},f90b:function(e,t,n){}}]);
//# sourceMappingURL=create_variate.e7485bd8.js.map