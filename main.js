var speech_recognition= window.webkitSpeechRecognition; //webkitSpeechRecognition API contains built in function that recognises voice data.
var recognition= new speech_recognition();

function start_mic(){
document.getElementById("textbox").innerHTML="";
recognition.start();
};

recognition.onresult= function run(event){
  //  console.log(event);
    var content= event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
      speak_text(); 
      Webcam.attach(cam);
    }
}

function speak_text(){
  var synth=window.speechSynthesis; //speechSynthesis API contains built in functions that convert text to speech.
  var speech_data="taking your selfie in 5 seconds";
 var utterThis= new SpeechSynthesisUtterance(speech_data);
 synth.speak(utterThis);
 setTimeout(function(){
   take_selfie();
},5000)
}

Webcam.set({
  width:360,
  height:250,
  image_format:'png',
png_quality:100
});

cam=document.getElementById("camera");

function take_selfie(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie_img">';
  }); //data_uri contains the path of preview image
}

function save(){
 var link= document.getElementById("download.link");
 var selfie_img= document.getElementById("selfie_img").src;
 link.href= selfie_img;
 link.click();
}