"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cars = exports.car = void 0;
class car {
    constructor(brand, model, Class) {
        this.brand = brand;
        this.model = model;
        this.Class = Class;
    }
}
exports.car = car;
exports.cars = [
    new car('BMW', 'G5', 1),
    new car('Audi', 'A4', 2),
    new car('Toyota', 'Corolla', 3),
];
