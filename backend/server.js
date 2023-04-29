const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server started on PORT: ${PORT}`));
