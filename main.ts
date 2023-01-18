let x = 0
basic.showString("TEMPERATURE NOW:")
basic.forever(function () {
    let fahrenheit = 0
    x = input.temperature() * 1.8
    x = x + 32
    basic.showNumber(fahrenheit)
})
