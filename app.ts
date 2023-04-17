import express, { Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";
import morgan from "morgan";
import { notFound } from "./api/middleware/not-found";
import { errorHandlerMiddleware } from "./api/middleware/error-handler";
import { sendEmail } from "./api/controllers/sendEmail";

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Email Project</h1><a href='/send'>send email</a>");
});

app.get("/send", sendEmail);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
