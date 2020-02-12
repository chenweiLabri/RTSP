var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla_3_7_0/"));
scenario.addAction(new lib.TypeAction("#modlgn-username", "admin"));
scenario.addAction(new lib.TypeAction("#modlgn-passwd", "123456"));
scenario.addAction(new lib.ClickAction("#form-login-submit > DIV:nth-child(1) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#login-form > DIV:nth-child(2) > INPUT:nth-child(1)"));
process.send(scenario);
