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
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
let connection;
const fun = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        connection = yield mongoose_1.default.connect('mongodb+srv://admin:admin@cluster0.41dwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        logger_1.default.info('Database connected');
    }
    catch (error) {
        logger_1.default.error(error);
    }
});
fun();
//# sourceMappingURL=database.js.map