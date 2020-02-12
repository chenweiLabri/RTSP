const winston = require('winston');
const wat_scenario = require('wat_scenario');
const puppeteer = require('puppeteer');

const PROBA_CHANGER = 1;

class BrokenAction{
	constructor(baseScenario, brokenAction){
		this.baseScenario = baseScenario;
		this.brokenAction = brokenAction;
	}

	async detectBrokenActionPositon(iRunnedActions) {
		this.page = await this.createPage();
		await this.page.setViewport({
	        width: 1200,
	        height: 800
	    });		
		this.iRunnedActions = iRunnedActions;		
		for (let i=0 ; i < this.baseScenario.actions.length ; i++) {
			await this.page.setBypassCSP(true);
			await this.baseScenario.actions[i].run(this.page);
			await this.page.waitFor(1000);
			
			if (i === this.iRunnedActions) {
				winston.info(`try to get the brokenActionPosition after action ${this.baseScenario.actions[i]}`);
				
				await this.page.addScriptTag({path:'./optimal-select.js'});
				console.log("in detectBrokenActionPositon the brokenAction is :");
				console.log(this.brokenAction);

				
				this.brokenActionPosition = await this.page.evaluate(generateBrokenActionPosition, this.brokenAction);
				// winston.info(`in detectBrokenActionPositon brokenAction and Position are : `);
				// console.log(this.brokenActionPosition);

			}
		}
		await this.page.waitFor(1000);
		
	}

	getBrokenActionPosition() {
		return this.brokenActionPosition;
	}

	async initBrowser() {
		if (! this.browser) this.browser =  await puppeteer.launch({headless: false, args:['--no-sandbox']});
	}

	async createPage() {
		await this.initBrowser();
		let page = await this.browser.newPage();
		return page;
	}

	async closePageAndBrowser() {
		await this.page.close();
		await this.browser.close();
	}
	
}

function generateBrokenActionPosition(brokenAction){
	if (brokenAction != null) {
		let element = document.querySelector(brokenAction.selector);
		let width = document.body.clientWidth;
		let height = document.body.clientHeight;

		let brokenActionAndPosition = [];

		if (element === undefined || element === null) {
			brokenActionAndPosition.push({
				action : brokenAction,
				element: {
					left   : 0, 
					top    : 0, 
					width  : width, 
					height : height					
				}
			});
		} else if (element.length === 1) {
			brokenActionAndPosition.push({
				action : brokenAction,
				element: {
					left   : element.clientLeft, 
					top    : element.clientTop, 
					width  : element.clientWidth, 
					height : element.clientHeight					
				}
			});

		} else {
			brokenActionAndPosition.push({
				action : brokenAction,
				element: {
					left   : 0, 
					top    : 0, 
					width  : width, 
					height : height					
				}
			});
		}
		return brokenActionAndPosition;
	}	
}


module.exports.BrokenAction = BrokenAction;