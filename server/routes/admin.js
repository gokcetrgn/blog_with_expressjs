const express = require('express');

const router = express.Router();

const Post = require('../models/Posts');
const User = require('../models/User');

const adminLayout = '../views/layouts/admin';

;
/** GET
 * Home
 */

router.get('/admin', async (req, res) => {
    const locals = {
        title: "Admin",
        description: "Simple Blog with Nodejs"
     }
     try{
        const data = await Post.find();
        res.render('admin/index', { locals, layout: adminLayout});

     }catch(error){
        console.log(error);
     }

});

/** POST 
 * ADMİN  
 * Check */
router.post('/admin', async (req, res) => {
    try{
      const { username, password} = req.body;
      if(req.body.username === 'admin' && req.body.password === 'password') {
         res.send("You are logged in.");
      }  else{
         res.send("Wrong username or password");
      }


    }catch(error){
       console.log(error);
    }

});

/** POST 
 * ADMİN  
 * Check */
router.post('/register', async (req, res) => {
   try{
     const { username, password} = req.body;
     if(req.body.username === 'admin' && req.body.password === 'password') {
        res.send("You are logged in.");
     }  else{
        res.send("Wrong username or password");
     }


   }catch(error){
      console.log(error);
   }

});

module.exports = router;