const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()

const userRoutes = require('./routes/userRoutes');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require("./routes/bookRoutes");

const dbURL = "mongodb+srv://taner16:taner123@cluster0.guofsiq.mongodb.net/test2";
mongoose.connect(dbURL
    , { useNewUrlParser: true }).then(() =>
        console.log("DB connect succesfully"))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
//     methodOverride('_method', {
//         methods: ['POST', 'GET'],
//     })
// );

app.use("/api", userRoutes);
app.use("/api", authorRoutes);
app.use("/api", bookRoutes)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App Started ${port}`)
})