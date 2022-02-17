import express from 'express';
import { CustomerEntity } from '../entities/customer_entity';
import { CartService } from '../services/cart_service';
import { CustomerService } from '../services/customer_service';
const customerService=new CustomerService()
const cartService=new CartService()
const router=express.Router();
router.get('/',async(req,res)=>{
  const {firstName}=req.query
  const customer= await customerService.findAll((firstName ||"")as string)
  
  return res.json(customer)

})
router.post('/',async(req,res)=>{
const {FirstName,LastName,Age,Country,Address,Email,PhonNumber}=req.body
let customer=new CustomerEntity()
customer.FirstName=FirstName;
customer.LastName=LastName;
customer.Age=Age;
customer.Country=Country
customer.Address=Address;
customer.Email=Email;
customer.PhonNumber=PhonNumber;
 customer= await customerService.insert(customer)
  return res.json(customer)
})
router.put('/:customerId/new-cart/:cartId', async(req,res)=>{
  
   const { customerId,cartId}=req.params

   const customer= await customerService.find(parseInt(customerId))
   if(!customer){

   return  res.status(404).send('Customer Not Found')
   }

   const cart= await cartService.find(parseInt(cartId))
  if(!cart){
    return res.status(404).send('Cart Not Found')
  }

 const updatedCustomer=await customerService.addCart(customer,cart)
 return  res.json(updatedCustomer)

})
router.delete('/:customerId',async(req,res)=>{
  try{
  const {customerId}=req.params
     const customer= await customerService.find(parseInt(customerId))
     if(!customer){
       return res.status(404).send('customer Not Found')
     }
      await customerService.delete(parseInt(customerId))
      return res.json(customer)
    }
    catch(e){
     return res.status(500).send(`Error: ${e}`)

    }
})

export{
    router as CustomerCotroller
}

