const repeatString = function(word, num) {
    if(num >= 0) {
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
