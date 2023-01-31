sap.ui.define(['sap/m/Text', 'sap/ui/core/mvc/XMLView'], (Text, XMLView) => {
  'use strict'

  XMLView.create({ viewName: 'sap.ui.demo.walkthrough.view.App' }).then(
    (oView) => {
      oView.placeAt('content')
    }
  )
})
