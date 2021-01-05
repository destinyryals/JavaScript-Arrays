//EXCERSICE 2:

let int = [400,105,624,997,279,228] 
function ascending() {
    return int.sort(function(a, b){return a-b});
}
function descending() {
    return int.sort(function(a, b){return b-a});
}

//EXCERCISE 3:

let multiDimensionalArray = [
    ['Moana', 'Lemonade Mouth', 'Princess and the Frog'],//Disney
    ['The Girl Next Door', 'Us', 'A Quiet Place'],//Horror
    ['Operation Christmas Drop', 'The Princess Switch', 'The Princess Switch: Switched Again']//Netflix Christmas Movies
]

console.log(multiDimensionalArray[2][1])
multiDimensionalArray[1].shift();
multiDimensionalArray[1].unshift('Escape Room');
for(i = 0; i < multiDimensionalArray.length; i++){
    for(j = 0; j < multiDimensionalArray[i].length; j++){
        console.log(multiDimensionalArray[i][j]);
    }
}

