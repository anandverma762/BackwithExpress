// const http=require('http')

const exp=require('express')

const app=exp();

app.use((req,res,next)=>{
    console.log("I am in Middleware")
    next();
})

app.use((req,res,next)=>{
    console.log("I am in 2nd  Middleware")
    res.send('<p1 style="color:green;"><h1>Welcome TO Express JS</h1></p1>')
    res.send('{key1:value')
})
// const serv=http.createServer(app);

// serv.listen(4000);
app.listen(4000)
