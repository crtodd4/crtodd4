console.log("OK");

const backgrounds = [
  'bg0'
  'bg1'
  'bg2'
];

var numRan;
numRan = Math.floor(Math.random() * backgrounds.length);

let pageBackground = document.querySelector('body');

pageBackground.classname = backgrounds[numRand];