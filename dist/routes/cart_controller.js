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
exports.CartController = void 0;
const express_1 = __importDefault(require("express"));
const cart_entity_1 = require("../entities/cart.entity");
const cart_service_1 = require("../services/cart_service");
const router = express_1.default.Router();
exports.CartController = router;
const cart = new cart_entity_1.CartEntity();
const cartService = new cart_service_1.CartService();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ProductType, NumberOfProduct, Shopinglist } = req.body;
    cart.ProductType = ProductType;
    cart.NumberOfProduct = NumberOfProduct;
    cart.Shopinglist = Shopinglist;
    yield cartService.insert(cart);
    return res.json(cart);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ProductType } = req.query;
    const carts = yield cartService.findAll((ProductType || ''));
    if (!carts) {
        return res.status(404).send('Brand NotFound');
    }
    else {
        return res.json(carts);
    }
}));
