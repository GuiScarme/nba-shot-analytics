import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello NBA World!" });
});

app.listen(3001, () => console.log("✅ Backend rodando em http://localhost:3001"));
