(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{2017:function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7");var o,r=n("bc3a"),a=n.n(r),c=n("56cd"),i=n("6c02");o="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";var u=a.a.create({baseURL:o,timeout:3e5});u.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var l=function(e){if(e.response){var t=e.response.data,n=localStorage.getItem("token");if(403===e.response.status&&(c["a"].error({message:"Forbidden",description:t.message}),window.location.href="#/login"),401===e.response.status&&(!t.result||!t.result.isLogin)){c["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),n&&window.location.reload();var o=Object(i["c"])();o.push("/login")}}return Promise.reject(e)};u.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=t),e}),l),u.interceptors.response.use((function(e){return e.data}),l),t["a"]=u},cbbc:function(e,t,n){"use strict";n("2017")},dc3f:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={style:{position:"absolute",right:"40%",width:"400px",border:"3px solid #42b983",padding:"10px",top:"50%",height:"300px"}},a=Object(o["n"])("h2",null,"欢迎来到接口测试平台",-1),c=Object(o["n"])("br",null,null,-1),i={class:"login-form-wrap"},u=Object(o["p"])("Remember me"),l=Object(o["n"])("a",{class:"login-form-forgot",href:""},"Forgot password",-1),s=Object(o["p"])(" Login "),b={style:{}};function d(e,t,n,d,f,m){var p=Object(o["U"])("UserOutlined"),O=Object(o["U"])("a-input"),j=Object(o["U"])("a-form-item"),h=Object(o["U"])("LockOutlined"),v=Object(o["U"])("a-input-password"),g=Object(o["U"])("a-checkbox"),w=Object(o["U"])("a-button"),q=Object(o["U"])("a-form"),U=Object(o["U"])("a-modal");return Object(o["K"])(),Object(o["m"])("div",r,[a,c,Object(o["q"])(q,{model:e.formState,name:"normal_login",class:"login-form",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:Object(o["hb"])((function(){return[Object(o["q"])(j,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:Object(o["hb"])((function(){return[Object(o["q"])(O,{value:e.formState.username,"onUpdate:value":t[0]||(t[0]=function(t){return e.formState.username=t})},{prefix:Object(o["hb"])((function(){return[Object(o["q"])(p,{class:"site-form-item-icon"})]})),_:1},8,["value"])]})),_:1}),Object(o["q"])(j,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:Object(o["hb"])((function(){return[Object(o["q"])(v,{value:e.formState.password,"onUpdate:value":t[1]||(t[1]=function(t){return e.formState.password=t})},{prefix:Object(o["hb"])((function(){return[Object(o["q"])(h,{class:"site-form-item-icon"})]})),_:1},8,["value"])]})),_:1}),Object(o["n"])("div",i,[Object(o["q"])(j,{name:"remember","no-style":""},{default:Object(o["hb"])((function(){return[Object(o["q"])(g,{checked:e.formState.remember,"onUpdate:checked":t[2]||(t[2]=function(t){return e.formState.remember=t})},{default:Object(o["hb"])((function(){return[u]})),_:1},8,["checked"])]})),_:1}),l]),Object(o["q"])(j,null,{default:Object(o["hb"])((function(){return[Object(o["q"])(w,{disabled:e.disabled,type:"primary","html-type":"submit",class:"login-form-button",onClick:e.login},{default:Object(o["hb"])((function(){return[s]})),_:1},8,["disabled","onClick"]),Object(o["n"])("div",b,[Object(o["n"])("a",{type:"primary",onClick:t[3]||(t[3]=function(){return e.showModal&&e.showModal.apply(e,arguments)})},"register now!"),Object(o["q"])(U,{visible:e.visible,"onUpdate:visible":t[7]||(t[7]=function(t){return e.visible=t}),title:"register",onOk:e.handleOks},{default:Object(o["hb"])((function(){return[Object(o["n"])("div",null,[Object(o["q"])(q,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(o["hb"])((function(){return[Object(o["q"])(j,{label:"name",required:""},{default:Object(o["hb"])((function(){return[Object(o["q"])(O,{value:e.modelRef.username,"onUpdate:value":t[4]||(t[4]=function(t){return e.modelRef.username=t})},null,8,["value"])]})),_:1}),Object(o["q"])(j,{label:"email"},{default:Object(o["hb"])((function(){return[Object(o["q"])(O,{value:e.modelRef.email,"onUpdate:value":t[5]||(t[5]=function(t){return e.modelRef.email=t})},null,8,["value"])]})),_:1}),Object(o["q"])(j,{label:"password",required:""},{default:Object(o["hb"])((function(){return[Object(o["q"])(v,{value:e.modelRef.password,"onUpdate:value":t[6]||(t[6]=function(t){return e.modelRef.password=t})},null,8,["value"])]})),_:1})]})),_:1},8,["label-col","wrapper-col"])])]})),_:1},8,["visible","onOk"])])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"])])}var f=n("edc4"),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},p=m,O=n("b3f0");function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){h(e,t,n[t])}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e,t){var n=j({},e,t.attrs);return o["q"](O["a"],o["y"](n,{icon:p}),null)};v.displayName="LockOutlined",v.inheritAttrs=!1;var g=v,w=n("f64c"),q=n("b775");function U(e){return q["a"].request({method:"post",url:"login/",data:e})}function _(e){return q["a"].request({method:"post",url:"register/",data:e})}var y=n("6c02"),k=Object(o["r"])({components:{UserOutlined:f["a"],LockOutlined:g},setup:function(){var e=Object(y["c"])(),t=Object(o["O"])({username:"",email:"",password:""}),n=Object(o["O"])({username:"",password:"",remember:!0}),r=function(e){console.log("Success:",e)},a=function(e){console.log("Failed:",e)},c=Object(o["i"])((function(){return!(n.username&&n.password)})),i=function(){return U(n).then((function(t){w["a"].success({content:t.msg,duration:5}),console.log(t.data),200==t.code&&(e.push("/project"),localStorage.setItem("token","Bearer "+t.data.access_token))}))},u=Object(o["Q"])(!1),l=function(){u.value=!0},s=function(n){console.log(n),_(t).then((function(t){w["a"].success({content:t.msg,duration:5}),200==t.code&&e.push("//login"),console.log(t)}))};return{formState:n,onFinish:r,onFinishFailed:a,disabled:c,visible:u,showModal:l,handleOk:s,modelRef:t,login:i}}}),F=(n("cbbc"),n("6b0d")),S=n.n(F);const P=S()(k,[["render",d]]);t["default"]=P}}]);
//# sourceMappingURL=login.7b1c12a6.js.map