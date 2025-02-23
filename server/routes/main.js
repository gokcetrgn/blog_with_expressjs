const express = require('express');

const router = express.Router();

router.get('/about',(req,res) => {
    res.render('about');
});

router.get('',(req,res) => {
    const locals = 
    {
        title: "NodeJs Blog",
        description: "Simple Blog created with Nodejs, Express and MongoDB."
    }

    res.render('index', { locals });
});



module.exports = router;