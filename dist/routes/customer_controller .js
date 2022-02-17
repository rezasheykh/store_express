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
exports.CustomerCotroller = void 0;
const express_1 = __importDefault(require("express"));
const customer_entity_1 = require("../entities/customer_entity");
const cart_service_1 = require("../services/cart_service");
const customer_service_1 = require("../services/customer_service");
const customerService = new customer_service_1.CustomerService();
const cartService = new cart_service_1.CartService();
const router = express_1.default.Router();
exports.CustomerCotroller = router;
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { FirstName, LastName, Age, Country, Address, Email, PhonNumber } = req.body;
    const customer = new customer_entity_1.CustomerEntity();
    customer.FirstName = FirstName;
    customer.LastName = LastName;
    customer.Age = Age;
    customer.Country = Country;
    customer.Address = Address;
    customer.Email = Email;
    customer.PhonNumber = PhonNumber;
    yield customerService.insert(customer);
    return res.json(customer);
}));
router.put('/:customerId/new-cart/:cartId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId, cartId } = req.params;
    const customer = yield customerService.find(parseInt(customerId));
    if (!customerId) {
        return res.status(404).send('Customer Not Found');
    }
    const cart = yield cartService.find(parseInt(cartId));
    if (!cartId) {
        return res.status(404).send('Cart Not Found');
    }
    const updatedCustomer = yield customerService.addCart(customer, cart);
    return res.json(updatedCustomer);
}));
router.delete('/:customerId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customerId } = req.params;
        const customer = yield customerService.find(parseInt(customerId));
        if (!customer) {
            return res.status(404).send('customer Not Found');
        }
        yield customerService.delete(parseInt(customerId));
        return res.json(customer);
    }
    catch (e) {
        return res.status(500).send(`Error: ${e}`);
    }
}));
