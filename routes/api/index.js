const express=require('express');
const router=express.Router();
const userApi=require('../../controllers/api/users');

router.post('/users',userApi.createUsers);

router.get('/users',userApi.getAllusers);

router.get('/users/:id',userApi.getUserWithID);

router.post('/users/:id',userApi.UpdateUserWithID);

router.delete('/users/:id',userApi.DeleteUserWithID);

module.exports=router;

