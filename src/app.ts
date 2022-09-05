import "reflect-metadata";
import express from "express";
import "./database/dataSource";
import CategoryRouter from "./routes/CategoryRoutes";
import ProductRouter from "./routes/ProductRoutes";

const app = express();

app.use(express.json());

app.use(CategoryRouter)
app.use(ProductRouter);

app.listen(3000, () => console.log("server started at http//localhost:3000 "));
