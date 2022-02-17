import express from 'express';
import { CartEntity } from '../entities/cart.entity';
import { CartService } from '../services/cart_service';
const router=express.Router();
const cart=new CartEntity();
const cartService=new CartService()

router.post('/',async(req,res)=>{
  const {ProductType,NumberOfProduct,Shopinglist}=req.body
  cart.ProductType=ProductType;
  cart.NumberOfProduct=NumberOfProduct;
  cart.Shopinglist=Shopinglist;

     await cartService.insert(cart)
  return res.json(cart)

})
router.get('/',async(req,res)=>{
  const{ProductType}=req.query
  console.log(ProductType);
  const carts= await cartService.findAll((ProductType || '') as string)
  // if(!carts){
  //   return res.status(404).send('Brand NotFound')
  // }
  // else{
  return res.json(carts)
  // }

  
})
  export{
    router as CartController
  }

