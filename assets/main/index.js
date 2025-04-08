System.register("chunks:///_virtual/DropDown.ts",["./rollupPluginModLoBabelHelpers.js","cc","./WindowContent.ts"],(function(n){var t,i,o,e,s,r,a,l,p,c,u,h,g;return{setters:[function(n){t=n.applyDecoratedDescriptor,i=n.inheritsLoose,o=n.initializerDefineProperty,e=n.assertThisInitialized},function(n){s=n.cclegacy,r=n._decorator,a=n.Label,l=n.Node,p=n.Button,c=n.Vec3,u=n.Tween,h=n.Component},function(n){g=n.default}],execute:function(){var d,f,w,m,v,O,y,C,b;s._RF.push({},"4de6e3gLBhEEJi/mQFx37BW","DropDown",void 0);var D=r.ccclass,L=r.property;n("default",(d=D("DropdownMenu"),f=L({type:a,tooltip:"Opção selecionada"}),w=L({type:l,tooltip:"Outras opções"}),m=L(g),d((y=t((O=function(n){function t(){for(var t,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return t=n.call.apply(n,[this].concat(s))||this,o(t,"mainOption",y,e(t)),o(t,"options",C,e(t)),o(t,"windowContent",b,e(t)),t.isOpen=!1,t.isAnimating=!1,t}i(t,n);var s=t.prototype;return s.onLoad=function(){var n=this;this.options&&(this.options.active=!1,this.options.children.forEach((function(t){var i,o=t.getComponent(p),e=null==(i=t.getChildByName("Label"))?void 0:i.getComponent(a);o&&e&&o.node.on(p.EventType.CLICK,(function(){return n.selectionMade(e)}),n)}))),this.setInitialSelection()},s.setInitialSelection=function(){this.mainOption&&(this.mainOption.string="glóbulo vermelho"),this.windowContent&&this.windowContent.selectionChange("glóbulo vermelho")},s.toggleDropdown=function(){var n=this;if(!this.isAnimating&&this.options){this.isOpen=!this.isOpen,this.options.active=!0;var t=this.isOpen?new c(1,1,1):new c(.9,.9,.9);new u(this.options).to(.2,{scale:t}).call((function(){n.isOpen||(n.options.active=!1),n.isAnimating=!1})).start()}},s.closeDropdown=function(){this.isOpen&&this.toggleDropdown()},s.selectionMade=function(n){if(this.mainOption&&this.windowContent){var t=this.mainOption.string;this.mainOption.string=n.string,n.string=t,this.windowContent.selectionChange(this.mainOption.string),this.toggleDropdown()}},t}(h)).prototype,"mainOption",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(O.prototype,"options",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(O.prototype,"windowContent",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=O))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Spawner.ts"],(function(e){var t,r,n,i,a,o,c,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.Component},function(e){s=e.default}],execute:function(){var l,p,u,f,d;a._RF.push({},"59212C5D3pC77C/KSWMdbLM","GameCtrl",void 0);var y=o.ccclass,h=o.property;e("default",(l=y("Game"),p=h({type:s,tooltip:"Referência ao script de spawn de entidades"}),l((d=t((f=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,n(t,"spawner",d,i(t)),t}r(t,e);var a=t.prototype;return a.start=function(){this.spawner.initialize()},a.onLoad=function(){},t}(c)).prototype,"spawner",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=f))||u));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./DropDown.ts","./GameCtrl.ts","./Menu.ts","./PathFinding.ts","./Points.ts","./PopUpWindow.ts","./PopulationBoard.ts","./RbcManager.ts","./ScriptRBC.ts","./ScriptVirus.ts","./ScriptWBC.ts","./Spawner.ts","./VirusManager.ts","./WbcManager.ts","./WindowContent.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Menu.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,i,o,l,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.Label,u=e.Component}],execute:function(){var c,p,s,f,b,h;o._RF.push({},"db54fuhTTRFSrcuhLDiNFnE","Menu",void 0);var y=l.ccclass,d=l.property;e("default",(c=y("Menu"),p=d(a),c((b=t((f=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,n(t,"label",b,i(t)),n(t,"text",h,i(t)),t}return r(t,e),t.prototype.start=function(){},t}(u)).prototype,"label",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=t(f.prototype,"text",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"hello"}}),s=f))||s));o._RF.pop()}}}));

System.register("chunks:///_virtual/PathFinding.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,i,r,e;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,r=t._decorator,e=t.Component}],execute:function(){var o;i._RF.push({},"57452RG45FGUKv6aw3is9BD","PathFinding",void 0);var c=r.ccclass;r.property,t("PathFinding",c("PathFinding")(o=function(t){function i(){return t.apply(this,arguments)||this}n(i,t);var r=i.prototype;return r.start=function(){},r.update=function(t){},i}(e))||o);i._RF.pop()}}}));

System.register("chunks:///_virtual/Points.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,i,o,s,e,r,p,a,c;return{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,s=t.assertThisInitialized,e=t.createClass},function(t){r=t.cclegacy,p=t._decorator,a=t.Label,c=t.Component}],execute:function(){var u,l,h,f,b;r._RF.push({},"d94cb2e+wNP8qYF2gpMIrOo","Points",void 0);var y=p.ccclass,P=p.property;t("Points",(u=y("Points"),l=P({type:a,tooltip:"Label para exibir os pontos"}),u((b=n((f=function(t){function n(){for(var n,i=arguments.length,e=new Array(i),r=0;r<i;r++)e[r]=arguments[r];return n=t.call.apply(t,[this].concat(e))||this,o(n,"pointsLabel",b,s(n)),n._points=0,n}i(n,t);var r=n.prototype;return r.start=function(){this.points=10},r.addPoints=function(t){this.points=this._points+t},r.subtractPoints=function(t){return this._points>=t&&(this.points=this._points-t,!0)},r.canSpendPoint=function(){return this._points>0},e(n,[{key:"points",get:function(){return this._points},set:function(t){this._points=t,this.pointsLabel.string="Pontos: "+t.toString()}}]),n}(c)).prototype,"pointsLabel",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=f))||h));r._RF.pop()}}}));

System.register("chunks:///_virtual/PopulationBoard.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,i,e,n,o,a,u,l;return{setters:[function(t){r=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,u=t.Label,l=t.Component}],execute:function(){var s,c,b,p,g,d,h,f,v;o._RF.push({},"f3f761CSpJPobhDdZNlQj0g","PopulationBoard",void 0);var C=a.ccclass,L=a.property;t("default",(s=C("PopulationBoard"),c=L({type:u,tooltip:"Node da contagem de vírus"}),b=L({type:u,tooltip:"Node da contagem de RBCs"}),p=L({type:u,tooltip:"Node da contagem de WBCs"}),s((h=r((d=function(t){function r(){for(var r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o))||this,e(r,"virusLabel",h,n(r)),e(r,"rbcLabel",f,n(r)),e(r,"wbcLabel",v,n(r)),r.virusCount=0,r.rbcCount=0,r.wbcCount=0,r}i(r,t);var o=r.prototype;return o.addCount=function(t){"virus"===t?this.virusLabel.string=(this.virusCount++).toString():"RBC"===t?this.rbcLabel.string=(this.rbcCount++).toString():this.wbcLabel.string=(this.wbcCount++).toString()},o.removeCount=function(t){"virus"===t?this.virusLabel.string=(this.virusCount--).toString():"RBC"===t?this.rbcLabel.string=(this.rbcCount--).toString():this.wbcLabel.string=(this.wbcCount--).toString()},r}(l)).prototype,"virusLabel",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=r(d.prototype,"rbcLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=r(d.prototype,"wbcLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=d))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/PopUpWindow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,i,e,o,a,s,c;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,e=t._decorator,o=t.Vec3,a=t.UIOpacity,s=t.Tween,c=t.Component}],execute:function(){var p;i._RF.push({},"ff3228rtPpJRYYqQzVqs25b","PopUpWindow",void 0);var u=e.ccclass;t("default",u("PopUpWindow")(p=function(t){function i(){for(var n,i=arguments.length,e=new Array(i),o=0;o<i;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this).isOpen=!1,n.isAnimating=!1,n.uiOpacity=null,n.tweenOpacity=null,n.tweenScale=null,n}n(i,t);var e=i.prototype;return e.onLoad=function(){this.node.active=!1,this.node.setScale(new o(.2,.2,.2)),this.uiOpacity=this.node.getComponent(a)||this.node.addComponent(a),this.uiOpacity.opacity=0,this.node.setSiblingIndex(this.node.parent.children.length-1)},e.animateWindow=function(t){var n,i,e=this;if(!this.isAnimating&&this.isOpen!==t){this.isAnimating=!0,this.isOpen=t,this.node.active=!0;var a=t?255:0,c=t?new o(1,1,1):new o(.2,.2,.2);null==(n=this.tweenOpacity)||n.stop(),null==(i=this.tweenScale)||i.stop(),this.tweenOpacity=new s(this.uiOpacity).to(.5,{opacity:a},{easing:"quartInOut"}).start(),this.tweenScale=new s(this.node).to(.5,{scale:c},{easing:"quartInOut"}).call((function(){t||(e.node.active=!1),e.isAnimating=!1})).start()}},e.Show_Window=function(){this.animateWindow(!0)},e.Hide_Window=function(){this.animateWindow(!1)},e.Choice_clicked=function(){this.Hide_Window()},i}(c))||p);i._RF.pop()}}}));

System.register("chunks:///_virtual/RbcManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Points.ts"],(function(e){var t,n,i,a,r,o,s,l,u,c,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized,r=e.createClass},function(e){o=e.cclegacy,s=e._decorator,l=e.Label,u=e.EventTarget,c=e.Component},function(e){h=e.Points}],execute:function(){var p,g,b,d,f,V,y,L,_,R,v,P,m;o._RF.push({},"cc9a2OcZ7BH4oet9K5jsA5d","RbcManager",void 0);var C=s.ccclass,w=s.property;e("default",(p=C("RbcManager"),g=w(l),b=w(l),d=w(l),f=w(l),V=w(h),p((_=t((L=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,i(t,"healthLabel",_,a(t)),i(t,"speedLabel",R,a(t)),i(t,"resistanceLabel",v,a(t)),i(t,"reproductionRateLabel",P,a(t)),i(t,"points",m,a(t)),t._heatlhValue=0,t._speedValue=0,t._resistanceValue=0,t._reproductionRateValue=0,t.onVariableChangeEventTarget=new u,t}n(t,e);var o=t.prototype;return o.onLoad=function(){this.healthValue=20,this.speedValue=2,this.resistanceValue=4,this.reproductionRateValue=5},o.addPoint=function(e,t){this.points&&this.points.canSpendPoint()?(this[t]++,this.points.subtractPoints(1)):console.log("Pontos insuficientes para adicionar em",t)},o.removePoint=function(e,t){this[t]>0&&(this[t]--,this.points.addPoints(1))},r(t,[{key:"healthValue",get:function(){return this._heatlhValue},set:function(e){this._heatlhValue=e,this.healthLabel.string="Saúde: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}},{key:"speedValue",get:function(){return this._speedValue},set:function(e){this._speedValue=e,this.speedLabel.string="Velocidade: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}},{key:"resistanceValue",get:function(){return this._resistanceValue},set:function(e){this._resistanceValue=e,this.resistanceLabel.string="Resistência: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}},{key:"reproductionRateValue",get:function(){return this._reproductionRateValue},set:function(e){this._reproductionRateValue=e,this.reproductionRateLabel.string="Reprodução: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}}]),t}(c)).prototype,"healthLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(L.prototype,"speedLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(L.prototype,"resistanceLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(L.prototype,"reproductionRateLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(L.prototype,"points",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=L))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/ScriptRBC.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,a,c,l,u,p,s,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.SpriteFrame,l=e.Collider2D,u=e.Contact2DType,p=e.PhysicsSystem2D,s=e.Sprite,f=e.Component}],execute:function(){var b,d,h,y,g,m,C,S,z,B,v,w;o._RF.push({},"720d81Otd9GarXZK8XTd0Kk","ScriptRBC",void 0);var R=a.ccclass,T=a.property;e("default",(b=R("ScriptRBC"),d=T(c),h=T(c),b((m=t((g=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"health",m,n(t)),r(t,"speed",C,n(t)),r(t,"resistance",S,n(t)),r(t,"reproductionRate",z,n(t)),r(t,"infected",B,n(t)),r(t,"infectedSprite",v,n(t)),r(t,"normalSprite",w,n(t)),t}i(t,e);var o=t.prototype;return o.start=function(){var e=this.getComponent(l);e&&e.on(u.BEGIN_CONTACT,this.onBeginContact,this),p.instance&&p.instance.on(u.BEGIN_CONTACT,this.onBeginContact,this)},o.onBeginContact=function(e,t,i){3==t.tag&&(this.infected=!0,this.getComponent(s).spriteFrame=this.infectedSprite)},t}(f)).prototype,"health",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),C=t(g.prototype,"speed",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),S=t(g.prototype,"resistance",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),z=t(g.prototype,"reproductionRate",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),B=t(g.prototype,"infected",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v=t(g.prototype,"infectedSprite",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(g.prototype,"normalSprite",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/ScriptVirus.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,i,o,a,c,s,u,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,c=t.Collider2D,s=t.Contact2DType,u=t.PhysicsSystem2D,l=t.Component}],execute:function(){var p,f,h,y,b,g,d;o._RF.push({},"8da42DAIp1G1KEUmlBLcZ4L","ScriptVirus",void 0);var C=a.ccclass,m=a.property;t("default",C("scriptV")((h=e((f=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,r(e,"health",h,i(e)),r(e,"speed",y,i(e)),r(e,"strength",b,i(e)),r(e,"resistance",g,i(e)),r(e,"reproductionRate",d,i(e)),e}n(e,t);var o=e.prototype;return o.start=function(){var t=this.getComponent(c);t&&t.on(s.BEGIN_CONTACT,this.onBeginContact,this),u.instance&&u.instance.on(s.BEGIN_CONTACT,this.onBeginContact,this)},o.onBeginContact=function(t,e,n){2==e.tag&&this.node.destroy()},e}(l)).prototype,"health",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=e(f.prototype,"speed",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=e(f.prototype,"strength",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),g=e(f.prototype,"resistance",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),d=e(f.prototype,"reproductionRate",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=f))||p);o._RF.pop()}}}));

System.register("chunks:///_virtual/ScriptWBC.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,a,c,l,u,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Collider2D,l=e.Contact2DType,u=e.PhysicsSystem2D,s=e.Component}],execute:function(){var p,f,h,b,y,g,C;o._RF.push({},"b620cl8SLVOD6yDOezDb50q","ScriptWBC",void 0);var d=a.ccclass,m=a.property;e("default",d("ScriptWBC")((h=t((f=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"health",h,i(t)),r(t,"speed",b,i(t)),r(t,"strength",y,i(t)),r(t,"resistance",g,i(t)),r(t,"reproductionRate",C,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){var e=this.getComponent(c);e&&e.on(l.BEGIN_CONTACT,this.onBeginContact,this),u.instance&&u.instance.on(l.BEGIN_CONTACT,this.onBeginContact,this)},o.onBeginContact=function(e,t,n){},t}(s)).prototype,"health",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=t(f.prototype,"speed",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=t(f.prototype,"strength",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),g=t(f.prototype,"resistance",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),C=t(f.prototype,"reproductionRate",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=f))||p);o._RF.pop()}}}));

System.register("chunks:///_virtual/Spawner.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScriptVirus.ts","./ScriptRBC.ts","./ScriptWBC.ts","./VirusManager.ts","./WbcManager.ts","./RbcManager.ts","./PopulationBoard.ts"],(function(e){var t,i,r,a,n,o,s,u,l,c,h,p,d,g,f,b,w,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,o=e._decorator,s=e.Prefab,u=e.view,l=e.instantiate,c=e.Vec3,h=e.Component},function(e){p=e.default},function(e){d=e.default},function(e){g=e.default},function(e){f=e.default},function(e){b=e.default},function(e){w=e.default},function(e){v=e.default}],execute:function(){var M,C,R,B,y,V,P,S,m,z,W,E,D,T,N,_,k;n._RF.push({},"ff03cM9pSdH05rFZNBmPPiu","Spawner",void 0);var F=o.ccclass,x=o.property;e("default",(M=F("Spawner"),C=x({type:s,tooltip:"Prefab da entidade vírus"}),R=x({type:s,tooltip:"Prefab da entidade RBC"}),B=x({type:s,tooltip:"Prefab da entidade WBC"}),y=x({type:f,tooltip:"Node do Virus manager"}),V=x({type:w,tooltip:"Node do Rbc manager"}),P=x({type:b,tooltip:"Node do Wbc manager"}),S=x({type:v,tooltip:"Node do Rbc manager"}),M((W=t((z=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,r(t,"virusPrefab",W,a(t)),r(t,"RBCPrefab",E,a(t)),r(t,"WBCPrefab",D,a(t)),r(t,"virusManager",T,a(t)),r(t,"rbcManager",N,a(t)),r(t,"wbcManager",_,a(t)),r(t,"populationBoard",k,a(t)),t.cellSize=30,t.cols=void 0,t.rows=void 0,t.occupiedPositions=new Set,t.spawnMargin=1,t.reproductionRateDivider=10,t}i(t,e);var n=t.prototype;return n.initialize=function(){var e=this,t=u.getVisibleSize();this.cols=Math.floor(t.width/this.cellSize),this.rows=Math.floor(t.height/this.cellSize),this.reserveTopRightBlock(),this.setupEntityReproductionRate(),this.virusManager.onVariableChangeEventTarget.on("onPropertyChange",(function(){e.unregisterSchedulers(),e.registerSchedulers()}),this),this.rbcManager.onVariableChangeEventTarget.on("onPropertyChange",(function(){e.unregisterSchedulers(),e.registerSchedulers()}),this),this.wbcManager.onVariableChangeEventTarget.on("onPropertyChange",(function(){e.unregisterSchedulers(),e.registerSchedulers()}),this)},n.registerSchedulers=function(){this.schedule(this.spawnVirus,this.reproductionRateDivider/this.virusManager.reproductionRateValue),this.schedule(this.spawnRBC,this.reproductionRateDivider/this.rbcManager.reproductionRateValue),this.schedule(this.spawnWBC,this.reproductionRateDivider/this.wbcManager.reproductionRateValue)},n.unregisterSchedulers=function(){this.unschedule(this.spawnVirus),this.unschedule(this.spawnRBC),this.unschedule(this.spawnWBC)},n.reserveTopRightBlock=function(){for(var e=this.cols-5,t=this.rows-5,i=e;i<this.cols;i++)for(var r=t;r<this.rows;r++){var a=i+","+r;this.occupiedPositions.add(a)}},n.setupEntityReproductionRate=function(){var e=l(this.virusPrefab).getComponent(p);e&&(this.virusManager.reproductionRateValue=e.reproductionRate,this.populationBoard.addCount("virus"));var t=l(this.RBCPrefab).getComponent(d);t&&(this.rbcManager.reproductionRateValue=t.reproductionRate,this.populationBoard.addCount("RBC"));var i=l(this.WBCPrefab).getComponent(g);i&&(this.wbcManager.reproductionRateValue=i.reproductionRate,this.populationBoard.addCount("WBC")),this.registerSchedulers()},n.spawnVirus=function(){this.spawnEntity(this.virusPrefab,"virus")},n.spawnRBC=function(){this.spawnEntity(this.RBCPrefab,"RBC")},n.spawnWBC=function(){this.spawnEntity(this.WBCPrefab,"WBC")},n.spawnEntity=function(e,t){if(this.occupiedPositions.size>=this.cols*this.rows)return this.unregisterSchedulers(),void console.log("Todos os espaços foram preenchidos.");var i,r,a,n=this.spawnMargin,o=this.cols-this.spawnMargin-1,s=this.spawnMargin,u=this.rows-this.spawnMargin-1;do{a=(i=Math.floor(Math.random()*(o-n+1))+n)+","+(r=Math.floor(Math.random()*(u-s+1))+s)}while(this.occupiedPositions.has(a)||i===this.cols-1&&r===this.rows-1);this.occupiedPositions.add(a);var h=i*this.cellSize-this.cols*this.cellSize/2+this.cellSize/2,f=r*this.cellSize-this.rows*this.cellSize/2+this.cellSize/2,b=l(e);if("virus"===t){var w=b.getComponent(p);w.health=this.virusManager.healthValue,w.speed=this.virusManager.speedValue,w.strength=this.virusManager.strengthValue,w.resistance=this.virusManager.resistanceValue,w.reproductionRate=this.virusManager.reproductionRateValue,this.populationBoard.addCount(t)}else if("RBC"===t){var v=b.getComponent(d);v.health=this.rbcManager.healthValue,v.speed=this.rbcManager.speedValue,v.resistance=this.rbcManager.resistanceValue,v.reproductionRate=this.rbcManager.reproductionRateValue,this.populationBoard.addCount(t)}else if("WBC"===t){var M=b.getComponent(g);M.health=this.wbcManager.healthValue,M.speed=this.wbcManager.speedValue,M.strength=this.wbcManager.strengthValue,M.resistance=this.wbcManager.resistanceValue,M.reproductionRate=this.wbcManager.reproductionRateValue,this.populationBoard.addCount(t)}b.setPosition(new c(h,f,0)),this.node.addChild(b),b.setSiblingIndex(0)},t}(h)).prototype,"virusPrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(z.prototype,"RBCPrefab",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(z.prototype,"WBCPrefab",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(z.prototype,"virusManager",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=t(z.prototype,"rbcManager",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(z.prototype,"wbcManager",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(z.prototype,"populationBoard",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=z))||m));n._RF.pop()}}}));

System.register("chunks:///_virtual/VirusManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Points.ts"],(function(e){var t,n,i,r,a,o,s,l,u,h,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized,a=e.createClass},function(e){o=e.cclegacy,s=e._decorator,l=e.Label,u=e.EventTarget,h=e.Component},function(e){c=e.Points}],execute:function(){var p,g,b,f,d,V,y,L,_,m,v,P,C,R,z;o._RF.push({},"6da4fGUOd5IzZ8j4KlDjm2X","VirusManager",void 0);var w=s.ccclass,S=s.property;e("default",(p=w("VirusManager"),g=S(l),b=S(l),f=S(l),d=S(l),V=S(l),y=S(c),p((m=t((_=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"healthLabel",m,r(t)),i(t,"speedLabel",v,r(t)),i(t,"strengthLabel",P,r(t)),i(t,"resistanceLabel",C,r(t)),i(t,"reproductionRateLabel",R,r(t)),i(t,"points",z,r(t)),t._healthValue=0,t._speedValue=0,t._strengthValue=0,t._resistanceValue=0,t._reproductionRateValue=0,t.onVariableChangeEventTarget=new u,t}n(t,e);var o=t.prototype;return o.onLoad=function(){this.healthValue=5,this.speedValue=10,this.strengthValue=5,this.resistanceValue=2,this.reproductionRateValue=2},o.addPoint=function(e,t){this.points&&this.points.canSpendPoint()?(this[t]++,this.points.subtractPoints(1)):console.log("Pontos insuficientes para adicionar em",t)},o.removePoint=function(e,t){this[t]>0&&(this[t]--,this.points.addPoints(1))},a(t,[{key:"healthValue",get:function(){return this._healthValue},set:function(e){this._healthValue=e,this.healthLabel.string="Saúde: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}},{key:"speedValue",get:function(){return this._speedValue},set:function(e){this._speedValue=e,this.speedLabel.string="Velocidade: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}},{key:"strengthValue",get:function(){return this._strengthValue},set:function(e){this._strengthValue=e,this.strengthLabel.string="Força: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}},{key:"resistanceValue",get:function(){return this._resistanceValue},set:function(e){this._resistanceValue=e,this.resistanceLabel.string="Resistência: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}},{key:"reproductionRateValue",get:function(){return this._reproductionRateValue},set:function(e){this._reproductionRateValue=e,this.reproductionRateLabel.string="Reprodução: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}}]),t}(h)).prototype,"healthLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(_.prototype,"speedLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(_.prototype,"strengthLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(_.prototype,"resistanceLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(_.prototype,"reproductionRateLabel",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(_.prototype,"points",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=_))||L));o._RF.pop()}}}));

System.register("chunks:///_virtual/WbcManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Points.ts"],(function(e){var t,n,i,r,a,o,s,l,u,c,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized,a=e.createClass},function(e){o=e.cclegacy,s=e._decorator,l=e.Label,u=e.EventTarget,c=e.Component},function(e){h=e.Points}],execute:function(){var p,g,b,f,d,V,y,L,_,v,R,m,P,w,z;o._RF.push({},"e1d48uE7jtHQpbucvyrJ7nN","WbcManager",void 0);var S=s.ccclass,k=s.property;e("default",(p=S("WbcManager"),g=k(l),b=k(l),f=k(l),d=k(l),V=k(l),y=k(h),p((v=t((_=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"healthLabel",v,r(t)),i(t,"speedLabel",R,r(t)),i(t,"strengthLabel",m,r(t)),i(t,"resistanceLabel",P,r(t)),i(t,"reproductionRateLabel",w,r(t)),i(t,"points",z,r(t)),t._heatlhValue=0,t._speedValue=0,t._strengthValue=0,t._resistanceValue=0,t._reproductionRateValue=0,t.onVariableChangeEventTarget=new u,t}n(t,e);var o=t.prototype;return o.onLoad=function(){this.healthValue=20,this.speedValue=2,this.strengthValue=2,this.resistanceValue=10,this.reproductionRateValue=5},o.addPoint=function(e,t){this.points&&this.points.canSpendPoint()?(this[t]++,this.points.subtractPoints(1)):console.log("Pontos insuficientes para adicionar em",t)},o.removePoint=function(e,t){this[t]>0&&(this[t]--,this.points.addPoints(1))},a(t,[{key:"healthValue",get:function(){return this._heatlhValue},set:function(e){this._heatlhValue=e,this.healthLabel.string="Saúde: "+e.toString()}},{key:"speedValue",get:function(){return this._speedValue},set:function(e){this._speedValue=e,this.speedLabel.string="Velocidade: "+e.toString()}},{key:"strengthValue",get:function(){return this._strengthValue},set:function(e){this._strengthValue=e,this.strengthLabel.string="Força: "+e.toString()}},{key:"resistanceValue",get:function(){return this._resistanceValue},set:function(e){this._resistanceValue=e,this.resistanceLabel.string="Resistência: "+e.toString()}},{key:"reproductionRateValue",get:function(){return this._reproductionRateValue},set:function(e){this._reproductionRateValue=e,this.reproductionRateLabel.string="Reprodução: "+e.toString(),this.onVariableChangeEventTarget.emit("onPropertyChange",e)}}]),t}(c)).prototype,"healthLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(_.prototype,"speedLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(_.prototype,"strengthLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(_.prototype,"resistanceLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(_.prototype,"reproductionRateLabel",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(_.prototype,"points",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=_))||L));o._RF.pop()}}}));

System.register("chunks:///_virtual/WindowContent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,r,t,i,a,o,c,l;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.Node,l=e.Component}],execute:function(){var u,s,g,p,b,h,f,v,M;a._RF.push({},"69089FN9RNLz7pB4j0Iuhpc","WindowContent",void 0);var d=o.ccclass,w=o.property;e("default",(u=d("WindowContent"),s=w(c),g=w(c),p=w(c),u((f=n((h=function(e){function n(){for(var n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,t(n,"virusManager",f,i(n)),t(n,"wbcManager",v,i(n)),t(n,"rbcManager",M,i(n)),n}r(n,e);var a=n.prototype;return a.onLoad=function(){this.selectionChange("glóbulo vermelho")},a.selectionChange=function(e){this.virusManager&&(this.virusManager.active="vírus"===e),this.wbcManager&&(this.wbcManager.active="glóbulo branco"===e),this.rbcManager&&(this.rbcManager.active="glóbulo vermelho"===e)},n}(l)).prototype,"virusManager",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(h.prototype,"wbcManager",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(h.prototype,"rbcManager",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=h))||b));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});