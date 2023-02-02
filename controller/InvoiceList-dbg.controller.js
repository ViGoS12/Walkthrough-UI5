sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
  ],
  (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    'use strict'

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
      formatter: formatter,

      onInit: function () {
        const oViewModel = new JSONModel({
          currency: 'RUB',
        })
        this.getView().setModel(oViewModel, 'view')
      },

      onFilterInvoices: function (oEvent) {
        const aFilter = []
        const sQuery = oEvent.getParameter('query')
        if (sQuery) {
          aFilter.push(
            new Filter('ProductName', FilterOperator.Contains, sQuery)
          )
        }

        const oList = this.byId('invoiceList')
        const oBinding = oList.getBinding('items')
        oBinding.filter(aFilter)

        const oTable = this.byId('invoiceTable')
        const oBindingTable = oTable.getBinding('items')
        oBindingTable.filter(aFilter)
      },

      onPressInfo: function (oEvent) {
        const oItem = oEvent.getSource()
        const oRouter = this.getOwnerComponent().getRouter()
        oRouter.navTo('detail', {
          invoicePath: window.encodeURIComponent(
            oItem.getBindingContext('invoice').getPath().substr(1)
          ),
        })
      },
    })
  }
)
