

function check(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/c1maTOexg/model.json", modelReady);

}

function modelReady(){

    classifier.classify(gotResult)

}

function gotResult(error, results){

    if(error){

        console.error(error);

    }
    else{

        document.getElementById("result_sound").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("result_accuracy").innerHTML ="Accuracy - "+ (results[0].confidence*100).toFixed(2)+" %";

        img = document.getElementById("animal_1");
        img1 = document.getElementById("animal_2");
        img2 = document.getElementById("animal_3");
        img3 = document.getElementById("animal_4");

        if(results[0].label == "Meowing"){

            img.src = "cat.gif";
            img1.src = "lion.png";
            img2.src = "dog.png";
            img3.src = "cow.png";

        }
        else if(results[0].label == "Roaring"){

            img.src = "cat.png";
            img1.src = "lion.gif";
            img2.src = "dog.png";
            img3.src = "cow.png";

        }
        else if(results[0].label == "Barking"){

            img.src = "cat.png";
            img1.src = "lion.png";
            img2.src = "dog.gif";
            img3.src = "cow.png";
            
        }
        else if(results[0].label == "Mooing"){

            img.src = "cat.png";
            img1.src = "lion.png";
            img2.src = "dog.png";
            img3.src = "cow.gif";

        }

    }

}