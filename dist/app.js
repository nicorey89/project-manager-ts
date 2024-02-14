"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = __importDefault(require("./routes"));
const http_errors_1 = __importDefault(require("http-errors"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
/* const whiteList = [process.env.URL_FRONTEND];
const corsOptions = {
  origin : function(origin : any, callback : any){
    if(whiteList.includes(origin)){
      callback(null, true)
    }else {
      callback(new Error("Error de Cors"))
    }
  }
}  */
/* app.use(cors(corsOptions)) */
app.use((0, cors_1.default)());
(0, db_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use(function (req, res, next) {
    const err = (0, http_errors_1.default)(404, 'Not Found');
    next(err);
});
app.use(function (err, req, res, next) {
    return res.status(err.status || 500).json({
        ok: false,
        msg: err.message
    });
});
app.listen(process.env.PORT, () => {
    console.log(`Server running in https://localhost:${process.env.PORT}`);
});
