const repeatString = function(string, num) {
    let str = "";
    const number = Math.floor(Math.random() * 1000);

    if (num < 0) return "ERROR";
    for (i = 0; i < num; i++) {
        str += string;
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
