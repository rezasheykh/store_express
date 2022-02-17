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
exports.CartService = void 0;
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("../entities/cart.entity");
class CartService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = cart_entity_1.CartEntity.create(data);
            yield cart.save();
            return cart;
        });
    }
    find(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield cart_entity_1.CartEntity.findOne(cartId);
            return cart;
        });
    }
    findAll(filterProductType) {
        return __awaiter(this, void 0, void 0, function* () {
            const carts = yield cart_entity_1.CartEntity.find({
                where: {
                    ProductType: (0, typeorm_1.Like)(`%${filterProductType}%`)
                }
            });
            return carts;
        });
    }
}
exports.CartService = CartService;
