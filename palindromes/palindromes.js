const palindromes = function(phrase) {
    let phraseArray = phrase.toUpperCase().replace( /[^A-Z]|\s/g, '').split('');
    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i] != phraseArray[(phraseArray.length - 1) - i]) {
            return false;
        }   
    }
    return true;
}

module.exports = palindromes
