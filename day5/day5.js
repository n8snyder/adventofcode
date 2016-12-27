fs = require('fs');
var input = fs.readFileSync('input','utf8')
input = input.split('\n');

function niceStringCount(list){
    var vowels = ['a','e','i','o','u'];
    var naughtyStrings = ['ab','cd','pq','xy'];
    var count = 0;
    for (var i = 0; i<list.length; i++){
        var text = list[i];
        var foundVowels = {};
        var prev = undefined;
        var doubleLetter = false;
        var isNaughty = false;
        for (var j = 0; j<text.length; j++){
            if (vowels.includes(text[j])){
                foundVowels[text[j]] = true;
            }
            else if (text[j] == prev){
                doubleLetter = true;
            }
            else if (naughtyStrings.includes(prev + text[j])){
                isNaughty = true;
            }
        }
        if (isNaughty){
            continue;
        }
        else if (doubleLetter || Object.keys(foundVowels).length >= 3){
            count++;
        }
    }
    return count;
}

console.log(niceStringCount(input));