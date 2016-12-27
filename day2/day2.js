fs = require('fs');
var input = fs.readFileSync('input','utf8')
input = input.split("\n");

function paperSqFt(input){
    var total = 0;
    for(line in input){
        dimentions = input[line].split("x");
        for(var i=0;i<dimentions.length;i++){
          dimentions[i]=parseInt(dimentions[i]);
        }
        var length = dimentions[0];
        var width = dimentions[1];
        var hight = dimentions[2];
        var sides = [length*width,width*hight,hight*length];
        total += 2*(length*width+width*hight+hight*length);
        total += Math.min.apply(null,sides);
    }
    return total;
}

console.log(paperSqFt(input));