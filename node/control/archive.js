const mqtt = require("mqtt");
const fs = require('fs');
const cors = require("cors");
const express = require("express");
const app = express();

const file_name = "archive.json";
const hostname = "localhost";
const port = 3002;

app.use(cors());

app.get("/", (req, res)=> {
  const data = fs.readFileSync(file_name, 'utf8').split('\n');
  res.send({ result: data });
  console.log("requested data");
});

app.listen(port, () => {
	console.log(`Control Nodejs server running at http://${hostname}:${port}/`);
});



var client = mqtt.connect("mqtt://broker.hivemq.com");
fs.writeFileSync(file_name, "", {flag: 'w+'});

client.on("connect", function () {
  client.subscribe("123123123");

  console.log("Client subscribed ");
});

client.on("message", function (topic, message) {
  console.log(message.toString());
  fs.appendFileSync(file_name, message + "\n"); 
});