var Nightmare = require("nightmare");
var lib = require("wat_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/moodle-3.4.5/"));
scenario.addAction(new lib.ClickAction("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "TestMoodle$100"));
scenario.addAction(new lib.ClickAction("#loginbtn"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(2) > ASIDE:nth-child(1) > ASIDE:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > SPAN:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(3) > A:nth-child(1)"));
scenario.addAction(new lib.TypeAction("#id_subject", "testEntry title"));
scenario.addAction(new lib.TypeAction("#id_summary_editoreditable", "test blog body"));
scenario.addAction(new lib.ClickAction("#id_submitbutton"));
process.send(scenario);
