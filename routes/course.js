const {Router} = require('express');
const courseRouter = Router();

courseRouter.post("/purchase", function (req, res) {
    res.send("Course purchased");
}); 
courseRouter.post("/preview", function (req, res) {
    res.send("Course added");
}   );

module.exports = {courseRouter: courseRouter};  