import { ProductEntity } from "../entities/Product_entity";
export class ProductService{
    public async insert(data:ProductEntity){
        const product=ProductEntity.create(data);
         await product.save()
         return  product

    }
}