var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla_3_7_0/administrator/"));
scenario.addAction(new lib.TypeAction("#mod-login-username", "admin"));
scenario.addAction(new lib.TypeAction("#mod-login-password", "123456")  );
scenario.addAction(new lib.ClickAction("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(2) > A:nth-child(1) > SPAN:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#articleList > TBODY:nth-child(3) > TR:nth-child(1) > TD:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(3)"));
scenario.addAction(new lib.ClickAction("#articleList > TBODY:nth-child(3) > TR:nth-child(1) > TD:nth-child(3) > DIV:nth-child(1) > UL:nth-child(4) > LI:nth-child(2) > A:nth-child(1)"));
process.send(scenario);
