import express from'express';
import { ProductEntity } from '../entities/Product_entity';
import { ProductService } from '../services/Product_services';
const productService = new ProductService
const router = express.Router();
router.post('/',async(req,res)=>{

    const {Address,country,name,Price,ateOfManufacture,ExpiryDate}=req.body
    // const {name,country}=req.body
    const product=new ProductEntity()
    product.name=name;
    product.country=country;
    product.ExpiryDate=ExpiryDate;
    product.ateOfManufacture=ateOfManufacture;
    product.Price=Price;
    product.Address=Address;

    await productService.insert(product)
   
 return res.json(product)

})
export{
    router as ProductController
}