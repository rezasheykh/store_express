import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartEntity } from "./cart.entity";
import { ProductEntity } from "./Product_entity";

@Entity('Customer')
export class CustomerEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
   CustomerID:number;
    @Column()
    FirstName:string;
   @Column()
   LastName:string; 
   @Column()
   Age:number;
   @Column()
   Country:string;
   @Column()
   Address:string;
   @Column()
   Email:string;
   @Column()
   PhonNumber:string;
   @CreateDateColumn()
   createdAt: Date;
   @UpdateDateColumn()
   updatedAt: Date;
   @OneToMany(()=>CartEntity,(cart)=>cart.relatedCustomer)
   carts:CartEntity[]
   @ManyToMany(()=>ProductEntity)
   @JoinTable({
       name:'ProductCustomer',
       joinColumn:{
           name:'CustomerId',
        referencedColumnName:'CustomerID',
       },
       inverseJoinColumn:{
           name:'ProductId',
           referencedColumnName:'ProductID'
       }
       
   })    
   products:ProductEntity[];

}
