import cookieParser from "cookie-parser";
import cors from "cors";
import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import passport from "passport";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
import kPassport from "./middleware/passport";
import exampleRoute from "./routes/exampleRoutes";
import userRoute from "./routes/userRoutes";
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
kPassport(passport);

app.use("/", exampleRoute);
app.use("/user", userRoute);

app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`Listening On PORT ${PORT}`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect database");
  });
