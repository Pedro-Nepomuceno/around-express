const express = require("express");
const userRouter = require("./routes/users");
const cards = require("./routes/cards");
const app = express();

app.use("/", userRouter);
app.use("/", cards);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`app is listening at port: ${PORT}`);
});
