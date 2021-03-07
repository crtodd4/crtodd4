console.log("OK");

const backgrounds = ["bg0", "bg1", "bg2"];

var numRand;
numRand = Math.floor(Math.random() * backgrounds.length);

let pageBackground = document.querySelector("body");

pageBackground.className = backgrounds[numRand];
