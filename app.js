var songs = ["freeman.mp3", "freeman.mp3", "freeman.mp3", "freeman.mp3"];
var poster = ["poster.jpg"];

var songTitle = document.getElementById("songTitle");
var songArtist = document.getElementById("songArtist");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;

window.onload = playSong;

function playSong(){
    song.src = songs[currentSong];
    //songTitle.textContent = songs[currentSong];
    song.play();
}

function playOrPauseSong(){
    if(song.paused){
        song.play();
        $(".fa-pause i").attr("src", ".fa-play");
        document.getElementById("pause").style.display = 'block';
    }
    else{
        song.pause();
        $(".fa-play i").attr("src", ".fa-pause");
        document.getElementById("pause").style.display = 'none';
    }
}

song.addEventListener('timeupdate', function(){
    var position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';
});

function next() {
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $(".fa-play i").attr("src", ".fa-pause")
}
function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = 2;
    }
    playSong();
    $(".fa-play i").attr("src", ".fa-pause")
}
