const repeatString = function(string, num) {
    if(num >= 0) {
    const word = string;
    let repeat = ""
    for ( let i = 0 ; i < num ; i++) {
        repeat += word;
    };
    return repeat
    }
    else {
     return 'ERROR'
    }
    
};

// Do not edit below this line
module.exports = repeatString;
