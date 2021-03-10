const fs = require('fs')
let MAX_SENTENCE_LENGTH = 207;


function findLine(rnc) {
    var response = "";

    fs.readFile('DGII_RNC.txt', 'utf-8', function(err, data){    
        let startPoint = data.search(rnc)
        let extract = data.substring(startPoint, startPoint+MAX_SENTENCE_LENGTH);
        let arrayOfSolution = extract.split("\n")
        console.log(arrayOfSolution[0])
        response = arrayOfSolution[0]; 
    }); 

    return response;
}

var ex = findLine("101020164");

console.log(ex)