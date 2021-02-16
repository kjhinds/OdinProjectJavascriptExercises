const sumAll = function(minInt, maxInt) {
    var sum = 0;
    if (minInt < 0 || maxInt < 0 ||
            !Number.isInteger(minInt) || !Number.isInteger(maxInt)) {
        return 'ERROR';
    }
    if (minInt > maxInt){
        k = maxInt;
        maxInt = minInt;
        minInt = k;
    }
    for (i=minInt; i<=maxInt; i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll
