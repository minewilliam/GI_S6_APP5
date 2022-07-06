bool status = false;
const pin_t MY_LED = D7;

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