sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  (Controller, MessageToast, Fragment) => {
    'use strict'

    return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
      onClickHello: function () {
        let oBundle = this.getView().getModel('i18n').getResourceBundle()
        let sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name')
        let sMsg = oBundle.getText('helloMsg', [sRecipient])

        MessageToast.show(sMsg)
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
    })
  }
)
