const mqtt = require("mqtt");
const axios = require("axios");
const DEVID = "https://api.particle.io/v1/devices/E00FCE68986801735C908D66";
const ACCESSTOKEN = "9bf9cd2bbb783ae5a966e1eea48c4f568ce4da29";
const GETURL = `${DEVID}/BLE?access_token=${ACCESSTOKEN}`;

var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", function () {
  buffer = "";
  setInterval(async function () {
    try {
      let bleResponse = await axios.get(GETURL);
      bleArr = bleResponse.data.result.split(" ");
      if (bleResponse.data.result == buffer) {
      } else {
        console.log(bleArr);
        client.publish(
          "123123123",
          "Address: " + bleArr[0] + " Type: " + bleArr[1]
        );
        buffer = bleResponse.data.result;
      }
    } catch (error) {
      console.error(error);
    }
  }, 500);
});
