const fs = require('fs')
const fsPromises = require('fs').promises; 
let MAX_SENTENCE_LENGTH = 207;


function findLine(rnc,fn) {
    fs.readFile('DGII_RNC.txt', 'utf-8', function(err, data){    
        let startPoint = data.search(rnc)
        let extract = data.substring(startPoint, startPoint+MAX_SENTENCE_LENGTH);
        let arrayOfSolution = extract.split("\n")
        fn(arrayOfSolution[0])
    }); 
}

//you shlould call it this way
findLine("101020164", function(sentence){
    //In sentence the sentence variable u have the value u want 
    console.log(sentence);
  });

