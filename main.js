function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classfier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/fAUu5q0Ka/model.json ',modelReady);
}

function modelReady ()
{
    classfier.classify(gotResults);
}

function gotResults(error,results)
{
    console.log('Got Result')
}