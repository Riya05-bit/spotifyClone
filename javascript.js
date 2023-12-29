console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif1 = document.getElementById('gif1');
let masterSongName = document.getElementById('masterSongName');
// let songItemsPic = document.getElementsByClassName('songItems');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Hass Hass", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Greedy", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Vampire", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Water", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Too Much", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Heavy Hitters", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Needle", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Paris", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Over Mind", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Don't Need To", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.add('fa-pause-circle');
        gif1.style.opacity = 1;
    }
    else{
        audioElement.pause();
        gif1.style.opacity = 0;
        // masterSongName.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // masterSongName.innerText = songs[songIndex].songName;

    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // masterSongName.style.opacity = 1;
        gif1.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');  
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // songItemsPic.classList.add('rotate');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
