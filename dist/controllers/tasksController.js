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
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskChangeState = exports.taskRemove = exports.taskUpdate = exports.taskDetail = exports.taskStore = exports.tasksList = void 0;
const tasksList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Lista de Tareas'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en TASK-LIST'
        });
    }
});
exports.tasksList = tasksList;
const taskStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(201).json({
            ok: true,
            msg: 'Tarea guardado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en TASK-STORE'
        });
    }
});
exports.taskStore = taskStore;
const taskDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Detalle de la Tarea'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en TASK-DETAIL'
        });
    }
});
exports.taskDetail = taskDetail;
const taskUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(201).json({
            ok: true,
            msg: 'Tarea actualizada'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en TASK-UPDATE'
        });
    }
});
exports.taskUpdate = taskUpdate;
const taskRemove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Tarea eliminado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en TASK-REMOVE'
        });
    }
});
exports.taskRemove = taskRemove;
const taskChangeState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Tarea completada'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en TASK-CHANGE-STATE'
        });
    }
});
exports.taskChangeState = taskChangeState;
