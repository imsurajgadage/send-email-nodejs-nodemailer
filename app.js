const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const { sendAppointmentInfo, sendAcademicsInfo } = require("./controllers/sendMail");


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./.env" });

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

let PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Im Server");
});

app.post("/sendAppointmentInfo", sendAppointmentInfo);

app.post("/sendAcademicsInfo", sendAcademicsInfo);


const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Im live on server ${PORT}`);
    });
  } catch (error) { }
};
start();