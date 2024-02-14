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
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const helpers_1 = require("../helpers");
const User_1 = __importDefault(require("../models/User"));
const http_errors_1 = __importDefault(require("http-errors"));
const checkAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            req.user = yield User_1.default.findById(decoded.id).select("-password -checked -token -createdAt -updatedAt -__v");
            if (!req.user)
                throw (0, http_errors_1.default)(401, "Usuario inválido");
        }
        catch (error) {
            return (0, helpers_1.errorResponse)(res, error, "VERIFY-JWT");
        }
    }
    if (!token) {
        const error = (0, http_errors_1.default)(401, "Token inválido");
        return (0, helpers_1.errorResponse)(res, error, "VERIFY-JWT");
    }
    next();
});
exports.checkAuth = checkAuth;
