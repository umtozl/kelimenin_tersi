input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= kelime.length; index++) {
        tersi = "" + tersi + kelime.charAt(kelime.length - index - index)
    }
    basic.showString(tersi)
})
let tersi = ""
let kelime = ""
kelime = "umut"
basic.forever(function () {
	
})
