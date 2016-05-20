'use strict';

function fibonacci_series(n) {

    var newArray = [];
    newArray.push(0, 1);
    if (n >= 2) {
        for (var a = 2; a <= n; a++) {
            newArray.push(newArray[a - 2] + newArray[a - 1]);
        }
    }

    return newArray;
}


module.exports = fibonacci_series;
