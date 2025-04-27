"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interests = exports.Interest = void 0;
const users_1 = require("./users");
const cars_1 = require("./cars"); // import two classess 
class Interest {
    constructor(user, car) {
        this.user = user;
        this.car = car;
    }
}
exports.Interest = Interest;
exports.Interests = [];
// new Interest(users[0], cars[0]),
// new Interest(users[1], cars[1]),
// new Interest(users[2], cars[2]),];
for (let i = 0; i < users_1.users.length && i < cars_1.cars.length; i++) {
    exports.Interests.push(new Interest(users_1.users[i], cars_1.cars[i]));
}
