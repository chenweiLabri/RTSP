const winston = require('winston');
const File = require('./File.js').File;
const transfer = require('./transferScenario.js');
const lib = require('wat_scenario');
const puppeteer = require('puppeteer');
var childProcess = require('child_process');

const CandidateScenario = require('./CandidateScenario.js').CandidateScenario;
const BrokenAction = require('./BrokenAction.js').BrokenAction;
const FixScenario = require('./FixScenario.js').FixScenario;
const RunScenario = require('./RunScenario.js').RunScenario;
const OrderCandidates = require('./OrderCandidates.js').OrderCandidates;

const DomDistance = require('./DomDistance.js').DomDistance;
// const getDistance = require('./domDistance.js').getDistanceCenter;

//to get new test script from the transfered scenarios
const scriptPath = './output/scenario-nightmare-test.js';

const breakActionPath = './output/breakAction.json';
const cadidatePath = './output/candidates.json';
const resultPath = './output/result1.json';
const orderedCandidatePath = './output/orderedCandidates.json';




describe('Find Candidate Actions', function () {
	// this.timeout(40000);
	winston.info('begin test mocha play function');
	it('should goto website and return all <a> as candidate actions', async function() {
		winston.info('in it of describe:');
		playToFix();

	});
});

async function playToFix(){

	// var scenarioStr = await runScriptPromise(scriptPath);
	var scenarioStr = await transfer.transfer();
	var scenarioJSON = JSON.parse(scenarioStr);
	var scenario = new lib.Scenario(scenarioJSON);
	// var scenario = new lib.Scenario(JSON.parse(scenarioStr));
	// let browser = await initBrowser();
	winston.info(`run the initial scenario:`)
	console.log(scenario);
	var page = await createPage();

	try{
		await page.setViewport({
			width: 1200,
			height: 800
		});
		// let baseResult = await scenario.run(page);
		let baseResult = await playScenario(page, scenario);		
		if (baseResult.success) {
			winston.info('scenario run success!');
			await page.close();
			await this.browser.close();
		} else if(baseResult.success == false){			
		    winston.info(`run the original test script, result is in following:`);
		    console.log(baseResult);
		    winston.info(`=======================the result of running original test script is end =========================`)
		    await page.close();
		    await this.browser.close();
		    console.time("RTS");
		    let iRunnedActions = baseResult.runnedActions;



      //       let brokenAction = await genBrokenAction(scenarioJSON,iRunnedActions);
		    // winston.info(`the brokenAction is : ${brokenAction}`);
		    // // console.log(brokenAction.selector);

		    // let crawlerScenario = await genCrawlScenario(scenario,iRunnedActions);
		    // // winston.info(`prepare the crawlScenario is : ${crawlerScenario}`);

		    // scenarioForBrokenAction = new BrokenAction(crawlerScenario, brokenAction);
		    // await scenarioForBrokenAction.detectBrokenActionPositon(iRunnedActions);		    		    
		    // // //let breakPosition = await scenarioForBrokenAction.getBrokenActionPosition();
		    // // winston.info(`position of break actions is ${breakPosition}`);
		    // // console.log(breakPosition);
		    // await scenarioForBrokenAction.closePageAndBrowser();

		    // candidateScenario = new CandidateScenario(crawlerScenario);
		    // await candidateScenario.detectCandidateAction(iRunnedActions);		    		    
		    // let ca = await candidateScenario.getCandidateActions();
		    // winston.info(`length of candidate actions is ${ca.length}`);
		    // console.log(ca);
		    // await candidateScenario.closePageAndBrowser();
		    // // var writeCa = new File(cadidatePath);
		    // // await writeCa.writeJson(ca[iRunnedActions]);

		    // let bScenario = await makeBaseScenario(scenario,iRunnedActions);
		    // winston.info(`the bScenario actions length is ${bScenario.actions.length}`);
		    // winston.info(`the bScenario actions is ${bScenario.actions}`);
		    
		    // let fixScenario = new FixScenario(bScenario, ca, iRunnedActions);
		    // await fixScenario.runWithNoise();
		    // let candiScenarios = await fixScenario.getScenarios();

		    let candiScenarios;
		    if (iRunnedActions > 1) {
		    	candiScenarios = await fixNextPath(scenario, scenarioJSON, iRunnedActions);
		    }	

		    // successCa = await fixScenario.getSuccessCandidateActions();
		    // winston.info(`successCas are following:`);
		    // console.log(successCa);

		    // let candiScenarios = await fixScenario.getScenarios();
		    // let runScenario = new RunScenarios(candiScenarios);
		    // await runScenario.runOneScenarios();
		    // let succScenarios = await runScenario.getSuccessScenarios();
		    // console.log(succScenarios);

		    if (candiScenarios == null){
		    	candiScenarios = await fixNextPath(scenario, scenarioJSON, iRunnedActions-1);
		    }

		    winston.info(`the successful repaired scenarios are:`);
		    // console.log(candiScenarios);
		    for (var i = candiScenarios.length - 1; i >= 0; i--) {
		    	console.log(candiScenarios[i]);
		    }

		    // let successScenarios = [];
		    // let succScenario;
		    // for (let i = candiScenarios.length - 1; i >= 0; i--) {		    	
		    // 	let runScenario = new RunScenario(candiScenarios[i]);
		    // 	await runScenario.runOneScenario();
		    // 	succScenario = await runScenario.getSuccessScenario();
		    // 	if (succScenario) {
		    // 		successScenarios.push(succScenario);
		    // 		break;
		    // 	}

		    // }
		    // for (var i = successScenarios.length - 1; i >= 0; i--) {
		    // 	console.log(successScenarios[i]);
		    // }		    

		    
		    		    		    


		    // let distance = mezr.distance(successCa[0].element, successCa[1].element);

		    // if (successCa === null) {
		    // 	winston.info(`there is no successful repaired scenario`);
		    // } else if (successCa.length > 1) {
		    // 	let domDistance = new DomDistance(breakPosition, successCa);
		    // 	// await domDistance.sortCandidates();
		    // 	let candidateActionsSort = await domDistance.getSortedCandidateActions();
		    // 	winston.info(`the final propose candidates actions are:`);
		    // 	console.log(candidateActionsSort);
		    // } else if (successCa.length === 1) {
		    // 	winston.info(`the final propose one candidate action is:`);
		    // 	console.log(successCa);		    	
		    // }

		    winston.info('final end!');
		    console.timeEnd("RTS");
		    		    
		}
	}catch(e){
		winston.info(`in function playtoFix, try catch err is : ${e}`);
		await page.close();
	}

}


