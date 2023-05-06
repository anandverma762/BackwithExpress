
const bodyparse = require('body-parser');
const exp = require('express');
const path=require('path')
const rootdir=require('./utility/path')

const adminrout = require('./routes/admin1');
const shoprout = require('./routes/shop1');
const contact = require('./routes/contact')
const app = exp();

app.use(bodyparse.urlencoded({ extended: false }))

app.use('/admin1', adminrout);

app.use('/shop1', shoprout);

app.use('/contactus',contact);

app.use('/success',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','success.htm'))
})

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootdir,'views','error.htm'));
})


app.listen(4000)
