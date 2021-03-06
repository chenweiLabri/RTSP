var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla_3_7_0/administrator/"));
scenario.addAction(new lib.TypeAction("#mod-login-username", "admin"));
scenario.addAction(new lib.TypeAction("#mod-login-password", "123456")  );
scenario.addAction(new lib.ClickAction("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(4) > LI:nth-child(2) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#cb0"));
scenario.addAction(new lib.ClickAction("#toolbar-edit > BUTTON:nth-child(1)"));
scenario.addAction(new lib.TypeAction("#jform_title", "add new module 1"));
scenario.addAction(new lib.ClickAction("#toolbar-save > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("[data-dismiss=\"alert\"]"));
process.send(scenario);
