radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.stopcar()
    }
    if (receivedNumber == 2) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
        control.waitMicros(6100)
        cuteBot.closeheadlights()
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        cuteBot.motors(30, 31)
    }
    if (receivedString == "B") {
        cuteBot.motors(30, 0)
    }
    if (receivedString == "C") {
        cuteBot.motors(-30, -30)
    }
    if (receivedString == "D") {
        cuteBot.motors(0, 30)
    }
})
radio.setGroup(134)
basic.forever(function () {
	
})
