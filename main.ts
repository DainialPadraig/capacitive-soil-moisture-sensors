let sensorlist: number[] = []
let sensor5 = 0
let sensor4 = 0
let sensor3 = 0
let sensor2 = 0
let sensor1 = 0
OLED.init(128, 64)
basic.forever(function () {
    sensor1 = pins.analogReadPin(AnalogPin.P1)
    basic.pause(500)
    sensor2 = pins.analogReadPin(AnalogPin.P2)
    basic.pause(500)
    sensor3 = pins.analogReadPin(AnalogPin.P3)
    basic.pause(500)
    sensor4 = pins.analogReadPin(AnalogPin.P4)
    basic.pause(500)
    sensor5 = pins.analogReadPin(AnalogPin.P10)
    basic.pause(500)
    sensorlist = [
    sensor1,
    sensor2,
    sensor3,
    sensor4,
    sensor5
    ]
    OLED.clear()
    OLED.writeString("Sensor 1: ")
    OLED.writeNumNewLine(sensor1)
    OLED.writeString("Sensor 2: ")
    OLED.writeNumNewLine(sensor2)
    OLED.writeString("Sensor 3: ")
    OLED.writeNumNewLine(sensor3)
    OLED.writeString("Sensor 4: ")
    OLED.writeNumNewLine(sensor4)
    OLED.writeString("Sensor 5: ")
    OLED.writeNumNewLine(sensor5)
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
    }
    basic.pause(2500)
})
