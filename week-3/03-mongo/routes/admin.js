const express = require("express");
const { Admin,Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username : username,
        password : password
    });
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
   const title = req.body.title;
   const description = req.body.description;
   const imageLink = req.body.imageLink;
   const price = req.body.price;
   await Course.create({
    title : title,
    description : description,
    imageLink : imageLink,
    price : price
   })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const fetch = await Course.find({});
    res.json({course : fetch});
});

module.exports = router;