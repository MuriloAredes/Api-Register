import "reflect-metadata";
import express from "express";

import "./database/dataSource";
import routes from "./shared/routes/routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("server started at http//localhost:3000 "));
