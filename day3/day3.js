fs = require('fs');
var input = fs.readFileSync('input','utf8')

function countHouses(input){
    var visited = {"0,0":true};
    x=0;
    y=0;
    for(i=0; i<input.length; i++){
      if (input[i] == "^") y++;
      else if (input[i] == "v") y--;
      else if (input[i] == ">") x++;
      else if (input[i] == "<") x--;
      visited[x+","+y] = true;
    }
    return Object.keys(visited).length
}

console.log(countHouses(input));