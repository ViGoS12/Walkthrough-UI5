QUnit.config.autostart = false

sap.ui.getCore().attachInit(() => {
  'use strict'

  sap.ui.require(
    ['sap/ui/demo/walkthrough/test/integration/NavigationJourney'],
    function () {
      QUnit.start()
    }
  )
})