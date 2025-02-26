const express = require('express');

const router = express.Router();

const Post = require('../models/Posts');


router.get('/about',(req,res) => {
    res.render('about');
});

router.get('', async (req,res) => {
    
    try {
        const locals = 
    {
        title: "NodeJs Blog",
        description: "Simple Blog created with Nodejs, Express and MongoDB."
    
    }


    let perPage = 10;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt : -1}}])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();
        
        
    const count = await Post.countDocuments();
    const nextPage = parseInt(page) +1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);


        res.render('index', 
        {
            
            locals , 
            data,
            curent: page,
            nextPage: hasNextPage ? nextPage : null
        });
    } catch (error) {
        console.log(error);
    }

    
});

/** GET / POST: id */
router.get('/post/:id', async (req,res) => {
    const locals = 
    {
        title: "NodeJs Blog",
        description: "Simple Blog created with Nodejs, Express and MongoDB."
    
    }

    let slug = req.params.id;


    try {
        const data = await Post.findById({_id: slug});
        res.render('post', { locals , data});
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