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
let red_blue = 0
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
	
})
control.inBackground(function () {
    while (true) {
        if (vystraseny == 1) {
            if (red_blue == 0) {
                pasik.showColor(neopixel.colors(NeoPixelColors.Red))
                music.ringTone(349)
                basic.showIcon(IconNames.Sad)
            } else {
                pasik.showColor(neopixel.colors(NeoPixelColors.Blue))
                music.ringTone(494)
                basic.showIcon(IconNames.Surprised)
            }
            red_blue = red_blue ? 0 : 1
basic.pause(200)
        } else {
            music.stopAllSounds()
            pasik.showColor(neopixel.colors(NeoPixelColors.White))
            RingbitCar.brake()
            basic.showIcon(IconNames.EigthNote)
        }
    }
})
