sap.ui.define(
  ['sap/ui/core/UIComponent', 'sap/ui/model/json/JSONModel', 'sap/ui/Device'],
  (UIComponent, JSONModel, Device) => {
    'use strict'

    return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
      metadata: {
        interfaces: ['sap.ui.core.IAsyncContentCreation'],
        manifest: 'json',
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments)
        const oData = {
          recipient: {
            name: 'World!',
          },
        }
        const oModel = new JSONModel(oData)
        this.setModel(oModel)

        const oDeviceModel = new JSONModel(Device)
        oDeviceModel.setDefaultBindingMode('OneWay')
        this.setModel(oDeviceModel, 'device')

        this.getRouter().initialize()
      },

      getContentDensityClass: function () {
        if (!this._sContentDensityClass) {
          if (!Device.support.touch) {
            this._sContentDensityClass = 'sapUiSizeCompact'
          } else {
            this._sContentDensityClass = 'sapUiSizeCozy'
          }
        }
        return this._sContentDensityClass
      },
    })
  }
)
