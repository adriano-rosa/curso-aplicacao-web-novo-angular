var message = "Help me, Obi-Wan Kenobi. You´re my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroitd;
favoriteDroitd = 'BB-8';
console.log("My favorite droid is " + favoriteDroitd);
var isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is ".concat(distance, " parsecs enough to beat Millenium Falcon? ").concat(isEnoughtToBeatMF(distance) ? 'YES' : 'NO', " "));
// lado esquerdo ficam os parâmetros => lado direito a implementação
var call = function (name) { return console.log("Do you copy, ".concat(name, "?")); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = ".concat(inc(5, 1)));
console.log("inc (5) = ".concat(inc(5)));
