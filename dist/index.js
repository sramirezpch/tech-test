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
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const cors_1 = __importDefault(require("cors"));
const request_promise_1 = __importDefault(require("request-promise"));
require("./database");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.post('/trm', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { source, target } = req.body;
    try {
        const options = {
            method: 'GET',
            uri: "https://transferwise.com/gb/currency-converter/api/historic?source=" + source + "&target=" + target + "&period=30",
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };
        const result = yield (0, request_promise_1.default)(options);
        res.json(result);
    }
    catch (error) {
        logger_1.default.info(error);
    }
}));
app.listen(port, () => {
    logger_1.default.log({ level: 'info', message: `Server started at port ${port}` });
});
//# sourceMappingURL=index.js.map