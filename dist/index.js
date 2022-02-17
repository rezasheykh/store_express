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
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const Product_entity_1 = require("./entities/Product_entity");
const product_controller_1 = require("./routes/product_controller");
const customer_entity_1 = require("./entities/customer_entity");
const customer_controller_1 = require("./routes/customer_controller ");
const cart_entity_1 = require("./entities/cart.entity");
const cart_controller_1 = require("./routes/cart_controller");
const user_entity_1 = require("./entities/user_entity");
const app = (0, express_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, typeorm_1.createConnection)({
                type: "mssql",
                host: 'localhost',
                // port:parseInt(port as string), 
                username: 'user1',
                password: "123",
                extra: {
                    trustServerCertificate: true,
                },
                database: 'storeDB',
                synchronize: true,
                // entities:["src/entities/*.ts"],
                entities: [customer_entity_1.CustomerEntity, Product_entity_1.ProductEntity, cart_entity_1.CartEntity, user_entity_1.UserEntity],
                logging: true,
            });
            console.log('database connected');
            app.use(express_1.default.json());
            app.use('/api/product', product_controller_1.ProductController);
            app.use('/api/customer', customer_controller_1.CustomerCotroller);
            app.use('/api/cart', cart_controller_1.CartController);
            app.listen(3000, () => {
                console.log('server run in port 3000');
            });
        }
        catch (e) {
            console.error(e);
            console.log('connectuion error');
        }
    });
}
main();
