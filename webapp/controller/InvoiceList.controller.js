sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
  (Controller, JSONModel) => {
    'use strict'

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
      onInit: function () {
        let oViewModel = new JSONModel({
          currency: 'RUB',
        })
        this.getView().setModel(oViewModel, 'view')
      },
    })
  }
)
