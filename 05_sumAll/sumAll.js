const sumAll = function(num1, num2) {
    
    return num1 < 0 || num2 < 0 ? 'ERROR' :
    typeof num1 != 'number' || typeof num2 != 'number' ? 'ERROR' :
    num1 < num2 ? num2 * (num1 + num2) / 2 :
    num1 * (num2 + num1) / 2;

};
// n2(n1 + n2) / 2
// Do not edit below this line
module.exports = sumAll;
