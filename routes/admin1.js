const express=require('express');
const path=require('path');
const rootdir=require('../utility/path')
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','add-product.htm'))
    res.sendFile(path.join(rootdir,'views','add-product.htm'))
})

router.use('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop1');
})

module.exports=router;