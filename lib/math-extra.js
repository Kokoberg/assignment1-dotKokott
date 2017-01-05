module.exports = {
    lerp: function(a, b, t) {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;

        return value1 + (value2 - value1) * amount;
    },

    mapRange: function (value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }
}
