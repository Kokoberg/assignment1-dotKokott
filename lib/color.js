var random = require('./random-range.js')

module.exports = {
    HSLA: function(value, offset) {
        var hue = value % 360 + (offset || 0);
        return 'hsla(' + hue + ',100%,50%,1)';
    },

    randomRGB: function(alpha) {
        alpha = alpha || 1;

        var r = random.randomInt(0, 255),
            g = random.randomInt(0, 255),
            b = random.randomInt(0, 255);

        return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    }
};
