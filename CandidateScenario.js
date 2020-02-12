const winston = require('winston');
const wat_scenario = require('wat_scenario');
const puppeteer = require('puppeteer');
const select = require('optimal-select');

const PROBA_CHANGER = 1;

class CandidateScenario{
	constructor(baseScenario, brokenActionSelectorType){
		this.baseScenario = baseScenario;
		this.brokenActionSelectorType = brokenActionSelectorType;
		this.winston = winston;
	}

	async detectCandidateAction(iRunnedActions) {
		this.page = await this.createPage();
		this.candidateActions = [];
		this.iRunnedActions = iRunnedActions;
		winston.info(`the brokenActionSelectorType in detectCandidateAction is  : ${this.brokenActionSelectorType}`);
		

		winston.info(`the length of baseScenario Actions : ${this.baseScenario.actions.length}`);
		await this.page.setViewport({
	        width: 1200,
	        height: 800
	    });
		for (let i=0 ; i < this.baseScenario.actions.length ; i++) {
			// await this.page.setBypassCSP(true);
			await this.page.waitFor(1000);
			await this.baseScenario.actions[i].run(this.page);
			
			winston.info(`the ${i} action is ${this.baseScenario.actions[i]}`);

			if (i === this.iRunnedActions) {
				await this.page.waitFor(1000);
				winston.info(`try to crawl the candidates after action ${this.baseScenario.actions[i]}`);
				await this.page.addScriptTag({path:'./optimal-select.js'});
				// await this.page.setBypassCSP(true);

				var candidateSelector;
				var candidateSelectorSubmitButton;
				var candidateSelectorSubmitInput;

				if (this.brokenActionSelectorType === 'HTML') {
					winston.info(`brokenActionSelectorType equals HTML in detectCandidateAction is TRUE: ${this.brokenActionSelectorType}`);
					candidateSelector = await this.page.evaluate(this.scanCandidateActionCopyWithPath);
					candidateSelectorSubmitButton = await this.page.evaluate(scanCandidateActionTestSubmitButtionWithPath);
					candidateSelectorSubmitInput = await this.page.evaluate(scanCandidateActionTestSubmitInputWithPath);

				} else {
					candidateSelector = await this.page.evaluate(this.scanCandidateActionCopy);
					candidateSelectorSubmitButton = await this.page.evaluate(scanCandidateActionTestSubmitButtion);				
					candidateSelectorSubmitInput = await this.page.evaluate(scanCandidateActionTestSubmitInput);				
				}
						

				// let candidateSelector = await this.page.evaluate(scanCandidateAction);

				// let candidateSelector = await this.page.evaluate(this.scanCandidateActionCopy);
				// let candidateSelectorSubmitButton = await this.page.evaluate(scanCandidateActionTestSubmitButtion);

				
				// if(candidateSelector){
				// 	candidateSelector.forEach(selector => {
				// 		console.log(selector);
				// 		this.candidateActions.push({
				// 			action : new wat_scenario.ClickAction(selector)
				// 		});
				// 	});
				// }				

				if(candidateSelector){
					candidateSelector.forEach(selector => {
						// console.log("*********************************the candidates selector: ")
						// console.log(selector);
						this.candidateActions.push({
							action : new wat_scenario.ClickAction(selector.action),
							element: selector.element
						});
					});
				}
				

				if(candidateSelectorSubmitButton){
					candidateSelectorSubmitButton.forEach(selector => {
						// console.log("*********************************the submit button: not <a> link")
						// console.log(selector);
						this.candidateActions.push({
							action : new wat_scenario.ClickAction(selector.action),
							element: selector.element
						});
					});
				}

				if(candidateSelectorSubmitInput){
					candidateSelectorSubmitInput.forEach(selector => {
						// console.log("*********************************the submit button: not <a> link")
						// console.log(selector);
						this.candidateActions.push({
							action : new wat_scenario.ClickAction(selector.action),
							element: selector.element
						});
					});
				}


			}
		}

		await this.page.waitFor(1000);
		
	}

