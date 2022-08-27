var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie")
    {
        speak();
    }
}

function speak()
{
    var synth=window.speechSynthesis;
    speakdata="Ok,taking your selfie in five seconds"
    var utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()  {
        snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:400,
    height:350,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");

function snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">'
    });
}

function save()
{
    link=document.getElementById("link");
img=document.getElementById("selfie_img").src;
link.href=img;
link.click();
}