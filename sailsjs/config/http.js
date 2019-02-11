const express = require("express");
const appJs = require("../../expressjs/app");

module.exports.http = {

  middleware: {
    order: [
      "expressHook"
    ],

    expressHook: (function() {
      const appWrapper = express();
      const appJsMigrateInstance = appJs();
      appWrapper.use(appJsMigrateInstance);
      return appWrapper;
    })()
  }
};
