const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAccomplishment, postAccomplishment, putAccomplishment, deleteAccomplishment } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/accomplishment", getAccomplishment);
app.post("/api/post/accomplishment", postAccomplishment);
app.put("/api/put/accomplishment", putAccomplishment);
app.delete("/api/delete/accomplishment", deleteAccomplishment)

app.listen(4000, () => console.log("Server running on 4000"));
