const File = require('./File.js').File;
var childProcess = require('child_process');

//=======================================================================================

// const fileName = '/joomla/' + 'joomla000exampleinPaper.js'; 
const fileName = '/joomla/' + 'joomla001Login.js'; 
// const fileName = '/joomla/' + 'joomla002PopularTags.js'; 
// const fileName = '/joomla/' + 'joomla003LatestArticles.js'; 
// const fileName = '/joomla/' + 'joomla004UserYourProfile.js'; 
// const fileName = '/joomla/' + 'joomla005UserSubmitAnArticle.js'; 
// const fileName = '/joomla/' + 'joomla006LinkToAdministratorAndLogOut.js'; 
// const fileName = '/joomla/' + 'joomla007AdministratorLogin.js'; 
// const fileName = '/joomla/' + 'joomla008AdministratorNewArticle.js'; 
// const fileName = '/joomla/' + 'joomla009AdministrationArticleDelete.js';

// const fileName = '/joomla/' + 'joomla010AdminMenusAdd.js'; 
// const fileName = '/joomla/' + 'joomla011AdminMenusEdit.js';
 
// const fileName = '/joomla/' + 'joomla012AdminAddNewModule.js'; 
// const fileName = '/joomla/' + 'joomla013AdminDeleteModule.js'; 
// const fileName = '/joomla/' + 'joomla014AdminEditModule.js';
// const fileName = '/joomla/' + 'joomla015AdministratorNewArticleCancel.js'; 
// const fileName = '/joomla/' + 'joomla016AdministratorArticlePublish.js'; 
// const fileName = '/joomla/' + 'joomla017AdministratorArticleUnpublish.js'; 
// const fileName = '/joomla/' + 'joomla018AdministratorArticleFeature.js'; 
// const fileName = '/joomla/' + 'joomla019AdministratorArticleUnfeature.js'; 
// const fileName = '/joomla/' + 'joomla020AdministratorArticleArchive.js'; 
// const fileName = '/joomla/' + 'joomla021AdministratorArticleCheckin.js'; 
// const fileName = '/joomla/' + 'joomla022AdministratorCategories.js'; 
// const fileName = '/joomla/' + 'joomla023AdministratorCategoriesEdit.js'; 

// const fileName = '/joomla/' + 'joomla024AdministratorCategoriesNew.js'; 
// const fileName = '/joomla/' + 'joomla025AdministratorCategoriesEditButton.js'; 
// const fileName = '/joomla/' + 'joomla026AdministratorCategoriesPublish.js'; 
// const fileName = '/joomla/' + 'joomla027AdministratorCategoriesUnpublish.js'; 
// const fileName = '/joomla/' + 'joomla028AdministratorCategoriesCheckIn.js'; 
// const fileName = '/joomla/' + 'joomla029AdministratorMenuAddSaveAndClose.js'; 
// const fileName = '/joomla/' + 'joomla030AdministratorUserList.js';
// const fileName = '/joomla/' + 'joomla031AdministratorUserAdd.js';
// const fileName = '/joomla/' + 'joomla032AdministratorUserEdit.js';
// const fileName = '/joomla/' + 'joomla033AdministratorUserBlock.js';
// const fileName = '/joomla/' + 'joomla034AdministratorUserUnblock.js';

//=======================================================================================


//=======================================================================================
// const fileName = '/moodle/' + '001moodle3_4login.js';
// const fileName = '002moodle3_4EditProfile.js'; //slow
// const fileName = '003moodle3_4CustomisePage.js';
// const fileName = '004moodle3_4LearningPlansAfterCustomise.js';
// const fileName = '005moodle3_4ResetPageAfterCustomise.js';
// const fileName = '006moodle3_4LearningplansConfiguringAfterCustomise.js'; //slow
// const fileName = '007moodle3_4OnlineUsers.js'; 
// const fileName = '008moodle3_4ClickEditeProfile.js';
// const fileName = '009moodle3_4UserGrade.js';
// const fileName = '010moodle3_4UserGradesOverview.js';
// const fileName = '011moodle3_4UserBrowserSessions.js';
// const fileName = '012moodle3_4UserCompleteReport.js';
// const fileName = '013moodle3_4UserOutlineReport.js';
// const fileName = '014moodle3_4UserAllLogs.js';
// const fileName = '015moodle3_4UserAllLogs2Page.js';
// const fileName = '016moodle3_4UserTodayLogs.js';
// const fileName = '017moodle3_4UserTodayLogsNextPage.js';

// const fileName = '018moodle3_4UserLearningPlan.js';
// const fileName = '019moodle3_4UserLearningPlanAdd.js';

// const fileName = '020moodle3_4UserForumDiscussions.js';
// const fileName = '021moodle3_4UserForumPosts.js';
// const fileName = '022moodle3_4UserNotes.js';
// const fileName = '023moodle3_4UserBlogEntries.js';

