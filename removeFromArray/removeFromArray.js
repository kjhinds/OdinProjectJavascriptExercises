const removeFromArray = function() {
    var completeArray = arguments[0];
    var elementsToRemove = [];
    for (i=1; i<arguments.length;i++){
        elementsToRemove[i-1]=arguments[i];
    }
    for (j=completeArray.length-1;j>=0;j--){
        for (k=0; k<elementsToRemove.length; k++){
            if (completeArray[j] === elementsToRemove[k]){
                completeArray.splice(j,1);
            }
        }
    }
    return completeArray;
}

module.exports = removeFromArray
