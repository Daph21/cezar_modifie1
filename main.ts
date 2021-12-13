let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
let SoundLevel = 37
strip.setBrightness(10)
strip.show()
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    if (input.soundLevel() > SoundLevel) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }
    if (input.soundLevel() > SoundLevel * 2) {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }
    if (input.soundLevel() > SoundLevel * 3) {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }
    if (input.soundLevel() > SoundLevel * 4) {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    }
    if (input.soundLevel() > SoundLevel * 5) {
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    }
    strip.show()
})
