(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"14cb":function(e,t,n){},9954:function(e,t,n){"use strict";n("14cb")},b775:function(e,t,n){"use strict";n("d3b7");var r,o=n("bc3a"),a=n.n(o),c=n("56cd"),u=n("6c02");r="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8002/api/";var i=a.a.create({baseURL:r,timeout:3e5});i.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var s=function(e){if(e.response){var t=e.response.data,n=localStorage.getItem("token");if(403===e.response.status&&(c["a"].error({message:"Forbidden",description:t.message}),window.location.href="#/login"),401===e.response.status&&(!t.result||!t.result.isLogin)){c["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),n&&window.location.reload();var r=Object(u["d"])();r.push("/login")}}return Promise.reject(e)};i.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=t),e}),s),i.interceptors.response.use((function(e){return"string"!=typeof e.data&&(e.data["status"]=e.status),e.data}),s),t["a"]=i},dc3f:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=n("dbdf"),a=n.n(o),c=Object(r["n"])("img",{src:a.a},null,-1),u={style:{position:"absolute",right:"40%",width:"400px",border:"3px solid #42b983",padding:"10px",top:"40%",background:"#ffffff",height:"300px"}},i=Object(r["n"])("h2",null,"欢迎来到接口测试平台",-1),s=Object(r["n"])("br",null,null,-1),l={class:"login-form-wrap"},d=Object(r["p"])("Remember me"),b=Object(r["n"])("a",{class:"login-form-forgot",href:""},"Forgot password",-1),f=Object(r["p"])(" Login "),m={style:{}};function p(e,t,n,o,a,p){var O=Object(r["T"])("UserOutlined"),j=Object(r["T"])("a-input"),g=Object(r["T"])("a-form-item"),v=Object(r["T"])("LockOutlined"),h=Object(r["T"])("a-input-password"),w=Object(r["T"])("a-checkbox"),y=Object(r["T"])("a-button"),q=Object(r["T"])("a-form"),k=Object(r["T"])("a-modal");return Object(r["K"])(),Object(r["m"])(r["b"],null,[c,Object(r["n"])("div",u,[i,s,Object(r["q"])(q,{model:e.formState,name:"normal_login",class:"login-form",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:Object(r["gb"])((function(){return[Object(r["q"])(g,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:Object(r["gb"])((function(){return[Object(r["q"])(j,{value:e.formState.username,"onUpdate:value":t[0]||(t[0]=function(t){return e.formState.username=t})},{prefix:Object(r["gb"])((function(){return[Object(r["q"])(O,{class:"site-form-item-icon"})]})),_:1},8,["value"])]})),_:1}),Object(r["q"])(g,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:Object(r["gb"])((function(){return[Object(r["q"])(h,{value:e.formState.password,"onUpdate:value":t[1]||(t[1]=function(t){return e.formState.password=t})},{prefix:Object(r["gb"])((function(){return[Object(r["q"])(v,{class:"site-form-item-icon"})]})),_:1},8,["value"])]})),_:1}),Object(r["n"])("div",l,[Object(r["q"])(g,{name:"remember","no-style":""},{default:Object(r["gb"])((function(){return[Object(r["q"])(w,{checked:e.formState.remember,"onUpdate:checked":t[2]||(t[2]=function(t){return e.formState.remember=t})},{default:Object(r["gb"])((function(){return[d]})),_:1},8,["checked"])]})),_:1}),b]),Object(r["q"])(g,null,{default:Object(r["gb"])((function(){return[Object(r["q"])(y,{disabled:e.disabled,type:"primary","html-type":"submit",class:"login-form-button",onClick:e.login},{default:Object(r["gb"])((function(){return[f]})),_:1},8,["disabled","onClick"]),Object(r["n"])("div",m,[Object(r["n"])("a",{type:"primary",onClick:t[3]||(t[3]=function(){return e.showModal&&e.showModal.apply(e,arguments)})},"register now!"),Object(r["q"])(k,{visible:e.visible,"onUpdate:visible":t[7]||(t[7]=function(t){return e.visible=t}),title:"register",onOk:e.handleOks},{default:Object(r["gb"])((function(){return[Object(r["n"])("div",null,[Object(r["q"])(q,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(r["gb"])((function(){return[Object(r["q"])(g,{label:"name",required:""},{default:Object(r["gb"])((function(){return[Object(r["q"])(j,{value:e.modelRef.username,"onUpdate:value":t[4]||(t[4]=function(t){return e.modelRef.username=t})},null,8,["value"])]})),_:1}),Object(r["q"])(g,{label:"email"},{default:Object(r["gb"])((function(){return[Object(r["q"])(j,{value:e.modelRef.email,"onUpdate:value":t[5]||(t[5]=function(t){return e.modelRef.email=t})},null,8,["value"])]})),_:1}),Object(r["q"])(g,{label:"password",required:""},{default:Object(r["gb"])((function(){return[Object(r["q"])(h,{value:e.modelRef.password,"onUpdate:value":t[6]||(t[6]=function(t){return e.modelRef.password=t})},null,8,["value"])]})),_:1})]})),_:1},8,["label-col","wrapper-col"])])]})),_:1},8,["visible","onOk"])])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"])])],64)}n("e9c4");var O=n("edc4"),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},g=j,v=n("b3f0");function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e,t){var n=h({},e,t.attrs);return r["q"](v["a"],r["y"](n,{icon:g}),null)};y.displayName="LockOutlined",y.inheritAttrs=!1;var q=y,k=n("f64c"),F=n("b775");function _(e){return F["a"].request({method:"post",url:"login/",data:e})}function S(e){return F["a"].request({method:"post",url:"register/",data:e})}var U=n("6c02"),P=Object(r["r"])({components:{UserOutlined:O["a"],LockOutlined:q},setup:function(){var e=Object(U["d"])(),t=Object(r["O"])({username:"",email:"",password:""}),n=Object(r["O"])({username:"",password:"",remember:!0}),o=function(){},a=function(){},c=Object(r["i"])((function(){return!(n.username&&n.password)})),u=function(){return _(n).then((function(t){k["a"].success({content:t.msg,duration:5}),200==t.code&&(e.push("/project"),localStorage.setItem("token","Bearer "+t.data.access_token),localStorage.setItem("user",JSON.stringify(t.data)))}))},i=Object(r["P"])(!1),s=function(){i.value=!0},l=function(n){console.log(n),S(t).then((function(t){k["a"].success({content:t.msg,duration:5}),200==t.code&&e.push("//login")}))},d=function(){k["a"].success({content:"暂未开放！",duration:5})};return{formState:n,onFinish:o,onFinishFailed:a,disabled:c,visible:i,showModal:s,handleOk:l,modelRef:t,handleOks:d,login:u}}}),A=(n("9954"),n("6b0d")),R=n.n(A);const T=R()(P,[["render",p]]);t["default"]=T},e9c4:function(e,t,n){var r=n("23e7"),o=n("da84"),a=n("d066"),c=n("2ba4"),u=n("e330"),i=n("d039"),s=o.Array,l=a("JSON","stringify"),d=u(/./.exec),b=u("".charAt),f=u("".charCodeAt),m=u("".replace),p=u(1..toString),O=/[\uD800-\uDFFF]/g,j=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,v=function(e,t,n){var r=b(n,t-1),o=b(n,t+1);return d(j,e)&&!d(g,o)||d(g,e)&&!d(j,r)?"\\u"+p(f(e,0),16):e},h=i((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&r({target:"JSON",stat:!0,forced:h},{stringify:function(e,t,n){for(var r=0,o=arguments.length,a=s(o);r<o;r++)a[r]=arguments[r];var u=c(l,null,a);return"string"==typeof u?m(u,O,v):u}})}}]);
//# sourceMappingURL=login.c7f8b3ed.js.map