(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(1543)}])},7577:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(5893),l=n(7741);function a(e){let{children:t,label:n,color:a,...i}=e;return(0,r.jsx)(l.zx,{"aria-label":n,sx:{cursor:"pointer",userSelect:"none",fontWeight:"medium",fontSize:"xs",bg:a||"yellow",color:a||"black",hover:"none",minWidth:"135px",height:"45px"},...i,children:t})}},2105:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});var r=n(5893),l=n(7741),a=n(1872),i=n(8357);function s(e){let{children:t,label:n,color:s,...o}=e;return(0,r.jsxs)(l.zx,{"aria-label":n,sx:{cursor:"pointer",userSelect:"none",fontWeight:"medium",fontSize:"xs",bg:"white",color:s||"black",hover:"none",minWidth:"265px",minH:"50px",borderRadius:"30px"},...o,children:[(0,r.jsx)(i.Pd.Provider,{value:{style:{marginRight:"0.5rem"},className:"global-class-name"},children:(0,r.jsx)(a.JM8,{})}),t]})}},4368:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(5893),l=n(979);function a(e){let{placeholder:t,label:n,id:a,...i}=e;return(0,r.jsx)(l.II,{bg:"EduWhite","aria-label":n,id:a,...i,fontSize:"xs",maxW:"265px",placeholder:t})}},1543:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return f}});var r=n(5893),l=n(639),a=n(3887),i=n(594),s=n(4368),o=n(7577),m=n(2105),c=n(979),u=n(7741),x=n(7294),d=n(7516);function h(e){let{placeholder:t,label:n,id:l,mt:a,...i}=e,[s,o]=(0,x.useState)(!1),m=()=>o(!s);return(0,r.jsxs)(c.BZ,{maxW:"265px",minH:"50px",mt:a,children:[(0,r.jsx)(c.II,{"aria-label":n,bg:"EduWhite",id:l,pr:"3rem",...i,fontSize:"xs",maxW:"265px",type:s?"text":"password",placeholder:"Password"}),(0,r.jsx)(c.xH,{width:"2.5rem",h:"2rem",mt:1,mr:2,children:(0,r.jsx)(u.zx,{h:"1.75rem",size:"sm",fontSize:"sm",onClick:m,children:s?(0,r.jsx)(d.A7v,{}):(0,r.jsx)(d.nJ9,{})})})]})}function p(){let[e,t]=(0,x.useState)({firstName:"",lastName:"",email:"",password:"",role:"tutor"}),n=async t=>{t.preventDefault(),i.Z.post("http://localhost:8000/tutor",e)},a=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return(0,r.jsxs)(l.kC,{minW:{sm:"330px",lg:"430px"},maxW:"430px",height:"670px",bg:"blue",borderRadius:20,alignItems:"center",flexDir:"column",ml:{sm:"0px",md:"40px"},children:[(0,r.jsx)(l.xv,{color:"eduWhite",mt:6,as:"h1",fontSize:{sm:"md",lg:"lg"},children:"Create your account"}),(0,r.jsx)(s.U,{label:"first name",mt:10,name:"firstName",onChange:a,value:e.firstName,placeholder:"First name",id:"firstName"}),(0,r.jsx)(s.U,{label:"last name",mt:9,name:"lastName",onChange:a,value:e.lastName,placeholder:"Last name",id:"lastName"}),(0,r.jsx)(s.U,{label:"email",mt:8,name:"email",onChange:a,value:e.email,type:"email",placeholder:"Email",id:"email"}),(0,r.jsx)(h,{label:"password",mt:8,name:"password",onChange:a,value:e.password,placeholder:"Password",id:"password"}),(0,r.jsx)(o.M,{label:"create account",mt:12,id:"submitButton",mb:4,onClick:n,children:"Create"}),(0,r.jsx)(l.xv,{fontWeight:"bold",color:"eduWhite",children:"OR"}),(0,r.jsx)(m.O,{label:"Sign up with your Google account","data-cy":"googleBtn",mt:8,children:"Sign up with Google"})]})}var g=!0;function f(e){let{title:t,description:n}=e;return(0,r.jsx)(l.kC,{minH:"100vh",backgroundImage:"url('/images/bg-edugram.png')",backgroundRepeat:"no-repeat",backgroundSize:"center",children:(0,r.jsxs)(l.kC,{flexDir:"column",children:[(0,r.jsx)(l.xu,{maxW:"200px",ml:8,mt:"5.5rem",children:(0,r.jsx)(a.Ee,{src:"/images/edugram-logo.png",alt:"logo of Edugram"})}),(0,r.jsxs)(l.kC,{justifyContent:"flex-start",alignItems:{sm:"center",lg:"flex-start"},ml:{md:0,lg:8},mt:"150px",flexDir:{sm:"column",md:"column",lg:"row"},children:[(0,r.jsxs)(l.kC,{flexDir:"column",maxW:{sm:"90%",md:"50%"},m:{sm:"30px",lg:"0px"},mr:{lg:"10px",xl:"100px"},children:[(0,r.jsx)(l.kC,{children:!!t&&(0,r.jsx)(l.xv,{as:"h1",children:t})}),(0,r.jsx)(l.kC,{mt:"3rem",children:!!n&&(0,r.jsx)(l.xv,{mt:2,maxW:"50%",children:n})})]}),(0,r.jsx)(p,{})]})]})})}}},function(e){e.O(0,[874,994,764,594,774,888,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);