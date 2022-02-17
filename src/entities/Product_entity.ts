import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CustomerEntity } from "./customer_entity";

@Entity('product')
export class ProductEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    ProductID:number;
    @Column()
    name:string;
    @Column()
    country:string;
    @Column()
    ExpiryDate:number;
    @Column()
    ateOfManufacture:number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @Column()
    Price:number;
    @Column()
    Address:string;
    // @Column()
    // Brand:string;
    @ManyToMany(()=>CustomerEntity,{
        onDelete:"SET NULL"
    })
    @JoinTable({
   
       name:'ProductCustomer',
       joinColumn:{
           name:'ProductId',
        referencedColumnName:'ProductID',
       },
       inverseJoinColumn:{
           name:'CustomerId',
           referencedColumnName:'CustomerID'
       }
    })
    customers:CustomerEntity[];
    Name: any;

}

