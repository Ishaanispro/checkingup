var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    Speak();
}

function Speak(){
    var synth = window.SpeechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.Speak(utterThis);
    Webcam.attach(camera);
}

var camera = document.getElementById("camera");
Webcam.set({
    width: 180,
    height: 180,
    image_format: 'jpeg',
    jpeg_quality: 90
});



