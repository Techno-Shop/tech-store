const mongoose = require("mongoose");
// const MONGODB_URI = "mongodb+srv://ad:<1234>@cluster0.0o9ethn.mongodb.net/tech-store?retryWrites=true&w=majority"
mongoose
  .connect( process.env.MONGODB_URI,
    { 
      useUnifiedTopology: true, useNewUrlParser: true,
    
    })
  .then(() => console.log("Connected to mongoose server"))
  .catch((err) => console.log(err));


const db= mongoose.connection;

module.exports = db;