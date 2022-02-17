import { Like } from "typeorm";
import { CartEntity } from "../entities/cart.entity";
import { CustomerEntity } from "../entities/customer_entity"
export class CustomerService{
    public async insert(data:CustomerEntity){
       const customer=CustomerEntity.create(data)
       await customer.save()
        return customer;
    }

    public async find(customerId:number){
        const customer =await CustomerEntity.findOne(customerId,{

            relations:["carts"]
        })
        return customer;
    }
    public async addCart(customer:CustomerEntity,cart:CartEntity){
        if(customer.carts !=undefined){
            customer.carts.push(cart)
        }else{
            customer.carts=[cart]
        }
       await customer.save()
       return customer;
    }
    public async delete(customerId:number){
      return await CustomerEntity.delete(customerId)
    }
    public async findAll(firstName:string){
        const customer=await CustomerEntity.find({
            where:{
                FirstName:Like(`%${firstName}%`)
                // FirstName:Like(`%reza%`)
            },
                relations:["carts"]
                  
        })
        
            return customer
        
        
    }
    
    

}