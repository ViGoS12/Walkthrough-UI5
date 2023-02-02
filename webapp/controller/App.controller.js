sap.ui.define(['sap/ui/core/mvc/Controller'], (Controller) => {
  'use strict'

  return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
    onInit: function () {
      this.getView().addStyleClass(
        this.getOwnerComponent().getContentDensityClass()
      )
    },
    onOpenDialog: function () {
      if (!this.pDialog) {
        this.pDialog = this.loadFragment({
          name: 'sap.ui.demo.walkthrough.view.HelloDialog',
        })
        this.pDialog.then((oDialog) => {
          oDialog.open()
        })
      }
    },
    onCloseDialog: function () {
      this.byId('helloDialog').close()
    },
  })
})
