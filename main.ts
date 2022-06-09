function RenderCurrent () {
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, Highscore)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range2 = strip.range(0, Score)
    range2.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(Level, neopixel.colors(NeoPixelColors.Purple))
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    ShowStart()
})
function ShowStart () {
    strip.showRainbow(1, 360)
    for (let index = 0; index <= 24; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
    for (let index = 0; index <= 24; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(50)
    }
    RenderCurrent()
}
input.onButtonPressed(Button.B, function () {
    ShowDeath()
})
function ShowDeath () {
    for (let index = 0; index <= 24; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(50)
    }
    strip.clear()
    Level = 0
    Score = 0
    RenderCurrent()
}
radio.onReceivedValue(function (name, value) {
    if (name == "Start") {
        ShowStart()
    }
    if (name == "Level") {
        Level = value
        RenderCurrent()
    }
    if (name == "Score") {
        Score = value
        RenderCurrent()
    }
    if (name == "Highscore") {
        Highscore = value
        RenderCurrent()
    }
    if (name == "Death") {
        ShowDeath()
    }
})
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let Level = 0
let Score = 0
let Highscore = 0
let strip: neopixel.Strip = null
radio.setGroup(42)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.clear()
Highscore = 10
Score = 5
Level = 3