async function initBrowser() {
	// if (!this.browser) this.browser =  await puppeteer.launch();
	if (!this.browser) this.browser =  await puppeteer.launch({headless: false, args:['--no-sandbox']});
}

async function createPage() {
	await initBrowser();
	let page = await this.browser.newPage();
	return page;
}


async function genCrawlScenario(scenario,iRunnedActions){
	let crawlScenario = new lib.Scenario();
	for (let i = 0; i <= iRunnedActions; i++) {
		await crawlScenario.actions.push(scenario.actions[i]);
	}	
	return crawlScenario;
}

async function makeBaseScenario(scenario,iRunnedActions){
	let bScenario = new lib.Scenario();	

	// for (let i = 0; i <= iRunnedActions+2; i++) { 
	// 	if (scenario.actions[i]) { await bScenario.actions.push(scenario.actions[i]); }
	// }

	if (iRunnedActions + 2 < scenario.actions.length) {
		for (let i = 0; i <= iRunnedActions+2; i++) { 
			if (scenario.actions[i]) { await bScenario.actions.push(scenario.actions[i]); }
		}
	} else {
		bScenario = scenario;
	}

	return bScenario;
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

async function genBrokenAction(scenarioJSON,iRunnedActions){
    console.log(scenarioJSON);
    return scenarioJSON[iRunnedActions+1];
}

async function playScenario(page, scenarioToRun){		
		let i;
		try {
			for (i=0 ; i < scenarioToRun.actions.length; i++) {

			    if (scenarioToRun.actions[i].type === 'TypeAction') {
			    	await runTypeAction(page, scenarioToRun, i); //deal with type input which is not empty
			    } else{
			    	await scenarioToRun.actions[i].run(page);
			    }

				await page.waitFor(1000);
			}
			await page.waitFor(1000);

			return {
				success : true,
				runnedActions : i
			}
		} catch(err) {
			return {
				success : false,
				runnedActions : i-1,
				error : err
			}
		}

	}

async function runTypeAction(page, scenarioToRun, i) {
	var iAction = scenarioToRun.actions[i];

	const elementHandle = await page.$(iAction.selector);
	await elementHandle.click();
	await elementHandle.focus();
	// click three times to select all
	await elementHandle.click({clickCount: 3});
	await elementHandle.press('Backspace');
	await elementHandle.type(iAction.text);

}

async function fixNextPath(scenario, scenarioJSON, iRunnedActions) {
	let brokenAction = await genBrokenAction(scenarioJSON,iRunnedActions);
	winston.info(`the brokenAction is : ${brokenAction}`);
	let breakActionSelectorToSplit = brokenAction.selector;
	console.log('breakActionSelectorToSplit is ', breakActionSelectorToSplit);
	let breakActionSplitArray = breakActionSelectorToSplit.split(' > ');
	console.log('==' + breakActionSplitArray[0] + '==');
	let brokenActionSelectorType = breakActionSplitArray[0];

	var writeBrokenAction = new File(breakActionPath);
    await writeBrokenAction.writeJson(brokenAction);

	let crawlerScenario = await genCrawlScenario(scenario,iRunnedActions);
	scenarioForBrokenAction = new BrokenAction(crawlerScenario, brokenAction);
	await scenarioForBrokenAction.detectBrokenActionPositon(iRunnedActions);
	await scenarioForBrokenAction.closePageAndBrowser();
    candidateScenario = new CandidateScenario(crawlerScenario,brokenActionSelectorType);
    await candidateScenario.detectCandidateAction(iRunnedActions);		    		    
    let ca = await candidateScenario.getCandidateActions();
    winston.info(`length of candidate actions is ${ca.length}`);
    // console.log(ca);
    // var writeCa = new File(cadidatePath);
    // await writeCa.writeJson(ca);

    
    orderCandidates = new OrderCandidates(ca, brokenAction);
    await orderCandidates.readAndOrderCandidates();
	var theOrderedCandidates = await orderCandidates.getOrderedCandidatesArray();
	var farPathCandidates = await orderCandidates.getFarPathCandidatesArray();	
	console.log("*** the ordered candidates are :");
	console.log(theOrderedCandidates);
	console.log("*** the far  farPathCandidates candidates are :");
	console.log(farPathCandidates);
	// console.log('===== the first candidates is ', theOrderedCandidates[0]);
	// console.log('===== the second candidates is ', theOrderedCandidates[1]);

    await candidateScenario.closePageAndBrowser();
    let bScenario = await makeBaseScenario(scenario,iRunnedActions);
    winston.info(`the bScenario actions length is ${bScenario.actions.length}`);
    winston.info(`the bScenario actions is ${bScenario.actions}`);
    let fixScenario = new FixScenario(bScenario, theOrderedCandidates, iRunnedActions);
    // let fixScenario = new FixScenario(bScenario, ca, iRunnedActions);
    await fixScenario.runWithNoise();
    let candiScenarios = await fixScenario.getScenarios();
    if (candiScenarios == null || candiScenarios.length == 0) {
    	console.log("The far candidates try to repair!!!!!!!!!");
    	let fixScenarioFar = new FixScenario(bScenario, farPathCandidates, iRunnedActions);
	    await fixScenarioFar.runWithNoise();
	    candiScenarios = await fixScenarioFar.getScenarios();
    }
    return candiScenarios;
}


