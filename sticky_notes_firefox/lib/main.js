// This is the main background script that will run in the Firefox extension
// The script runs once, every time Firefox is started.

var background = require("./shared/background").background;

// !!!! Cannot use Jquery in this page in firefox (logic because there is no DOM)
// So no $.on(ready)
  background.setUpScripts();

  // Hard to adapt
  // background.setupListeners();
  // Maybe : background.setupScriptsAndMessagingRules(message rules, command rules);
  // Who will then call browser.setupScriptsAndMessaging