	getCandidateActions() {
		return this.candidateActions;
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

	scanCandidateActionCopy() {		
		let actions = [];
		let aElements = document.querySelectorAll('a');
		// let buttonElements = document.querySelectorAll('button');
		// let submitElements = document.querySelectorAll('input[type="submit"]');
		//input but type is submit?
		//select?
		//type an input		
		let elementCandi = [];
		for (let i=0 ; i < aElements.length ; i++) {
			if (! isMailTo(aElements[i])) {
				actions.push(computeSelector(aElements[i]));
				elementCandi.push({
					action : computeSelector(aElements[i]),
					element: {
						left   : aElements[i].clientLeft, 
						top    : aElements[i].clientTop, 
						width  : aElements[i].clientWidth, 
						height : aElements[i].clientHeight					
					}
				});
			}
		}

		// for (let i=0 ; i < buttonElements.length ; i++) {
		// 	if (! isMailTo(buttonElements[i])) {
		// 		actions.push(computeSelector(buttonElements[i]));
		// 		elementCandi.push({
		// 			action : computeSelector(buttonElements[i]),
		// 			element: {
		// 				left   : buttonElements[i].clientLeft, 
		// 				top    : buttonElements[i].clientTop, 
		// 				width  : buttonElements[i].clientWidth, 
		// 				height : buttonElements[i].clientHeight					
		// 			}
		// 		});
		// 	}
		// }

		// for (let i=0 ; i < submitElements.length ; i++) {
		// 	if (! isMailTo(submitElements[i])) {
		// 		actions.push(computeSelector(submitElements[i]));
		// 		elementCandi.push({
		// 			action : computeSelector(submitElements[i]),
		// 			element: {
		// 				left   : submitElements[i].clientLeft, 
		// 				top    : submitElements[i].clientTop, 
		// 				width  : submitElements[i].clientWidth, 
		// 				height : submitElements[i].clientHeight					
		// 			}
		// 		});
		// 	}
		// }
		return elementCandi;

		function isMailTo(element) {
			let href = element.href;
			return href && (href.toLowerCase().indexOf('mailto') > -1)		
		}

		function computeSelector(el) {			
			return computeSelectorWithID(el);
		}

		function computeSelectorWithID(el) {
	        var names = [];
	        // if (el.parentNode) {
	        // 	for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	        //         names.unshift(`${el.tagName}:nth-child(${c})`);
	            
	        //     el = el.parentNode;
	        // }
	        while (el.parentNode) {
	            if (el.id && el.id.indexOf('yui_')=== -1) {
	                names.unshift(`#${el.id}`);
	                break;
	            } else {
	                if (el == el.ownerDocument.documentElement)
	                    names.unshift(el.tagName);
	                else {
	                    for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	                        names.unshift(`${el.tagName}:nth-child(${c})`);
	                }
	                el = el.parentNode;
	            }
	        }
	        return names.join(' > ');
	    }

	    function computeSelectorWithPath(el) {        
	    	var names = [];
	    	while (el.parentNode) {
	    		if (el == el.ownerDocument.documentElement)
	    			names.unshift(el.tagName);
	    		else {
	    			for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	    				names.unshift(`${el.tagName}:nth-child(${c})`);
	    		}
	    		el = el.parentNode;
	    	}
	    	return names.join(' > ');
	    }

	}

	scanCandidateActionCopyWithPath() {		
		let actions = [];
		let aElements = document.querySelectorAll('a');
		// let buttonElements = document.querySelectorAll('button');
		// let submitElements = document.querySelectorAll('button[type="submit"]');
		// let submitElements = document.querySelectorAll('input[type="submit"]');
		//input but type is submit?
		//select?
		//type an input		
		let elementCandi = [];

		for (let i=0 ; i < aElements.length ; i++) {
			if (! isMailTo(aElements[i])) {
				actions.push(computeSelector(aElements[i]));
				elementCandi.push({
					action : computeSelector(aElements[i]),
					element: {
						left   : aElements[i].clientLeft, 
						top    : aElements[i].clientTop, 
						width  : aElements[i].clientWidth, 
						height : aElements[i].clientHeight					
					}
				});
			}
		}

		// for (let i=0 ; i < buttonElements.length ; i++) {
		// 	if (! isMailTo(buttonElements[i])) {
		// 		actions.push(computeSelector(buttonElements[i]));
		// 		elementCandi.push({
		// 			action : computeSelector(buttonElements[i]),
		// 			element: {
		// 				left   : buttonElements[i].clientLeft, 
		// 				top    : buttonElements[i].clientTop, 
		// 				width  : buttonElements[i].clientWidth, 
		// 				height : buttonElements[i].clientHeight					
		// 			}
		// 		});
		// 	}
		// }

		// for (let i=0 ; i < submitElements.length ; i++) {
		// 	if (! isMailTo(submitElements[i])) {
		// 		actions.push(computeSelector(submitElements[i]));
		// 		elementCandi.push({
		// 			action : computeSelector(submitElements[i]),
		// 			element: {
		// 				left   : submitElements[i].clientLeft, 
		// 				top    : submitElements[i].clientTop, 
		// 				width  : submitElements[i].clientWidth, 
		// 				height : submitElements[i].clientHeight					
		// 			}
		// 		});
		// 	}
		// }
		
		return elementCandi;

		function isMailTo(element) {
			let href = element.href;
			return href && (href.toLowerCase().indexOf('mailto') > -1)		
		}

		function computeSelector(el) {			
			return computeSelectorWithPath(el);
		}

		function computeSelectorWithID(el) {
	        var names = [];
	        // if (el.parentNode) {
	        // 	for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	        //         names.unshift(`${el.tagName}:nth-child(${c})`);
	            
	        //     el = el.parentNode;
	        // }
	        while (el.parentNode) {
	            if (el.id && el.id.indexOf('yui_')=== -1) {
	                names.unshift(`#${el.id}`);
	                break;
	            } else {
	                if (el == el.ownerDocument.documentElement)
	                    names.unshift(el.tagName);
	                else {
	                    for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	                        names.unshift(`${el.tagName}:nth-child(${c})`);
	                }
	                el = el.parentNode;
	            }
	        }
	        return names.join(' > ');
	    }

	    function computeSelectorWithPath(el) {        
	    	var names = [];
	    	while (el.parentNode) {
	    		if (el == el.ownerDocument.documentElement)
	    			names.unshift(el.tagName);
	    		else {
	    			for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	    				names.unshift(`${el.tagName}:nth-child(${c})`);
	    		}
	    		el = el.parentNode;
	    	}
	    	return names.join(' > ');
	    }

	}


	
}


// function scanCandidateAction() {
// 	// let selectFunction = select.select.getSingleSelector();
// 	let actions = [];
// 	// let computeCSSSelector = window['OptimalSelect'].select;
// 	// let computeCSSSelector = window.getSelection();

// 	let aElements = document.querySelectorAll('a');
// 	let submitElements = document.querySelectorAll('button[type="submit"]');
// 	// aElements = aElements.concat(submitElements);
// 	let elementCandi = [];
// 	for (let i=0 ; i < aElements.length ; i++) {
// 		if (! isMailTo(aElements[i])) {
// 			actions.push(computeSelector(aElements[i]));

// 			elementCandi.push({
// 				action : computeSelector(aElements[i]),
// 				element: {
// 					left   : aElements[i].clientLeft, 
// 					top    : aElements[i].clientTop, 
// 					width  : aElements[i].clientWidth, 
// 					height : aElements[i].clientHeight					
// 				}
// 			});
// 		}
// 	}

// 	for (let i=0 ; i < submitElements.length ; i++) {
// 		// if (! isMailTo(submitElements[i])) actions.push(computeCSSSelector(submitElements[i]));
// 		if (! isMailTo(submitElements[i])) {
// 			actions.push(computeSelector(submitElements[i]));

// 			elementCandi.push({
// 				action : computeSelector(submitElements[i]),
// 				element: {
// 					left   : submitElements[i].clientLeft, 
// 					top    : submitElements[i].clientTop, 
// 					width  : submitElements[i].clientWidth, 
// 					height : submitElements[i].clientHeight					
// 				}
// 			});
// 		}
// 	}
// 	// return actions;
// 	return elementCandi;

// 	function isMailTo(element) {
// 		let href = element.href;
// 		return href && (href.toLowerCase().indexOf('mailto') > -1)		
// 	}

// 	function computeSelector(el) {
//         var names = [];
//         while (el.parentNode) {
//             if (el.id) {
//                 names.unshift(`#${el.id}`);
//                 break;
//             } else {
//                 if (el == el.ownerDocument.documentElement)
//                     names.unshift(el.tagName);
//                 else {
//                     for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
//                         names.unshift(`${el.tagName}:nth-child(${c})`);
//                 }
//                 el = el.parentNode;
//             }
//         }
//         return names.join(' > ');
//     }


//     function computeSelectorWithPath(el) {        
//         var names = [];
//         while (el.parentNode) {
//             if (el == el.ownerDocument.documentElement)
//                 names.unshift(el.tagName);
//             else {
//                 for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
//                     names.unshift(`${el.tagName}:nth-child(${c})`);
//             }
//             el = el.parentNode;
//         }
//         return names.join(' > ');
//     }

//     function computeSelectorOptimal(el) {
//         return select(el);
//     }


// }


function scanCandidateActionTestSubmitButtion() {
	let actions = [];
	let submitElements = document.querySelectorAll('button');		
	// let submitElements = document.querySelectorAll('button[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));

			elementCandi.push({
				action : computeSelector(submitElements[i]),
				element: {
					left   : submitElements[i].clientLeft, 
					top    : submitElements[i].clientTop, 
					width  : submitElements[i].clientWidth, 
					height : submitElements[i].clientHeight					
				}
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithID(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}

function scanCandidateActionTestSubmitButtionWithPath() {
	let actions = [];
	let submitElements = document.querySelectorAll('button');		
	// let submitElements = document.querySelectorAll('button[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));

			elementCandi.push({
				action : computeSelector(submitElements[i]),
				element: {
					left   : submitElements[i].clientLeft, 
					top    : submitElements[i].clientTop, 
					width  : submitElements[i].clientWidth, 
					height : submitElements[i].clientHeight					
				}
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithPath(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}

function scanCandidateActionTestSubmitInput() {
	let actions = [];		
	let submitElements = document.querySelectorAll('input[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));
			elementCandi.push({
				action : computeSelector(submitElements[i]),
				element: {
					left   : submitElements[i].clientLeft, 
					top    : submitElements[i].clientTop, 
					width  : submitElements[i].clientWidth, 
					height : submitElements[i].clientHeight					
				}
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithID(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}

function scanCandidateActionTestSubmitInputWithPath() {
	let actions = [];		
	let submitElements = document.querySelectorAll('input[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));

			elementCandi.push({
				action : computeSelector(submitElements[i]),
				element: {
					left   : submitElements[i].clientLeft, 
					top    : submitElements[i].clientTop, 
					width  : submitElements[i].clientWidth, 
					height : submitElements[i].clientHeight					
				}
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithPath(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}








module.exports.CandidateScenario = CandidateScenario;