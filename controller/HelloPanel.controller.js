sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/core/syncStyleClass"],(e,t,o)=>{"use strict";return e.extend("sap.ui.demo.walkthrough.controller.HelloPanel",{onClickHello:function(){const e=this.getView().getModel("i18n").getResourceBundle();const o=this.getView().getModel().getProperty("/recipient/name");const i=e.getText("helloMsg",[o]);t.show(i)},onOpenDialog:function(){if(!this.pDialog){this.pDialog=this.loadFragment({name:"sap.ui.demo.walkthrough.view.HelloDialog"}).then(function(e){o(this.getOwnerComponent().getContentDensityClass(),this.getView(),e);return e}.bind(this));this.pDialog.then(e=>{e.open()})}},onCloseDialog:function(){this.byId("helloDialog").close()}})});