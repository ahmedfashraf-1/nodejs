"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const express_validator_1 = require("express-validator");
const validateUser = () => {
    return [
        (0, express_validator_1.check)("username").notEmpty().withMessage("Username is required").
            isLength({ min: 5, max: 20 }).withMessage("Username must be between 5 and 20 characters"),
        (0, express_validator_1.check)("password").notEmpty().withMessage("Password is required"),
        (0, express_validator_1.check)("email").isEmail().withMessage("Email is required")
    ];
};
exports.validateUser = validateUser;
