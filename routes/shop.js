const exp=require('express');

const router=exp.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>Hello, Welcome to Express</h1>');
})

module.exports=router;