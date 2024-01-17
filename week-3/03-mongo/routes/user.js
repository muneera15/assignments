const express = require("express");
const { User,Course } = require("../db");
const router = express.Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg : "user signed in"
    })
    // Implement user signup logic
});

router.get('/courses', async (req, res) => {
    const fetch = Course.find({});
    res.json({course : fetch})
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username : username
    },{
       "$push": { purchasedCourses : courseId
        }
    })
    res.json({ msg : "course is purchased"})
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const response = await User.findOne({
        username :  req.headers.username
    });
    console.log(response.purchasedCourses);
    const courses = await Course.findOne({
        _id :{
            "$in":response.purchasedCourses
        }
    })
        res.json({
            courses: courses
    })
});

module.exports = router