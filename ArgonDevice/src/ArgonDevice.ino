#include "BeaconScanner.h"

bool status = false;
const pin_t MY_LED = D7;
SYSTEM_THREAD(ENABLED);

void setup()
{
  BLE.on();
  Scanner.startContinuous();
  Scanner.setCallback(onCallback);
  pinMode(D7, OUTPUT);
  Particle.variable("status", status);
  Particle.function("LED", switchLED);
}

bool switchLED(String extra) {
  status = !status;
  return status;
}

void onCallback(Beacon& beacon, callback_type type) {
  Log.trace("Address: %s. Type: %s", beacon.getAddress().toString().c_str(), 
    (type == NEW) ? "Entered": "Left");
  Serial.print(beacon.getAddress().toString().c_str());
}

void loop()
{
  Scanner.loop();
  digitalWrite(MY_LED, status);
  Serial.print("ca marche la");
  delay(2500);
}