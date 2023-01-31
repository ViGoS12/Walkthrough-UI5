sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
  ],
  (Controller, MessageToast, JSONModel) => {
    'use strict'

    return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
      // Стрелочные не имеют своего this.
      onInit: function () {
        let oData = {
          recipient: {
            name: 'World!',
          },
        }
        let oModel = new JSONModel(oData)
        this.getView().setModel(oModel)
      },

      onClickHello: () => {
        MessageToast.show('Hello World!')
      },
    })
  }
)
