/******************************************************/
//       THIS IS A GENERATED FILE - DO NOT EDIT       //
/******************************************************/

#include "Particle.h"
#line 1 "d:/UDES/S6/APP5/GI_S6_APP5/ArgonDevice/src/ArgonDevice.ino"
void setup();
bool switchLED(String extra);
void loop();
#line 1 "d:/UDES/S6/APP5/GI_S6_APP5/ArgonDevice/src/ArgonDevice.ino"
bool status = false;
const pin_t MY_LED = D7;
//GET https://api.particle.io/v1/devices/E00FCE68986801735C908D66/temp?access_token=9bf9cd2bbb783ae5a966e1eea48c4f568ce4da29

void setup()
{
  pinMode(D7, OUTPUT);
  Particle.variable("status", status);
  Particle.function("LED", switchLED);
}

bool switchLED(String extra) {
  status = !status;
  return status;
}

void loop()
{
  digitalWrite(MY_LED, status);
  if(status) Serial.print("we gucc");
  delay(2500);
}