var getMax = function(a, b, c=0, d=0) {
    return Math.max(a, b, c, d);
}

var getMin = function(a, b, c=0, d=0) {
    return Math.min(a, b, c, d);
}

var floor = function(a) {
    return Math.floor(a);
}

var ceil = function(a) {
    return Math.ceil(a);
}

var round = function(a) {
    return Math.round(a);
}

var sqr = function(a) {
    return Math.pow(a, 2);
}

var cube = function(a) {
    return Math.pow(a, 3);
};

var pow = function(a, b) {
    return Math.pow(a, b);
}

var creator = {
    "nums": {
        "getMax": getMax,
        "getMin": getMin,
        "floor": floor,
        "ceil": ceil,
        "round": round,
        "sqr": sqr,
        "cube": cube,
        "pow": pow
    },
    "strs": {

    },
    "arrs": {

    }
}

module.exports = creator;