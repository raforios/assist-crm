"use strict";(self.webpackChunkassistrip=self.webpackChunkassistrip||[]).push([[56],{2056:(f,i,r)=>{r.r(i),r.d(i,{PlanesModule:()=>Z});var s=r(6814),c=r(5519),t=r(8926);let p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-crear-categoria"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"crear-categoria works!"),t.qZA())}}),e})(),d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-crear-cobertura"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"crear-cobertura works!"),t.qZA())}}),e})(),u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-crear-plan"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"crear-plan works!"),t.qZA())}}),e})();var m=r(7417);function g(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td",6),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.showDetails())}),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()}if(2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.servicio),t.xp6(2),t.Oqu(n.descripcion),t.xp6(2),t.Oqu(n.precio_base),t.xp6(2),t.Oqu(n.edad_base),t.xp6(2),t.Oqu(n.edad_limite),t.xp6(2),t.Oqu(n.cobertura_global),t.xp6(2),t.Oqu(n.tiempo_limite),t.xp6(2),t.Oqu(n.cupones),t.xp6(2),t.Oqu(n.descuento),t.xp6(2),t.Oqu(n.moneda)}}const C=[{path:"planes",children:[{path:"crear-categoria",component:p},{path:"crear-cobertura",component:d},{path:"crear-plan",component:u},{path:"listado-planes",component:(()=>{class e{showDetails(){this.showComponent=!this.showComponent}constructor(n){this.servicios=n,this.listado_Servicio=[],this.showComponent=!1}ngOnInit(){this.servicios.getServicios().subscribe(n=>{this.listado_Servicio=n.filter(a=>1===a.status)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-listado-planes"]],decls:34,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"table-container"],["tableContainer",""],[4,"ngFor","ngForOf"],[1,"animated-component"],[3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2,3)(4,"table")(5,"thead")(6,"tr")(7,"th"),t._uU(8,"Servicio"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Descripcion"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Precio Base"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Edad base"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Edad limite"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Cobertura global"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Tiempo limite"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Cupones"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Descuento"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Moneda"),t.qZA()()(),t.TgZ(27,"tbody"),t.YNc(28,g,21,10,"tr",4),t.qZA()()()(),t.TgZ(29,"div",5)(30,"span"),t._uU(31,"Hola mundo"),t.qZA(),t.TgZ(32,"button",6),t.NdJ("click",function(){return a.showDetails()}),t._uU(33,"Close"),t.qZA()()()),2&n&&(t.xp6(28),t.Q6J("ngForOf",a.listado_Servicio),t.xp6(1),t.ekj("active",a.showComponent))},dependencies:[s.sg],styles:[".row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0;padding-bottom:10px;width:100%;overflow:auto}.col-12[_ngcontent-%COMP%]{width:100%;height:85vh}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:20px 0;border-bottom:1px solid var(--border-color)}table[_ngcontent-%COMP%]{width:100%;padding:30px;overflow-x:auto}.table-container[_ngcontent-%COMP%]{position:relative;max-height:85vh;overflow:auto}thead[_ngcontent-%COMP%]{position:sticky;top:0;background-color:var(--body-bg)}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:small;text-align:center;border-bottom:1px solid var(--border-color)}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;font-size:small}.animated-component[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:70vh;height:100vh;background-color:var(--body-bg);box-shadow:0 0 5px #0000004d;display:none;justify-content:center;align-items:center;z-index:10;opacity:1!important;transform:translate(100%);transition:.3s ease-in-out;max-width:100%}.animated-component.active[_ngcontent-%COMP%]{transform:translate(0);display:flex}@media only screen and (max-width: 850px){table[_ngcontent-%COMP%]{font-size:small;min-width:1000px}.table-container[_ngcontent-%COMP%]{height:80vh}}@media only screen and (max-width: 745px){.animated-component[_ngcontent-%COMP%]{width:100%;height:100vh}}"]}),e})()}]}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(C),c.Bz]}),e})();var _=r(2121);let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h,s.ez,_.D]}),e})()}}]);