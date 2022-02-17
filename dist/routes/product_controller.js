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
exports.ProductController = void 0;
const express_1 = __importDefault(require("express"));
const Product_entity_1 = require("../entities/Product_entity");
const Product_services_1 = require("../services/Product_services");
const productService = new Product_services_1.ProductService;
const router = express_1.default.Router();
exports.ProductController = router;
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Address, country, name, Price, ateOfManufacture, ExpiryDate } = req.body;
    // const {name,country}=req.body
    const product = new Product_entity_1.ProductEntity();
    product.name = name;
    product.country = country;
    product.ExpiryDate = ExpiryDate;
    product.ateOfManufacture = ateOfManufacture;
    product.Price = Price;
    product.Address = Address;
    yield productService.insert(product);
    return res.json(product);
}));
