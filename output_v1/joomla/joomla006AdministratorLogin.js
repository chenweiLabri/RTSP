var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla/administrator/"));
scenario.addAction(new lib.TypeAction("#mod-login-username", "admin"));
scenario.addAction(new lib.TypeAction("#mod-login-password", "123456"));
scenario.addAction(new lib.ClickAction("#login-button"));
scenario.addAction(new lib.ClickAction("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)"));
process.send(scenario);
