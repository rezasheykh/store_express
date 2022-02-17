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
exports.CustomerService = void 0;
const customer_entity_1 = require("../entities/customer_entity");
class CustomerService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = customer_entity_1.CustomerEntity.create(data);
            yield customer.save();
            return customer;
        });
    }
    find(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield customer_entity_1.CustomerEntity.findOne(customerId);
            return customer;
        });
    }
    addCart(customer, cart) {
        return __awaiter(this, void 0, void 0, function* () {
            if (customer.carts != undefined) {
                customer.carts.push(cart);
            }
            else {
                customer.carts = [cart];
            }
            yield customer.save();
            return customer;
        });
    }
    delete(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield customer_entity_1.CustomerEntity.delete(customerId);
        });
    }
}
exports.CustomerService = CustomerService;
