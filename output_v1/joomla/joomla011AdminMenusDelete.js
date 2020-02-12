var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla/administrator/"));
scenario.addAction(new lib.TypeAction("#mod-login-username", "admin"));
scenario.addAction(new lib.TypeAction("#mod-login-password", "123456")  );
scenario.addAction(new lib.ClickAction("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(4) > LI:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#cb0"));
scenario.addAction(new lib.ClickAction("#toolbar-delete > BUTTON:nth-child(1)"));
process.send(scenario);
