"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interscetion = exports.Union = void 0;
const union_1 = __importDefault(require("./algorithm/union"));
exports.Union = union_1.default;
const inersection_1 = __importDefault(require("./algorithm/inersection"));
exports.Interscetion = inersection_1.default;
