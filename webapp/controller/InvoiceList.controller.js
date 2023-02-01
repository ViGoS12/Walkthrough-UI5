sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/formatter',
  ],
  (Controller, JSONModel, formatter) => {
    'use strict'

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
      formatter: formatter,

      onInit: function () {
        const oViewModel = new JSONModel({
          currency: 'RUB',
        })
        this.getView().setModel(oViewModel, 'view')
      },
    })
  }
)
