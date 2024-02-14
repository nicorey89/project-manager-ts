"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = exports.generateTokenRandom = exports.errorResponse = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorResponse = (res, error, origin) => {
    return res.status(error.status || 500).json({
        ok: false,
        msg: error instanceof Error ? error.message : `Upss, hubo un error en ${origin}`
    });
};
exports.errorResponse = errorResponse;
const generateTokenRandom = () => {
    const random = Math.random().toString(32).substring(2);
    const date = Date.now().toString(32);
    return random + date;
};
exports.generateTokenRandom = generateTokenRandom;
const generateJWT = (payload) => jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h'
});
exports.generateJWT = generateJWT;
