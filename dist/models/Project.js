"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
var projectSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    dateExpire: {
        type: Date,
        default: Date.now(),
    },
    client: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    collaborators: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model('Project', projectSchema);
