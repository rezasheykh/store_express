"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntity = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer_entity");
// import { CustomerEntity } from "./customer_entity";
let CartEntity = class CartEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "CartID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartEntity.prototype, "ProductType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "NumberOfProduct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "Shopinglist", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CartEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CartEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.CustomerEntity, (customer) => customer.carts, {
        onDelete: "SET NULL"
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'customerID'
    }),
    __metadata("design:type", customer_entity_1.CustomerEntity)
], CartEntity.prototype, "relatedCustomer", void 0);
CartEntity = __decorate([
    (0, typeorm_1.Entity)('Cart')
], CartEntity);
exports.CartEntity = CartEntity;
