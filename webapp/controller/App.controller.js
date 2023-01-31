sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
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

        let i18nModel = new ResourceModel({
          bundleName: 'sap.ui.demo.walkthrough.i18n.i18n',
        })
        this.getView().setModel(i18nModel, 'i18n')
      },

      onClickHello: function () {
        let oBundle = this.getView().getModel('i18n').getResourceBundle()
        let sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name')
        let sMsg = oBundle.getText('helloMsg', [sRecipient])

        MessageToast.show(sMsg)
      },
    })
  }
)
