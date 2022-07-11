const mqtt = require("mqtt");

var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", function () {
  client.subscribe("123123123");

  console.log("Client subscribed ");
});

client.on("message", function (topic, message) {
  console.log(message.toString());
});
