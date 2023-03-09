import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json(), cors()); // to parse JSON data in the request body and enable CORS

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/saveData", (req: Request, res: Response) => {
  console.log(req.body); // log the received data
  res.json({ msg: "Server recieved data" }); // send a response back to the client
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
