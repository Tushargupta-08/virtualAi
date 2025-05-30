

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 0.7
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
    let Hours = day.getHours()
    if (Hours >= 0 && Hours < 12) {
        speak("good morning sir")
    }
    else if (Hours >= 12 && Hours < 17) {
        speak("good after noon sir")
    }
    else {
        speak("good evening sir")
    }
}
window.addEventListener('load', () => {
    wishMe()

})

window.addEventListener("load", () => {
    let btn = document.getElementById("btn");

    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.onresult = (event) => {
        let content = document.querySelector("#content")
        let voice = document.querySelector("#voice")
        let currnetIndex = event.resultIndex
        let transcript = event.results[currnetIndex][0].transcript
        content.innerText = transcript
        takeCommand(transcript.toLowerCase())
    }

    btn.addEventListener("click", () => {
        recognition.start()
        btn.style.display = "none"
        voice.style.display = "block"
    })
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir , how can i help you")
    }
    else if (message.includes("tell me about yourself")) {
        speak("i am virtual assistant ,created by Ttusssshaaarrr gupta")
    }
    else if (message.includes("youtube")) {
        speak("opening...youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("whatsapp")) {
        speak("opening..whatsapp")
        window.open("https://web.whatsapp.com/")
    }
    else if (message.includes("instagram")) {
        speak("opening..instagram")
        window.open("https://www.instagram.com//")
    }
    else if (message.includes("google")) {
        speak("opening...google")
        window.open("https://www.google.com/")
    }
    else if (message.includes("calculator")) {
        speak("opening..calculator")
        window.open("calculator://")
    }
    else if (message.includes("vscode")) {
        speak("opening..vscode")
        window.open("visual studio code://")
    }
    else if (message.includes("facebook")) {
        speak("opening...facebook")
        window.open("https://www.facebook.com/")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)

    }

    else {
        let finalText = "this is what i found on internt regarding" + message.replace("nick", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("nick", "")}`, "_blank")
    }

}
