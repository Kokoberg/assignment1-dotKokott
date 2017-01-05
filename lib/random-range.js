module.exports = {
    random: function(min, max) {
        if (typeof min === 'undefined') {
          min = 1;
        }
        if (typeof max === 'undefined') {
          max = min;
          min = 0;
        }

        return Math.random() * (max - min) + min;
    },

    randomInt: function(min, max) {
        return Math.floor(this.random(min, max));
    }
};
