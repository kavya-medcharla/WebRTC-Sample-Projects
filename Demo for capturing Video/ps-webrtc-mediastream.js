navigator.getWebcam = (navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia);

navigator.getWebcam(

//constraints
{video:true, audio:false},

//successCallback
gotWebcam,

//errorCAllback
function(err)
{
    console.log("Oops! Something is not right. "+err);
});

function gotWebcam(stream)
{
    localVideo.src = window.URL.createObjectURL(stream);
    localVideo.play();
    
    var video_track = stream.getVideoTracks()[0];
    var output = document.getElementById('output');
    output.innerHTML = "stram id = "+stream.id + " <BR>";
    output.innerHTML += "track readyState = "+ video_track.readyState + " <BR>";
    output.innerHTML += "track id = "+ video_track.id + " <BR>";
    output.innerHTML += "kind = "+ video_track.kind + " <BR>";
};