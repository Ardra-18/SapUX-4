sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
  ], function (Controller, Fragment) {
    "use strict";
  
    return Controller.extend("yournamespace.controller.Main", {
      onInit: function () {
        // Load JS Fragment
        Fragment.load({
          name: "yournamespace.fragments.jsFragment",
          controller: this
        }).then(function (oFragment) {
          this.getView().addDependent(oFragment);
        }.bind(this));
      },
      onCancelPress: function () {
        this.byId("registrationDialog").close();
      },
      
      onLoginPress: function () {
        // Add logic for handling login
        this.byId("registrationDialog").close();
      },
      // Your other controller logic goes here
    });
  });
  