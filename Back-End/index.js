import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";
import Product from "./Models/Product.js";
import User from "./Models/User.js";
import cookieParser from "cookie-parser";
import productRoute from './Routes/ProductRoutes.js'
import userRoute from './Routes/UserRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);



try {
  await sequelize.authenticate();
  console.log("Database Connected");
} catch (error) {
  console.log(error);
}

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});


app.use('/products',productRoute)
app.use('/user',userRoute)

Product.belongsTo(User)
await sequelize.sync({ alter: true });