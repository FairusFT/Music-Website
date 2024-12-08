const musik = document.getElementById('suara');
const tombol = document.getElementById('BtnPly');
const bar = document.getElementById('progressBar');
const forward = document.getElementById('forward');
const backward = document.getElementById('backward');
const music1 = document.getElementById('music1');
const music2 = document.getElementById('music2');
const btn = document.getElementById('btn');

tombol.addEventListener("click", function() {
    if(musik.paused) {
        musik.play();
    } else {
        musik.pause();
    }
})

forward.addEventListener("click", function() {
    console.log("Current Source: ", musik.currentSrc);
    if(musik.src === music1.src) {
        musik.src = music2.src;
    } else {
        musik.src = music1.src;
    }
    musik.play();
});

backward.addEventListener("click", function() {
    if(musik.src === music2.src) {
        musik.src = music1.src;
    } else {
        musik.src = music2.src;
    }
    musik.play();
});

musik.addEventListener("timeupdate", function() {
    const progress = (musik.currentTime / musik.duration) *100
    progressBar.value = progress
});

btn.addEventListener("click", function() {
    let message = "You have been hacked by 'burgwwyn22'";
    let message2 = "Check ur digital wallet!";
    alert(message);
    alert(message2);
})