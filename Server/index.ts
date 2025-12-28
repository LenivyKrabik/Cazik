import cors from "cors";
import express from "express";
import { gamesInterface } from "./gamesInterface.ts";

const app = express();
app.use(cors({
  origin: "http://localhost:5173" // Дозволяємо доступ саме вашому Vite-сайту
}));
app.get("/", (req, res) => {
  res.send("Hello world!"); //Handshake
});
app.get("/games", (req, res) => {
  res.json({ list: ["slots"] }); //List of all currently supported games by API
});
app.get("/games/:game/:data", (req, res) => {
  //Returns value (:data) asked by client about game (:game)
  res.json(gamesInterface[req.params.game][req.params.data]());
});

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log("Srever is up and running");
});

//Better to implement just list of commands
process.stdin.on("data", (data) => {
  const command = data.toString().trim();

  if (command === "q") {
    console.log("Stoppig server");
    server.close(() => {
      console.log("Server stoped");
      process.exit(0);
    });
  }
});
