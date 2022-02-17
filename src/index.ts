import {createConnection} from 'typeorm';
import express from 'express';
import { HeroEntity } from './entities/hero.eitity';
import {  ProductEntity } from './entities/Product_entity';
import { ProductController } from './routes/product_controller';
import {  CustomerEntity } from './entities/customer_entity';
import { CustomerCotroller } from './routes/customer_controller ';
import { CartEntity } from './entities/cart.entity';
import { CartController } from './routes/cart_controller';
import { UserEntity } from './entities/user_entity';
const app=express();
 
async function main() {
    try{
    await createConnection({
        type:"mssql",
        host:'localhost',
        // port:parseInt(port as string), 
        username: 'user1',
        password:"123",
        extra:{
            trustServerCertificate:true,
        },
        database:'storeDB',
        synchronize:true,
        // entities:["src/entities/*.ts"],
        entities:[CustomerEntity,ProductEntity,CartEntity,UserEntity],
        logging:true,
    }) 
    console.log('database connected');
    app.use(express.json())
    app.use('/api/product',ProductController);
    app.use('/api/customer',CustomerCotroller);
    app.use('/api/cart',CartController);
    app.listen(3000 ,()=>{
        console.log('server run in port 3000');
    })
}
catch(e:any){
    console.error(e);
    console.log('connectuion error');

}
}
main();