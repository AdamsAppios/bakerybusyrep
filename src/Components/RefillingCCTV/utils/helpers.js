const speakMessage = (message) => {
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;

        // Cancel any ongoing or pending speech
        synth.cancel();

        const utterance = new SpeechSynthesisUtterance(message);
        utterance.rate = 2.7; 
        synth.speak(utterance);
    }
};
