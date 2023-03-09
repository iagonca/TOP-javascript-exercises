const removeFromArray = function(array, ...arg) {
    for (let i = 0; i < arg.length; i++) {
        if (array.includes(arg[i]))
        array.splice(array.indexOf(arg[i]), 1)
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;