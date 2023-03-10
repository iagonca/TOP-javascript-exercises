const sumAll = function(a1, aN) {
    if (a1 > 0 && typeof a1 == 'number' && aN > 0 && typeof aN == 'number') {
        const min = Math.min(a1, aN)
        const max = Math.max(a1, aN)
        let num = [];
        for (let i = min; i <= max; i++) {
            num.push(i);
        };
        const sum = (num[0] + num[num.length-1]) * num.length / 2;
        return sum;
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
