const reverseString = function(str) {
    const strArr = str.split("").reverse();
    let reversed = "";

    for (const ch of strArr) {
        reversed = reversed.concat(ch);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
