sap.ui.define(['sap/ui/core/ComponentContainer'], (ComponentContainer) => {
  'use strict'

  new ComponentContainer({
    name: 'sap.ui.demo.walkthrough',
    settings: {
      id: 'waklthrough',
    },
    async: true,
  }).placeAt('content')
})
