import { BaseEntity, Column, CreateDateColumn, Entity,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { CustomerEntity } from "./customer_entity";
// import { CustomerEntity } from "./customer_entity";

@Entity('User')
export class UserEntity extends BaseEntity{
@PrimaryGeneratedColumn()
CartID:number;
@Column()
ProductType:string;
@Column()
NumberOfProduct:number;
@Column()
Shopinglist:number;
@CreateDateColumn()
createdAt: Date;
@UpdateDateColumn()
updatedAt: Date;
// @ManyToOne(()=>CustomerEntity,(customer)=>customer.carts,{
//     onDelete:"SET NULL"
// })
// @JoinColumn({
//     name:'customerID'
// })
// relatedCustomer:CustomerEntity

}

 
 
 