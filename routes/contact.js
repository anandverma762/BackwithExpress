const exp=require('express');
const path=require('path')
const router=exp.Router();

const rootdir=require('../utility/path')
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contactus.htm'));
    // res.sendFile(path.join(__dirname,'../','views','shop.htm'));
})

router.post('/success',(req,res,next)=>{
    res.redirect('/success');
})

module.exports=router;