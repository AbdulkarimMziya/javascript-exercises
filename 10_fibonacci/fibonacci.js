const fibonacci = function(nth_term) {
    let count
    if(typeof nth_term !== "number"){
        count = parseInt(nth_term);
        if (isNaN(count)) return "OOPS";
    }
    else{
        count = nth_term;
    }

    if(count < 0) return "OOPS";
    if (count === 0) return 0;

    let secondPrev = 0, firstPrev = 1;
    for (let i = 2; i <= count; i++) {
        let nextFibNum = secondPrev + firstPrev;
        secondPrev = firstPrev;
        firstPrev = nextFibNum;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
