import express from "express";
import cors from "cors";
import { json } from "body-parser";

const app = express();
app.use(json());
app.use(cors({ origin: true}));

app.get("/", function(req, res) {
    res.send("Server is connected !!!");
})

const port = 3000;
app.listen(port, () => {
    console.log("Server is listening on port 3000");
})

export default app;
