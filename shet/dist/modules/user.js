"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username = " ", password = " ", email = " ") {
        this.username = username;
        this.password = password;
        this.email = email;
        User.count++;
    }
    toJSON() {
        return {
            username: this.username,
            email: this.email,
            password: this.password
        };
    }
}
exports.User = User;
User.count = 0;
