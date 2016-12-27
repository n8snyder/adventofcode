fs = require('fs');
var input = fs.readFileSync('input','utf8')

function getFloor(input){
    floor = 0;
    for(i in input){
        if (input[i] != ")" && input[i] != "("){
            console.log(input[i]);
            continue;
        }
        else if (input[i] == "(" ){
            floor++;
        }
        else if (input[i] == ")" ){
            floor--;
        }
    }
    return floor;
}
console.log(getFloor(input));