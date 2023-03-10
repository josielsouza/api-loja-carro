import cors from "cors";

import express from "express";
import { routes } from "./routes";

const server = express();
server.use(
  cors({
    origin: "*",
  })
);
server.use(express.json());
server.use(routes);

export { server };
