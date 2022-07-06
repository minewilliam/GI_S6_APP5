const axios = require("axios");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const hostname = "localhost";
const port = 3001;
const DEVID = "https://api.particle.io/v1/devices/E00FCE68986801735C908D66";
const ACCESSTOKEN = "9bf9cd2bbb783ae5a966e1eea48c4f568ce4da29";
const GETURL = `${DEVID}/status?access_token=${ACCESSTOKEN}`;
const POSTURL = `${DEVID}/LED?access_token=${ACCESSTOKEN}`;

const app = express();
app.use(bodyParser.json());
app.use(cors());

async function statusLED() {
	try {
		let statusResponse = await axios.get(GETURL);
		return statusResponse.data.result;
	} catch (error) {
		console.error(error);
	}
}

async function switchLED() {
	try {
		let switchResponse = await axios.post(POSTURL);
		return switchResponse.data.return_value;
	} catch (error) {
		console.error(error);
	}
}

app.get("/", (req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello World");
});

app.get("/status", async (req, res) => {
	let ledStatus = await statusLED();
	res.send({ result: ledStatus });
});

app.post("/switch", async (req, res) => {
	let ledStatus = await switchLED();
	res.send({ result: ledStatus });
});

app.listen(port, () => {
	console.log(`Control Nodejs server running at http://${hostname}:${port}/`);
});
