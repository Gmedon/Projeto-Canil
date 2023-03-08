import express from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path";

import RotasPrin from "./routes/index"

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")))

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(RotasPrin)


server.listen(process.env.PORT)