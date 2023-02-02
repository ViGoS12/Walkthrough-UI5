sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/actions/Press"],(e,o)=>{"use strict";const t="sap.ui.demo.walkthrough.view.HelloPanel";e.createPageObjects({onTheAppPage:{actions:{iPressTheSayHelloWithDialogButton:function(){return this.waitFor({id:"helloDialogButton",viewName:t,actions:new o,errorMessage:"Did not find the 'Say Hello With Dialog' button on the HelloPanel view"})}},assertions:{iShouldSeeTheHelloDialog:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(){e.assert.ok(true,"The dialog is open")},errorMessage:"Did not find the dialog control"})}}}})});