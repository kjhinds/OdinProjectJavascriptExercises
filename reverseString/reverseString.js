const reverseString = function(str) {
    var strArray = str.split('');
    var reversedArray = [];
    for (i = strArray.length-1; i >= 0; i--){
        reversedArray.push(strArray[i]);
    }
    return reversedArray.join('');
}

module.exports = reverseString
