"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const port = config_1.default.port;
// getting-started.js
function server() {
    try {
        mongoose_1.default.connect(`${config_1.default.database_url}`);
        console.log('connected to MongoDB');
        app_1.default.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }
    catch (error) {
        console.log(error);
    }
}
server();
