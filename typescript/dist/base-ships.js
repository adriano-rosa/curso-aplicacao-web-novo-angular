"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with ".concat(this.propulsor));
    }; // sempre que acessar um atributo da classe, utilizar o this
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
