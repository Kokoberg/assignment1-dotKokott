var testbed = require("canvas-testbed")
var random = require("./lib/random-range.js");
var col = require("./lib/color.js");

var SimplexNoise = require('simplex-noise')
simplex = new SimplexNoise(Math.random);

var time = 0;

var bgColor = 'rgba(0, 0, 0, 1)';
function render(ctx, width, height, dt) {
    time += dt * 0.01;

    ctx.fillStyle = bgColor;

    ctx.fillRect(0, 0, width, height);


    var sizeX = width / 6;
    var sizeY = height / 6;
    var noiseSize = 32;

    var stepX = (width / sizeX);
    var stepY = (height / sizeY);

    for(var x = 0; x < sizeX; x++) {
        for(var y = 0; y < sizeY; y++) {
            var r = simplex.noise3D(x / noiseSize, y / noiseSize, time / noiseSize) * 0.5 + 0.5;
            var g = simplex.noise3D(x / noiseSize / 2, y / noiseSize / 2, time / noiseSize / 2) * 0.5 + 0.5;
            
            ctx.fillStyle = col.HSLA(r * 255, g * 255);
            ctx.fillRect(stepX * x, stepY * y, stepX + 1, stepY + 1);
        }
    }
}

function start(ctx, width, height) {

}

testbed(render, {
    canvas: document.createElement("canvas"),
    onReady: start
})
