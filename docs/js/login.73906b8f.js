(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{2017:function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),o=n.n(r),a=n("56cd"),c=n("6c02"),i=o.a.create({baseURL:"https://124.71.4.214:8000/api/",timeout:1e4});i.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var u=function(e){if(e.response){var t=e.response.data,n=localStorage.getItem("token");if(403===e.response.status&&(a["a"].error({message:"Forbidden",description:t.message}),window.location.href="#/login"),401===e.response.status&&(!t.result||!t.result.isLogin)){a["a"].error({message:"Unauthorized",description:"Authorization verification failed"}),n&&window.location.reload();var r=Object(c["c"])();r.push("/login")}}return Promise.reject(e)};i.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=t),e}),u),i.interceptors.response.use((function(e){return e.data}),u),t["a"]=i},cbbc:function(e,t,n){"use strict";n("2017")},dc3f:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={style:{position:"absolute",right:"40%",width:"400px",border:"3px solid #42b983",padding:"10px",top:"50%",height:"300px"}},a=Object(r["n"])("h2",null,"欢迎来到接口测试平台",-1),c=Object(r["n"])("br",null,null,-1),i={class:"login-form-wrap"},u=Object(r["p"])("Remember me"),l=Object(r["n"])("a",{class:"login-form-forgot",href:""},"Forgot password",-1),s=Object(r["p"])(" Login "),b={style:{}};function d(e,t,n,d,f,m){var p=Object(r["T"])("UserOutlined"),O=Object(r["T"])("a-input"),j=Object(r["T"])("a-form-item"),g=Object(r["T"])("LockOutlined"),h=Object(r["T"])("a-input-password"),v=Object(r["T"])("a-checkbox"),w=Object(r["T"])("a-button"),q=Object(r["T"])("a-form"),k=Object(r["T"])("a-modal");return Object(r["K"])(),Object(r["m"])("div",o,[a,c,Object(r["q"])(q,{model:e.formState,name:"normal_login",class:"login-form",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:Object(r["gb"])((function(){return[Object(r["q"])(j,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:Object(r["gb"])((function(){return[Object(r["q"])(O,{value:e.formState.username,"onUpdate:value":t[0]||(t[0]=function(t){return e.formState.username=t})},{prefix:Object(r["gb"])((function(){return[Object(r["q"])(p,{class:"site-form-item-icon"})]})),_:1},8,["value"])]})),_:1}),Object(r["q"])(j,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:Object(r["gb"])((function(){return[Object(r["q"])(h,{value:e.formState.password,"onUpdate:value":t[1]||(t[1]=function(t){return e.formState.password=t})},{prefix:Object(r["gb"])((function(){return[Object(r["q"])(g,{class:"site-form-item-icon"})]})),_:1},8,["value"])]})),_:1}),Object(r["n"])("div",i,[Object(r["q"])(j,{name:"remember","no-style":""},{default:Object(r["gb"])((function(){return[Object(r["q"])(v,{checked:e.formState.remember,"onUpdate:checked":t[2]||(t[2]=function(t){return e.formState.remember=t})},{default:Object(r["gb"])((function(){return[u]})),_:1},8,["checked"])]})),_:1}),l]),Object(r["q"])(j,null,{default:Object(r["gb"])((function(){return[Object(r["q"])(w,{disabled:e.disabled,type:"primary","html-type":"submit",class:"login-form-button",onClick:e.login},{default:Object(r["gb"])((function(){return[s]})),_:1},8,["disabled","onClick"]),Object(r["n"])("div",b,[Object(r["n"])("a",{type:"primary",onClick:t[3]||(t[3]=function(){return e.showModal&&e.showModal.apply(e,arguments)})},"register now!"),Object(r["q"])(k,{visible:e.visible,"onUpdate:visible":t[7]||(t[7]=function(t){return e.visible=t}),title:"register",onOk:e.handleOks},{default:Object(r["gb"])((function(){return[Object(r["n"])("div",null,[Object(r["q"])(q,{"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:Object(r["gb"])((function(){return[Object(r["q"])(j,{label:"name",required:""},{default:Object(r["gb"])((function(){return[Object(r["q"])(O,{value:e.modelRef.username,"onUpdate:value":t[4]||(t[4]=function(t){return e.modelRef.username=t})},null,8,["value"])]})),_:1}),Object(r["q"])(j,{label:"email"},{default:Object(r["gb"])((function(){return[Object(r["q"])(O,{value:e.modelRef.email,"onUpdate:value":t[5]||(t[5]=function(t){return e.modelRef.email=t})},null,8,["value"])]})),_:1}),Object(r["q"])(j,{label:"password",required:""},{default:Object(r["gb"])((function(){return[Object(r["q"])(h,{value:e.modelRef.password,"onUpdate:value":t[6]||(t[6]=function(t){return e.modelRef.password=t})},null,8,["value"])]})),_:1})]})),_:1},8,["label-col","wrapper-col"])])]})),_:1},8,["visible","onOk"])])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"])])}var f=n("edc4"),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},p=m,O=n("b3f0");function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e,t){var n=j({},e,t.attrs);return r["q"](O["a"],r["y"](n,{icon:p}),null)};h.displayName="LockOutlined",h.inheritAttrs=!1;var v=h,w=n("f64c"),q=n("b775");function k(e){return q["a"].request({method:"post",url:"login/",data:e})}function y(e){return q["a"].request({method:"post",url:"register/",data:e})}var F=n("6c02"),_=Object(r["r"])({components:{UserOutlined:f["a"],LockOutlined:v},setup:function(){var e=Object(F["c"])(),t=Object(r["O"])({username:"",email:"",password:""}),n=Object(r["O"])({username:"",password:"",remember:!0}),o=function(e){console.log("Success:",e)},a=function(e){console.log("Failed:",e)},c=Object(r["i"])((function(){return!(n.username&&n.password)})),i=function(){return k(n).then((function(t){w["a"].success({content:t.msg,duration:5}),console.log(t.data),200==t.code&&(e.push("/project"),localStorage.setItem("token","Bearer "+t.data.access_token))}))},u=Object(r["P"])(!1),l=function(){u.value=!0},s=function(n){console.log(n),y(t).then((function(t){w["a"].success({content:t.msg,duration:5}),200==t.code&&e.push("//login"),console.log(t)}))};return{formState:n,onFinish:o,onFinishFailed:a,disabled:c,visible:u,showModal:l,handleOk:s,modelRef:t,login:i}}}),S=(n("cbbc"),n("6b0d")),U=n.n(S);const T=U()(_,[["render",d]]);t["default"]=T}}]);
//# sourceMappingURL=login.73906b8f.js.map