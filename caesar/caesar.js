// const caesar = function(message, shift) {
//     shift = shift % 26;
//     let codedArray = [];
//     for (let i = 0; i < message.length; i++) {
//         if (/[a-zA-Z]/.test(message[i])) {
//             if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
//                 var unicode = message.charCodeAt(i) + shift;
//                 if (unicode > 90) {
//                     unicode = 64 + (unicode - 90);
//                 } else if (unicode < 65) {
//                     unicode = 91 - (65 - unicode);
//                 }
//             }
//             if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122){
//                 var unicode = message.charCodeAt(i) + shift;
//                 if (unicode > 122) {
//                     unicode = 96 + (unicode - 122);
//                 } else if (unicode < 65) {
//                     unicode = 123 - (97 - unicode);
//                 }
//             }
//             codedArray[i] = String.fromCharCode(unicode);
//         } else {
//             codedArray[i] = message[i];
//         }
//     }
//     return codedArray.join('');
// }

const caesar = function(message, shift) {
    return message.split('')
                    .map(char => shiftChar(char,shift))
                    .join('');
};

const alphaCodeSet = code => (code < 97 ? 65 : 97);

const modulo = (a,b) => ((a % b) + b) % b;

const shiftChar = function(char, shift){
    const charCode = char.charCodeAt();

    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        //Find new char code after the caesar cipher shift
        const newCharCode = charCode + shift;
        //See how far newCharCode is from beginning of alpha set
        //Is it "before" the beginning? Greater than 26 after?
        //Get modulo to see how far it really needs to shift
        wrappingShift = modulo(newCharCode - alphaCodeSet(charCode), 26);       
        return String.fromCharCode(
            //Start at beginning of upper/lowercase char codes, then add the shift
            alphaCodeSet(charCode) + wrappingShift
        );
    }
    return char;
};

module.exports = caesar
