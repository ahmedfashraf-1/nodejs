"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJsonFile = readJsonFile;
exports.writeJsonFile = writeJsonFile;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, '../../users.json');
function readJsonFile() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.promises.access(filePath);
            const data = yield fs_1.promises.readFile(filePath, 'utf-8');
            return JSON.parse(data);
        }
        catch (e) {
            throw new Error(`Failed to read users.json`);
        }
    });
}
function writeJsonFile(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let users = [];
            // Read existing users
            try {
                yield fs_1.promises.access(filePath);
                const rawData = yield fs_1.promises.readFile(filePath, 'utf-8');
                users = JSON.parse(rawData);
            }
            catch (_a) {
                users = [];
            }
            // Validate user data
            if (!user.username || !user.email || !user.password) {
                throw new Error('Invalid user data: name, email, and password are required');
            }
            // Append new user
            users.push(user);
            // Write back to file
            yield fs_1.promises.writeFile(filePath, JSON.stringify(users, null, 2));
        }
        catch (error) {
            throw new Error(`Failed to write to users.json: ${error}`);
        }
    });
}
