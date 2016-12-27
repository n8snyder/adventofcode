var crypto = require('crypto');

var input = "iwrupvqb";

function mineAdventCoins(input){
    var firstFive;
    number = 0;
    while(firstFive != "00000"){
        number++;
        var combinedInput = input + number;
        var hash = crypto.createHash('md5').update(combinedInput).digest('hex');
        firstFive = hash.slice(0, 5);
    }
    return number;
}

console.log(mineAdventCoins(input));