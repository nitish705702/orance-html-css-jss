var problem = document.getElementById('problem')	//get calculator.screen.#problem
var solution = document.getElementById('solution')	//get calculator.screen.#solution
function clickHandler(elm) {	//To get the pressed key	
	console.log(elm.id)
	if (elm.id!='DEL') {		
		if (elm.id!='EQ') {
			problem.innerHTML += elm.innerHTML;		//print keys onscreen
		} else {
			solution.innerHTML = solve(problem.innerHTML);		//Solve if = is pressed
		}
	} else {
		problem.innerHTML = ' '		//clearscreen if DEL is pressed
		solution.innerHTML = 0
	} 
}

function solve(str) {	//Calculator algorithm
	console.log(str)
	return 69;
}