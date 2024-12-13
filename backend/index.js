import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

let port = 8080;

app.get("/" , (req, res) => {
    res.send("HEllo");
})
app.post("/" , (req, res) => {
    console.log(req.body);
    res.send("HEllo");
})


app.listen(port, () => console.log(`App is Listening on ${port}`));