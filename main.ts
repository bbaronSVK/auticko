input.onSound(DetectedSound.Loud, function () {
    ledky = 1
    while (!(input.logoIsPressed())) {
        RingbitCar.freestyle(randint(-100, 100), randint(-10, 10))
        basic.pause(500)
    }
    ledky = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    ledky = 0
})
let ledky = 0
input.setSoundThreshold(SoundThreshold.Loud, 160)
ledky = 0
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
strip.clear()
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (ledky == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.ringTone(349)
        basic.pause(500)
        music.ringTone(494)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
    } else {
        music.stopAllSounds()
        strip.clear()
        RingbitCar.brake()
    }
})
