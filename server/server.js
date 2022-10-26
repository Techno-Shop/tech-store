const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoute');


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));


mongoose
  .connect("mongodb://localhost:27017/tech-store", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
  .then(() => console.log("Connected to mongoose server"))
  .catch((err) => {
    console.log(err)});
    
    app.use("/product", productRouter);


    app.listen(port, () =>
console.log(`app listening at http://localhost:${port}`)
);



