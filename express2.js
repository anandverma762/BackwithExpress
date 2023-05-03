// const http=require('http')
const bodyparse=require('body-parser');
const exp=require('express');

const adminrout=require('./routes/admin');
const shoprout=require('./routes/shop');
const app=exp();

app.use(bodyparse.urlencoded({extended:false}))

app.use('/admin',adminrout);

app.use('/shop',shoprout);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})

// const serv=http.createServer(app);

// serv.listen(4000);
app.listen(4000)
