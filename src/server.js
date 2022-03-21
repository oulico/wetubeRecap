import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Server Listening on port ${PORT}`);

app.listen(PORT, handleListening);

app.get("/", (req, res) => res.send("Hello Stranger"));
