const musik = document.getElementById('suara');
const tombol = document.getElementById('BtnPly');
const bar = document.getElementById('progressBar')

tombol.addEventListener("click", function() {
    if(musik.paused) {
        musik.play();
    } else {
        musik.pause();
    }
})

musik.addEventListener("timeupdate", function() {
    const progress = (musik.currentTime / musik.duration) *100
    progressBar.value = progress
})