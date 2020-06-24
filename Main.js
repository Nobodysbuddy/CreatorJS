var getMax = function(a, b, c=0, d=0) {
    return Math.max(a, b, c, d);
}

var getMin = function(a, b, c=0, d=0) {
    return Math.min(a, b, c, d);
}

var creator = {
    "nums": {
        "getMax": getMax,
        "getMin": getMin
    },
    "strs": {

    },
    "arrs": {

    }
}

module.exports = creator;