// const fileName = '024moodle3_4UserBlogEntriesAdd.js'; //add one blog
// const fileName = '025moodle3_4UserBlogEntriesDelete.js';  //delete one blog(the blog must be exist)

// const fileName = '026moodle3_4SiteHomeAddNewCourse.js'; //add one course
// const fileName = '027moodle3_4SiteHomeDeleteCourse.js';  //delete one course
// const fileName = '028moodle3_4SiteHomeDeleteCourseButCancel.js';  //want to delete course but cancel not confirrm

// const fileName = '029moodle3_4CalendarNewEvent.js'; //calendar newEvent

// const fileName = '030moodle3_4SiteAdminBrowseListOfUsers.js'; //site administration User Browse list of users
// const fileName = '031moodle3_4SiteAdminBrowseListOfUsersAdd.js'; //site administration User Browse list of users Add

//************************************************************
// const input_file_path = './input_script_v1/moodle/' + fileName;
// const output_file_path = './output_v1/moodle/' + fileName;
//************************************************************
//=======================================================================================
 


//=======================================================================================
// const fileName = '/dolibarr/' + '001dolibarrLogin.js';

// const fileName = '/dolibarr/' + '002dolibarrUserGroupNewUser.js';
// const fileName = '/dolibarr/' + '003dolibarrUserGroupDeleteUserCancel.js';
// const fileName = '/dolibarr/' + '004dolibarrUserGroupDeleteUserConfirm.js';

// const fileName = '/dolibarr/' + '005dolibarrMydashboard.js';
// const fileName = '/dolibarr/' + '006dolibarrCompany:FoundationModifyCancel.js';
// const fileName = '/dolibarr/' + '007dolibarrCompany-FoundationModifySave.js';
// const fileName = '/dolibarr/' + '008dolibarrModulesUserGroupSetUp.js';
// const fileName = '/dolibarr/' + '009dolibarrModulesUserGroupModifyGroupODTtemplates.js';

// const fileName = '/dolibarr/' + '010dolibarrModulesUserGroupComplementaryAttributesNew.js';
// const fileName = '/dolibarr/' + '011dolibarrModulesUserGroupComplementaryAttributesDelete.js';

// const fileName = '/dolibarr/' + '012dolibarrModulesMenuModifyMenuHandlers.js';
// const fileName = '/dolibarr/' + '013dolibarrModulesMenuModifyMenuHandlersSave.js';
// const fileName = '/dolibarr/' + '014dolibarrDisplayModify.js';
// const fileName = '/dolibarr/' + '015dolibarrTranslationSearch.js';
// const fileName = '/dolibarr/' + '016dolibarrWidgetsSave.js';
// const fileName = '/dolibarr/' + '017dolibarrAlertsModify.js';
// const fileName = '/dolibarr/' + '018dolibarrSecurityModify.js';
// const fileName = '/dolibarr/' + '019dolibarrSecurityExternalAccess.js';
// const fileName = '/dolibarr/' + '020dolibarrSecurityAudit.js';
// const fileName = '/dolibarr/' + '021dolibarrSecurityDefaultPermissions.js';
// const fileName = '/dolibarr/' + '022dolibarrLimitsAndAccuracy.js';
// const fileName = '/dolibarr/' + '023dolibarrPDFsaveModify.js';
// const fileName = '/dolibarr/' + '024dolibarrEmail.js';
// const fileName = '/dolibarr/' + '025dolibarrSMScancel.js';
// const fileName = '/dolibarr/' + '026dolibarrDictionariesCurrenciesBack.js';

// const fileName = '/dolibarr/' + '027dolibarrOtherSetupAdd.js';
// const fileName = '/dolibarr/' + '028dolibarrOtherSetupDelete.js';

// const fileName = '/dolibarr/' + '029dolibarrAdminToolsAboutDolibarr.js';
// const fileName = '/dolibarr/' + '030dolibarrAdminToolsAboutBrowser.js';
// const fileName = '/dolibarr/' + '031dolibarrAdminToolsAboutOS.js';
// const fileName = '/dolibarr/' + '032dolibarrAdminToolsAboutWebServer.js';
// const fileName = '/dolibarr/' + '033dolibarrAdminToolsAboutPHP.js';
// const fileName = '/dolibarr/' + '034dolibarrAdminToolsAboutDatabase.js';
// const fileName = '/dolibarr/' + '035dolibarrAdminToolsAboutBackup.js';
// const fileName = '/dolibarr/' + '036dolibarrAdminToolsRestore.js';
// const fileName = '/dolibarr/' + '037dolibarrAdminToolsUpgradeExtend.js';
// const fileName = '/dolibarr/' + '038dolibarrAdminToolsPurge.js';
// const fileName = '/dolibarr/' + '039dolibarrAdminToolsAudit.js';
// const fileName = '/dolibarr/' + '040dolibarrAdminToolsUsersSession.js';
// const fileName = '/dolibarr/' + '041dolibarrAdminToolsExternalResources.js';
// const fileName = '/dolibarr/' + '042dolibarrAdminToolsMassVATchange.js';
// const fileName = '/dolibarr/' + '043dolibarrAdminToolsScheduledJobs.js';
// const fileName = '/dolibarr/' + '044dolibarrAdminToolsDirectPrintingJobs.js';
// const fileName = '/dolibarr/' + '045dolibarrAdminToolsMassBarcodeInit.js';
// const fileName = '/dolibarr/' + '046dolibarrUserGroupSearch.js';
// const fileName = '/dolibarr/' + '047dolibarrUserGroupListofUserAdminModify.js';
// const fileName = '/dolibarr/' + '048dolibarrUserGroupHierarchicalView.js';
// const fileName = '/dolibarr/' + '049dolibarrUserGroupNewGroup.js';
// const fileName = '/dolibarr/' + '050dolibarrUserGroupListGroupModify.js';
// const fileName = '/dolibarr/' + '051dolibarrUserGroupListofUserAdminBackToList.js';

