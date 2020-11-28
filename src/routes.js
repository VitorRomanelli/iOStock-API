import { Router } from "express";

import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import ProductController from "./controllers/ProductController";
import StockMoveController from "./controllers/StockMoveController";

import authMiddleware from "./middlewares/auth";

const routes = Router();

routes.post("/register", UserController.create);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/authenticated", (req, res) => res.send());
routes.get("/products", ProductController.list);
routes.post("/register/product", ProductController.create);
routes.get("/stockmoves", StockMoveController.list);
routes.post("/register/stockmoves", StockMoveController.create);


export default routes;