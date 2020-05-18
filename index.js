const express=require('express');
const port=8080; 
const app=express();
const db=require('./config/mongoose');
app.use(express.static('./assests'));
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running Express:${err}`);
    }
    console.log(`Succesfully runs on port:${port}`);
});

