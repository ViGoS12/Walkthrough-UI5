sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  (UIComponent, JSONModel, ResourceModel) => {
    'use strict'

    return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
      metadata: {
        interfaces: ['sap.ui.core.IAsyncContentCreation'],
        rootView: {
          viewName: 'sap.ui.demo.walkthrough.view.App',
          type: 'XML',
          id: 'app',
        },
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments)
        let oData = {
          recipient: {
            name: 'World',
          },
        }
        let oModel = new JSONModel(oData)
        this.setModel(oModel)
        let i18nModel = new ResourceModel({
          bundleName: 'sap.ui.demo.walkthrough.i18n.i18n',
        })
        this.setModel(i18nModel, 'i18n')
      },
    })
  }
)
