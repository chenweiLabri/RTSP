var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/dolibarr-7.0.0/htdocs/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "123456"));
scenario.addAction(new lib.ClickAction("#login_line2 > INPUT:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(11) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction('#proxy'));
scenario.addAction(new lib.TypeAction('[name="MAIN_USE_CONNECT_TIMEOUT"]', "10"));
scenario.addAction(new lib.ClickAction('[name="button"]'));
process.send(scenario);
