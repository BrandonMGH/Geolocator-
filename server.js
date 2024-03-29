const express = require("express");
const app = express();


const PORT = process.env.PORT || 7070;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
