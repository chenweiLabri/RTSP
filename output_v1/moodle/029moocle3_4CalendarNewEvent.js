var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/moodle-3.4.0/"));
scenario.addAction(new lib.ClickAction("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "ChenWei!123"));
scenario.addAction(new lib.ClickAction("#loginbtn"));
scenario.addAction(new lib.ClickAction("#nav-drawer > NAV:nth-child(1) > A:nth-child(3) > DIV:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(3)"));
process.send(scenario);
