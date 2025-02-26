const express = require('express');

const router = express.Router();

const Post = require('../models/Posts');


router.get('/about',(req,res) => {
    res.render('about');
});

router.get('', async (req,res) => {
    const locals = 
    {
        title: "NodeJs Blog",
        description: "Simple Blog created with Nodejs, Express and MongoDB."
    
    }

    try {
        const data = await Post.find();
        res.render('index', { locals , data});
    } catch (error) {
        console.log(error);
    }

    
});


// function insertPostData(){
//     Post.insertMany([

//         {
//             title: "Building a Blog",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog",
//             body: "This is the body text"
//         },
//         {
//             title: "Popular games",
//             body: "The games which childrens play"
//         },
//         {
//             title: "Can you believe that?",
//             body: "Software developming is not easy"
//         },
//         {
//             title: "How can i improve myself in English?",
//             body: "All you know is my blog!"
//         },
//         {
//             title: "Searching a job",
//             body: "It's very hard"
//         },
//         {
//             title: "About Python",
//             body: "Python is easier"
//         },

//     ])
// }

// insertPostData();


module.exports = router;