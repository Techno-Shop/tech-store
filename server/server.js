const express = require('express');
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoute')
const cors = require('cors');
const cookieParser = require('cookie-parser');
// load env variables
require('dotenv').config()
var conn = require('./database');
const productRouter = require("./routes/productRoute");
const app = express();
const PORT= process.env.PORT || 3001;
 // express app config
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(cors({origin : ["http://localhost:3000"],
 credentials : true,
}));
app.use("/auth", userRoutes);
app.use("/product",productRouter)

app.listen(PORT, () =>
console.log(`app listening at http://localhost:${PORT}`)
);


