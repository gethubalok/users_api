const User=require('../../models/user');
module.exports.createUsers=function(req,res){
    console.log(req.body);
    User.create({
        name:req.body.name,
        contact:req.body.contact,
        email:req.body.contact,
        id:req.body.id
    },function(err,user){
        if(err){
            console.log('error in creating user');
            return;
          }
          console.log('**********',user);
          return res.json(200,{
              message:'Successfully created user'
          })
    })
}

module.exports.getAllusers=function(req,res){
   
    User.find({},function(err,users){
        if(err){
            console.log('Error in finding All users');
            return;
        }
        return res.json(200,{
            message:'Here are all users...',
            users:users
        })
    })   
}

module.exports.getUserWithID=function(req,res){
    console.log(req.params.id);
    User.find({id:req.params.id},function(err,user){
        if(err){
            console.log('Error in finding user');
            return;
        } 
        return res.json(200,{
            message:'User with specific id....',
            user:user
        }) 
    })
}
module.exports.UpdateUserWithID=function(req,res){
    
    var query = { id: req.params.id };
    User.findOneAndUpdate(query, {
        name:req.body.name,
        contact:req.body.contact,
        email:req.body.contact,
        id:req.body.id
    },function(err,user){
        if(err){
            console.log('Error in finding user');
            return;
        } 
        if(!user){
            return res.json(200,{
                message:'This id does not exist.....',
            }) 
        }
        return res.json(200,{
            message:'here is Updated User has been updated ....',
            user:user
        }) 
    });
}
module.exports.DeleteUserWithID=function(req,res){

    User.findOneAndDelete({id:req.params.id},function(err,user){
        if(err){
            console.log('Error in finding user');
            return;
        } 
        if(!user){
            return res.json(200,{
                message:'This id does not exist.....',
            }) 
        }
        return res.json(200,{
            message:'Following user has been deleted successfully with id....',
            user:user
        }) 
    })
}
