const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.listen(PORT, console.log(`Server started on PORT: ${PORT}`));
