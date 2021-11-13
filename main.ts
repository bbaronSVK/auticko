input.onSound(DetectedSound.Loud, function () {
    vystraseny = 1
    while (!(input.logoIsPressed())) {
        RingbitCar.freestyle(randint(-255, 255), randint(-255, 255))
        basic.pause(200)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    vystraseny = 0
    basic.clearScreen()
})
let vystraseny = 0
input.setSoundThreshold(SoundThreshold.Loud, 180)
vystraseny = 0
let pasik = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
pasik.clear()
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.QuarterNote)
pasik.showRainbow(1, 360)
basic.pause(1000)
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (vystraseny == 1) {
        pasik.showColor(neopixel.colors(NeoPixelColors.Red))
        music.ringTone(349)
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        music.ringTone(494)
        pasik.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showIcon(IconNames.Surprised)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.Yes)
        music.stopAllSounds()
        pasik.showColor(neopixel.colors(NeoPixelColors.White))
        RingbitCar.brake()
    }
})
