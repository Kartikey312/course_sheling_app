const express = require('express');
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/course" ,courseRouter);
app.use("/admin", adminRouter);

const port = 3000;
console.log(`Server is running on port ${port}`);


