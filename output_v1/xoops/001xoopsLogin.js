var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/XoopsCore25-2.5.9/htdocs/index.php"));
scenario.addAction(new lib.TypeAction("#system > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > DIV:nth-child(1) > INPUT:nth-child(1)", "admin"));
scenario.addAction(new lib.TypeAction("[type=\"password\"]", "123456")  );
scenario.addAction(new lib.ClickAction("#system > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > ASIDE:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > INPUT:nth-child(6)"));
process.send(scenario);