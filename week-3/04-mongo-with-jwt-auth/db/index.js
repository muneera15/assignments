const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://muneerashaik03:muneera03@cluster0.ckq1avn.mongodb.net/course_selling_app2');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "course"
    }]
    // Schema definition here
});
    

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    Description : String,
    imageLink : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}