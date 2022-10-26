mongoose
  .connect("mongodb://localhost:27017/tech-store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoose server"))
  .catch((err) => {
    console.log(err);
  });
