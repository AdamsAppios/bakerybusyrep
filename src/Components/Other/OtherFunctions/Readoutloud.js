export const readOutLoud = (message) => {
  let speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    let isSafari =
      navigator.vendor &&
      navigator.vendor.indexOf("Apple") > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("CriOS") == -1 &&
      navigator.userAgent.indexOf("FxiOS") == -1;
    let rate = isSafari ? 1.3 : 2.9;
    let voices = window.speechSynthesis.getVoices();
    console.log(voices);
    speech.voice = isSafari ? voices[11] : voices[0];
    speech.text = message;
    speech.volume = 1;
    speech.rate = rate;
    speech.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

