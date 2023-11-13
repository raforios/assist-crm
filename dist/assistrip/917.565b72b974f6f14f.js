"use strict";(self.webpackChunkassistrip=self.webpackChunkassistrip||[]).push([[917],{6917:(c,d,e)=>{e.r(d),e.d(d,{AuthModule:()=>M});var s=e(6814),g=e(5519),n=e(6223),u=e(4664),p=e(7093),m=e(8446),f=e(3519),l=e.n(f),t=e(8926),v=e(5146),w=e(7743),x=e(2990);function C(o,a){1&o&&(t.O4$(),t.TgZ(0,"svg",12),t._UZ(1,"path",13),t.qZA())}function q(o,a){1&o&&(t.O4$(),t.TgZ(0,"svg",12),t._UZ(1,"path",14),t.qZA())}const b=[{path:"",children:[{path:"login",component:(()=>{class o{constructor(i,r,h,T){this.authService=i,this.router=r,this.rolesService=h,this.userService=T,this.hasLoaded=!0,this.roles=[],this.loginForm=new n.cw({email:new n.NI("",[n.kI.required]),password:new n.NI("",n.kI.required)}),this.showPassword=!1}ngOnInit(){this.authService.isLoggedIn()&&this.router.navigate(["../../dashboard/polizas/listado-polizas"])}togglePasswordVisibility(){this.showPassword=!this.showPassword}login(){if(this.loginForm.valid&&this.loginForm.value.email&&this.loginForm.value.password){if(!this.authService.login(this.loginForm.value.email,this.loginForm.value.password))return void l().fire({position:"top-end",icon:"error",title:"Usuario o contrase\xf1a incorrectos",showConfirmButton:!1,timer:1500});this.hasLoaded=!0,l().fire({position:"top-end",icon:"success",title:"Bienvenido",showConfirmButton:!1,timer:1500}),this.router.navigate(["../../dashboard/polizas/listado-polizas"])}}onLogin(){this.loginForm.value.email&&this.loginForm.value.password?(this.hasLoaded=!1,this.authService.login(this.loginForm.value.email,this.loginForm.value.password).pipe((0,u.w)(i=>this.rolesService.getRoles()),(0,u.w)(i=>(this.roles=i,this.userService.getByUsernameUsers(this.authService.getEmail())))).subscribe({next:i=>{if(this.hasLoaded=!0,this.authService.setRoutes((0,p.nf)(this.roles,i[0])),0===this.authService.getRoutes().length)return this.authService.logout(),void l().fire({title:"No esta autorizado su ingreso",icon:"error"});l().fire({position:"top-end",icon:"success",title:"Bienvenido",showConfirmButton:!1,timer:1500}),this.router.navigate(["../../dashboard/polizas/listado-polizas"])},error:i=>{this.hasLoaded=!0,console.log(i),l().fire("Error",i,"error")}})):l().fire("Oops","Se requiere rellenar el campo","warning")}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(v.e),t.Y36(g.F0),t.Y36(w.m),t.Y36(x.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:19,vars:7,consts:[[1,"container"],[1,"img"],["src","assets/images/fondo_login.png","alt",""],[1,"login",3,"formGroup"],["type","text","placeholder","Ingreso","required","","formControlName","email","name","email",1,"email"],[1,"password"],["placeholder","Contrase\xf1a","required","","formControlName","password","name","password",1,"input_password",3,"type"],[1,"icon",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","20","viewBox","0 96 960 960","width","20",4,"ngIf"],["type","submit",1,"submit",3,"click"],[1,"loading"],["src","assets/svg/loading.svg","alt",""],["xmlns","http://www.w3.org/2000/svg","height","20","viewBox","0 96 960 960","width","20"],["d","M480 744q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.596 0-259.798-78.5T48 576q55-131 172.202-209.5T480 288q142.596 0 259.798 78.5T912 576q-55 131-172.202 209.5T480 864Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127 576q51 100 146 158t207 58Z"],["d","m637 631-62-62q4-38-23-65.5T487 480l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833 576q-49-101-144.5-158.5T480 360q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912 576q-22 57-58.5 103.5T770 764Zm-2 202L638 836q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48 576q22-57 58-104t84-85L90 287l51-51 678 679-51 51ZM241 439q-35 28-65 61.5T127 576q49 101 144.5 158.5T480 792q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"form",3)(4,"h1"),t._uU(5,"Ingreso"),t.qZA(),t._UZ(6,"input",4),t.TgZ(7,"div",5),t._UZ(8,"input",6),t.TgZ(9,"button",7),t.NdJ("click",function(){return r.togglePasswordVisibility()}),t.YNc(10,C,2,0,"svg",8),t.YNc(11,q,2,0,"svg",8),t.qZA()(),t.TgZ(12,"button",9),t.NdJ("click",function(){return r.onLogin()}),t.TgZ(13,"span"),t._uU(14,"Ingresar"),t.qZA()(),t.TgZ(15,"div",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._uU(18,"Espere un momento, cargando la informacion"),t.qZA()()()()),2&i&&(t.xp6(3),t.Q6J("formGroup",r.loginForm),t.xp6(5),t.Q6J("type",r.showPassword?"text":"password"),t.xp6(2),t.Q6J("ngIf",r.showPassword),t.xp6(1),t.Q6J("ngIf",!r.showPassword),t.xp6(1),t.ekj("required",r.loginForm.valid),t.xp6(3),t.Q6J("@loadingAnimation",r.hasLoaded?"hide":"show"))},dependencies:[s.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100vh;overflow-y:hidden}.img[_ngcontent-%COMP%]{width:100%;height:100vh}img[_ngcontent-%COMP%]{width:100%;height:100vh;object-fit:cover}.login[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:472px;height:100vh;right:0;top:0;background:linear-gradient(180deg,rgba(255,255,255,.8) 0%,rgba(255,255,255,.9) 100%);-webkit-backdrop-filter:blur(17px);backdrop-filter:blur(17px)}.email[_ngcontent-%COMP%]{margin:20px;width:80%;height:50px;border-radius:2px;padding:10px;font-size:16px;font-weight:500;color:#000}.password[_ngcontent-%COMP%]{position:relative;width:80%;display:block;margin:20px}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px;width:100%;padding:0 15px;border-radius:2px;font-size:20px}.password[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;right:20px;top:15px;background:none;border:none}.submit[_ngcontent-%COMP%]{width:80%;height:50px;border-radius:2px;padding:10px;font-size:20px;font-weight:500;color:var(--main-color);background-color:#fff;border:none;cursor:pointer;transition:all .3s ease-in-out}.submit.required[_ngcontent-%COMP%]{background-color:var(--main-color);border:none;cursor:pointer;color:#fff;transition:all .3s ease-in-out}.submit.required[_ngcontent-%COMP%]{transition:all .3s ease-in-out;scale:1.05}.loading[_ngcontent-%COMP%]{margin-top:20px;position:relative;width:100%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:center;align-items:center}.loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{width:100%;height:100vh;overflow-y:hidden}.login[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:100%;height:100vh;background:linear-gradient(180deg,rgba(255,255,255,.8) 0%,rgba(255,255,255,.9) 100%);-webkit-backdrop-filter:blur(17px);backdrop-filter:blur(17px)}}"],data:{animation:[m.g]}}),o})()}]}];let Z=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(b),g.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,Z,n.UX,n.u5]}),o})()},8446:(c,d,e)=>{e.d(d,{g:()=>g});var s=e(6825);const g=(0,s.X$)("loadingAnimation",[(0,s.SB)("show",(0,s.oB)({opacity:1})),(0,s.SB)("hide",(0,s.oB)({opacity:0,display:"none"})),(0,s.eR)("show <=> hide",(0,s.jt)("500ms ease-in-out"))])}}]);