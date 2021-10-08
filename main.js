Webcam.set ({
    width:250,
     hieght:250,     
     image_format:'png',
     png_quality :99.9
});
camera=document.getElementById("camera");
Webcam.attach('#camera');


function takeaphoto(){
    Webcam.snap(function(data_uri){
        document.getElementById ("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
       });
}
console.log("ml5version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cl9HQJIs7/model.json',modelLoaded);
function modelLoaded(){
    console.log("model is loaded")
}

function identify_photo(){
    img=document.getElementById("capture_image");
    classifier.classify (img,gotResult);
}

function gotResult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        
            document.getElementById("object").innerHTML=results[0].label;
            document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
        
    }
}