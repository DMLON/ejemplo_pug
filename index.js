const express = require('express');
const path = require('path');
const pug = require('pug');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views','./views');
app.set('viwe engine','pug');
app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/hello',(req,res)=>{
    res.render('hello.pug',{message:"This is PUG on express!"});
});

app.get('/datos',(req,res)=>{
    let {titulo, nivel,min,max} = req.query;
    
    res.render('datos.pug',req.query);
});





const PORT = 8080;
app.listen(PORT, (err) => {
    if(err)
        throw new Error(`Error creating server $${err }`);
    console.log(`Server started on $${PORT }`);
});