//=======================================================================================

//************************************************************
const input_file_path = './input_script_v1' + fileName;
const output_file_path = './output_v1' + fileName;
//************************************************************

var Nightmare = require("nightmare");
var nightmare = new Nightmare({show:true});
const lib = require('wat_scenario');
// transfer();

async function transfer(){

	var fread = new File(input_file_path);
	var wholeText = await fread.read();	
	var read = await fread.readLine();
	var datas = await changeScript(read,wholeText);

	var writeContent = await appendOneStr(datas);
	var output = new File(output_file_path);
	await output.write(writeContent);

	var scenarioStr = await runScriptPromise(output_file_path);
	
	return scenarioStr;

}

async function changeScript(read,wholeText){
	let scenario = new lib.Scenario();
	let stop = 0;
	let data = [];
	data.push('var Nightmare = require("nightmare");' + '\nvar lib = require("wat_scenario");\nvar scenario = new lib.Scenario();');

	for (var i = 0; i < read.length ; i++) {
		read[i] = read[i].replace(/;/g, "");
		read[i] = deleteCodeComments(read[i]);
		if(read[i].replace(/^\s*|\s*$/g, '').search(/\/\//i)==0){
			read[i] = '';			
		}else if (read[i].indexOf('.goto')!= -1){
			let tempStr = read[i].split('.goto');
			data.push('scenario.addAction(new lib.GotoAction' + tempStr[1] +');');
		} else if (read[i].indexOf('.click(')!= -1){
			let tempStr = read[i].split('.click(');
			data.push('scenario.addAction(new lib.ClickAction('+ tempStr[1] +');');			
		} else if (read[i].indexOf('.type(')!= -1){
			let tempStr = read[i].split('.type(');
			data.push('scenario.addAction(new lib.TypeAction('+ tempStr[1] +');');			
		} else if (read[i].indexOf('.insert(')!= -1){
			let tempStr = read[i].split('.insert(');
			data.push('scenario.addAction(new lib.TypeAction('+ tempStr[1] +');');			
		} else if (read[i].indexOf('.select(')!= -1){
			let tempStr = read[i].split('.select(');
			data.push('scenario.addAction(new lib.SelectAction('+ tempStr[1] +');');			
		} else if (read[i].indexOf('.back(')!= -1){
			data.push('scenario.addAction(new lib.BackAction());');
		}
	}

	data.push('process.send(scenario);');

	return data;
}


async function appendOneStr(datas){
	var tempStr = "";
	for (let i = 0; i < datas.length; i++) {
		tempStr = await tempStr + datas[i] + "\n";
	}
	return tempStr;
}

async function runScriptPromise(scriptPath) {
	let promise = new Promise(function(resolve,reject){
		var process = childProcess.fork(scriptPath);
		process.on('error', function (err) {
			reject(err);
		});
		process.on('message', (data) => {
			resolve(data);
		});
		process.on('exit', function (code) {
			var err = code === 0 ? null : new Error('exit code ' + code);
			reject(err);
		});
	});

	promise.then( (data) => {		
		if(data!=null){
			// console.log(data);
			return Promise.resolve(data);
		}		
	})
	.catch((err)=>{
		if(err)		{
			console.log('there is err: ' + err);
			throw err;
		}else{
			console.log('finished running script without datas fedback');
		}
	})
	return promise;
}

function deleteCodeComments(code) {
    //use special code replace string to delete the comments
    var tmp1 = ':\/\/';
    var regTmp1 = /:\/\//g;
    var tmp2 = '@:@/@/@';
    var regTmp2 = /@:@\/@\/@/g;
    code = code.replace(regTmp1, tmp2);
    var reg = /(\/\/.*)?|(\/\*[\s\S]*?\*\/)/g;
    code = code.replace(reg, '');
    result = code.replace(regTmp2, tmp1);
    return result;
}

module.exports.transfer = transfer;