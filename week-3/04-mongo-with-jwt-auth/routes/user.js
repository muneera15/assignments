const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");



// User Routes
router.post('/signup',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg : "user signed up"
    })
    // Implement user signup logic
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Implement admin signup logic
    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({username,JWT_SECRET})
    }
    res.json({
        token : token
    })
    res.status(411).json({msg : "wrong inputs"})
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const fetch = await Course.find({});
    res.json({
        courses : fetch
    })

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.body.username;
    await User.updateOne({
        username : username
    },
    {
        "$push" :{purchasedCourses : courseId
        }
    })
    // Implement course purchase logic
    res.json({msg : "course is prchased"})
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const response = await User.findOne({
        username : req.body.username
    });
    const courses = await Course.findOne({
        
        _id : {
            "$in" :response.purchasedCourses}
        });
    res.json({
        courses : courses
    });
});

module.exports = router;