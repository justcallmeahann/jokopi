import express from 'express';

import authRouter from './auth.route.js';
import hashMakerRouter from './hashMaker.route.js';
// route files
import productsRouter from './products.route.js';
import promoRouter from './promo.route.js';
import transactionsRouter from './transactions.route.js';
import userRouter from './users.route.js';

// routes from express
const routers = express.Router();

routers.use("/products", productsRouter); // products
routers.use("/users", userRouter); // users
routers.use("/promo", promoRouter); // users
routers.use("/transactions", transactionsRouter); // users

// week 6
routers.use("/apiv1/hashmaker", hashMakerRouter);
routers.use("/auth", authRouter);

export default routers;
