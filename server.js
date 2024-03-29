const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(require('./routes/apiRoute'));
app.use(require('./routes/htmlRoute'));


// require("./routes/htmlRoutes")(app);
// require("./routes/")(app);



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });