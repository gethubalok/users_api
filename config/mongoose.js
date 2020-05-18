const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your-app-name');


const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to mongoDB"));

db.once('open',function(){
    console.log('Connected to DB.. This mesage is showing from config folder');
});

module.exports=db;
