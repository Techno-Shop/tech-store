const express = require('express');
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoute')
const productRoute = require('./routes/productRoute');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// load env variables
require('dotenv').config()
const passport = require('passport');



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
// passport 
app.use(passport.initialize())
require('./security/passport')(passport)
// connect to db 
mongoose
  .connect( process.env.MONGODB_URI,
    { 
      useUnifiedTopology: true, useNewUrlParser: true,
    
    })
  .then(() => console.log("Connected to mongoose server"))
  .catch((err) => console.log(err));


  app.use("/auth", userRoutes)


    app.listen(PORT, () =>
console.log(`app listening at http://localhost:${PORT}`)
);



