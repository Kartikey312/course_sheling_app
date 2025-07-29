const {Router } = require('express');
const userRouter = Router();
userRouter.post('/singup',function (req, res) {
    res.send("User signed up");
});
userRouter.post('/singin',function (req, res) {
    res.send("User signed up");
});
userRouter.post('/purchses',function (req, res) {
    res.send("User signed up");
});
module.exports = {userRouter:userRouter};