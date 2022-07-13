#include "BeaconScanner.h"

SYSTEM_THREAD(ENABLED);
bool status = false;
String bleString = "none";
const pin_t MY_LED = D7;

void setup()
{
  BLE.on();
  Scanner.startContinuous();
  Scanner.setCallback(onCallback);
  pinMode(D7, OUTPUT);
  waitFor(Serial.isConnected, 30000);
  Particle.variable("status", status);
  Particle.variable("BLE", bleString);
  Particle.function("LED", switchLED);
}

bool switchLED(String extra) {
  status = !status;
  return status;
}

void onCallback(Beacon& beacon, callback_type type) {
  bleString = beacon.getAddress().toString();
  if (type == NEW){
    bleString += " Entered";
  } else {
    bleString += " Left";
  }
  Serial.printlnf("Address + type: %s.", bleString.c_str());
}

void loop()
{
  Scanner.loop();
  digitalWrite(MY_LED, status);
}