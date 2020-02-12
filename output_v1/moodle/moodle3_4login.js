var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/moodle-3.4.0/"));
scenario.addAction(new lib.ClickAction("#yui_3_17_2_1_1553508179757_19"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "ChenWei!123"));
scenario.addAction(new lib.ClickAction("#loginbtn"));
process.send(scenario);
