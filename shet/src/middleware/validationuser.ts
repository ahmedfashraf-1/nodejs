import { check } from "express-validator";
export const validateUser=() => {
    return[
        check("username").notEmpty().withMessage("Username is required").
        isLength({min:5,max:20}).withMessage("Username must be between 5 and 20 characters"),
        check("password").notEmpty().withMessage("Password is required"),
        check("email").isEmail().withMessage("Email is required")
    ];
}