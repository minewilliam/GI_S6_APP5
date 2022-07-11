/******************************************************/
//       THIS IS A GENERATED FILE - DO NOT EDIT       //
/******************************************************/

#include "Particle.h"
#line 1 "/home/assim/Documents/S6-APP5/GI_S6_APP5/ArgonDevice/src/ArgonDevice.ino"
#include "BeaconScanner.h"

void setup();
bool switchLED(String extra);
void onCallback(Beacon& beacon, callback_type type);
void loop();
#line 3 "/home/assim/Documents/S6-APP5/GI_S6_APP5/ArgonDevice/src/ArgonDevice.ino"
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





//-------------------------------------------------------

/*
 * Project Application
 * Description: Argon code app 5
 * Author: Antoine Dumas-Fortin & Étienne Larivière
 * Creation date: 2022-07-04
 */
// #include <BeaconScanner.h>

// SYSTEM_THREAD(ENABLED);
// const pin_t MY_LED = D7;
// String badgeData = "";
// bool ledIsLit = false;

// //Called when IBeacon Enter or Leave
// void onCallback(Beacon& beacon, callback_type type) {
//   String donne = beacon.getAddress().toString();
//   String donnetype = "";
//   if (type == NEW){
//     donnetype = "Entered";
//   }
//   else{
//     donnetype = "Left";
//   }
//   //Change cloud variable
//   badgeData = donne + " - " + donnetype;

//   Serial.print(beacon.getAddress().toString().c_str());
//   Serial.print(" - ");
//   Serial.println((type == NEW) ? "Entered" : "Left");
// }


// //Cloud function, change led state
// int ledToggle(String data){
//   Serial.println(data);
//   if (data == "ON"){
//     digitalWrite(MY_LED, HIGH);
//     return 1;
//   }

//   if (data == "OFF"){
//     digitalWrite(MY_LED, LOW);
//     return 0;
//   }
  
//   return -1;
// }

// void setup() {
//   //Setup cloud variable and cloud function
//   Particle.variable("badgeData", badgeData);
//   Particle.function("ledToggle", ledToggle);

//   BLE.on();
//   Scanner.setCallback(onCallback);
//   Scanner.startContinuous();
//   pinMode(MY_LED, OUTPUT);
//   waitFor(Serial.isConnected, 30000);
// }

// void loop() {
//   Scanner.loop();
// }
