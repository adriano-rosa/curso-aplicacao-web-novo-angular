"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
// instanciando uma classe
var ship = new base_ships_1.Spacecraft("hiperdrive");
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the job? ".concat(goodForTheJob(falcon) ? 'yes' : 'no'));
