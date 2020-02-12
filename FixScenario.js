const winston = require('winston');
const wat_scenario = require('wat_scenario');
const puppeteer = require('puppeteer');
const RunScenario = require('./RunScenario.js').RunScenario;
const PROBA_CHANGER = 1;


class FixScenario{
	constructor(baseScenario, candidateActions, index, assertFunction){
		this.baseScenario = baseScenario;
		this.candidateActions = candidateActions;
		this.iBaseScenario = index;
		this.assertFunction = assertFunction;
	}

	async runWithNoise() {
		winston.info('begin runWithNoise');		
		// let page = await this.createPage();
		// await page.authenticate({username:"anonymous",password:"anonymous"});

		let tempRunScenario = this.baseScenario;
		let isFindCandidates = false;
		this.successCa = [];
		this.scenarios = [];
		let numOfSuccessCandidates = 0;

		for (let i = 0 ; i < this.candidateActions.length ; i++) {
			// await page.waitFor(1000);
			winston.info(`it will change the ${this.iBaseScenario+1} action of base Scenario using this action:`);
			console.log(this.candidateActions[i].action);
			let brokenAction = tempRunScenario.actions[this.iBaseScenario+1];
			// console.log(brokenAction);
			tempRunScenario.actions[this.iBaseScenario+1] = await this.candidateActions[i].action;			
			
			this.scenario = new wat_scenario.Scenario(tempRunScenario.actions);
			// winston.info(`it will run this following scenario:`);
			// console.log(this.scenario);

			let runScenario = new RunScenario(this.scenario);
			await runScenario.runOneScenario();
			let succScenario = await runScenario.getSuccessScenario();
			if (succScenario) {
				this.scenarios.push(succScenario);
				break;
			}
			// this.scenarios.push(this.scenario);

			// try {
			// 	// let runResult = await this.scenario.run(page);
			// 	let runResult = await this.playScenario(page);
			// 	winston.info("each scenario run result: ")
			// 	console.log(runResult);
			// 	if (runResult.success) {
			// 		// winston.info('new fixed scenario run success!!!!!  The fix scenario is:');
			// 		// console.log(this.scenario);
			// 		isFindCandidates = true;
			// 		this.successCa.push(this.candidateActions[i]);
			// 		numOfSuccessCandidates++;
			// 	} else {
			// 		// winston.info('runResult is false:');
			// 		// console.log(runResult);
			// 		winston.info('FixScenario cannot run !');
			// 	}

			// 	if(numOfSuccessCandidates === 3){
			// 		break;
			// 	}

			// } catch (ex) {
			// 	winston.info(ex);
			// 	winston.info('FixScenario gets exception when runs!');
			// }

		}

		// if (!isFindCandidates) {
		// 	await console.log('sorry! Do not find the candidate selector, the website may change too much! Or maybe there is a bug in website');				
		// }
		
		// await page.close();
		// await this.browser.close();		
		// this.browser.removeAllListeners('targetcreated');
	}


	async initBrowser() {
		if (!this.browser) this.browser =  await puppeteer.launch({headless: false, args:['--no-sandbox']});
	}

	async createPage() {
		await this.initBrowser();
		let page = await this.browser.newPage();
		return page;
	}

	async playScenario(page){
		// let runResult = await this.scenario.run(page);
		// return runResult;
		let i;
		try {
			for (i=0 ; i < this.scenario.actions.length; i++) {
				await page.waitFor(1000);
				await this.scenario.actions[i].run(page);
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


	getCandidateActions() {
		return this.candidateActions;
	}

	getSuccessCandidateActions() {
		return this.successCa;
	}

	getRepairSuccessedScenario(){
		return this.scenario;
	}

	getScenarios() {
		return this.scenarios;
	}

}


module.exports.FixScenario = FixScenario;