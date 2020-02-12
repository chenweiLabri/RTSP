var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/dolibarr-7.0.0/htdocs/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "123456"));
scenario.addAction(new lib.ClickAction("#login_line2 > INPUT:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction('#id-left > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(8) > A:nth-child(1)'));
scenario.addAction(new lib.TypeAction("#nom", "testNewGroup"));
scenario.addAction(new lib.TypeAction("textarea", "try to test a new group. Input description"));
scenario.addAction(new lib.ClickAction('#id-right > DIV:nth-child(1) > FORM:nth-child(3) > DIV:nth-child(5) > INPUT:nth-child(1)'));
process.send(scenario);
