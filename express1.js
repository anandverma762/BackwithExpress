// const http=require('http')
const bodyparse=require('body-parser');

const exp=require('express')

const app=exp();

app.use(bodyparse.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <input type="text" name="quantity"><button type="Submit">ADD</buttton></form>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello, Welcome to Express</h1>');
})

// const serv=http.createServer(app);

// serv.listen(4000);
app.listen(4000)
