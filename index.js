const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const start = document.getElementById('start')

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

recognition.interimResults = false;
recognition.maxAlternatives = 1;


start.onclick = () => {
    const lang = prompt('What language do you want to speak? Enter your language code Ex[en-US , ru-RU]' )
    recognition.lang = lang
    recognition.start();
    console.log("Ready to receive a color command.");
};


recognition.onresult = (event) => {
    console.log(event.results[0][0].transcript);
    recognition.stop()
};

