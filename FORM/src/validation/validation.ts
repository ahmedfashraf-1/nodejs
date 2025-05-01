import { check } from "express-validator";
export const validateuser = () => {
    return [
        check("username").notEmpty().withMessage("Name is required"),
        check("email").isEmail().withMessage("Email is invalid"),
        check("password").notEmpty().withMessage("Password is required"),
    ];
}