import express from "express";
import { config } from "dotenv";

import routes from "./routes/index.routes.js";

config();

const serverPort = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(routes);


app.listen(serverPort, () => {
    console.log(`🙌 Famoso pé na porta http://localhost:${serverPort}`);
});

