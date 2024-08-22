document.getElementById('btn').addEventListener('click', function() {
    var text = document.getElementById('text-area').value;

    if (text.trim() !== '') {
        let speech = new SpeechSynthesisUtterance(text);

        
        speech.lang = 'en-US'; 
        speech.pitch = 1; 
        speech.rate = 1; 

        window.speechSynthesis.speak(speech);
    } else {
        alert('Please enter some text in the textarea.');
    }
});
