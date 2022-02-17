
import { Like } from "typeorm";
import { CartEntity } from "../entities/cart.entity";

 export class CartService{
     public async insert(data:CartEntity){
      const cart= CartEntity.create(data);
       await cart.save()
      return cart
     }
      public async find(cartId:number){
         const cart = await CartEntity.findOne(cartId)
         return cart;
      }
      public async findAll(filterProductType:string){
         const carts=await CartEntity.find({
            where:{
               ProductType:Like(`%${filterProductType}%`)
            }
         });
         return carts;
      }

 }