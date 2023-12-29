console.log("hii");


let SongIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('RangeBar');
let gif1 = document.getElementById('gif1');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('SongItem'));

let songs = [
 {songName:"Hass Hass", filePath:"1.mp3"},
 {songName:"Greedy", filePath:"2.mp3"},
 {songName:"Vampire", filePath:"songs/3.mp3"},
 {songName:"Water", filePath:"songs/4.mp3"},
 {songName:"Too Much", filePath:"songs/5.mp3"},
 {songName:"Heavy Hitters", filePath:"songs/6.mp3"},
 {songName:"Needle", filePath:"songs/7.mp3"},
 {songName:"Paris", filePath:"songs/8.mp3"},
 {songName:"Heart Over Mind", filePath:"songs/9.mp3"},
 {songName:"Don't Need To Sleep", filePath:"songs/10.mp3"}
]
songItems.forEach((element,i)=>{
    // element.getElementByTagName("img")[0].src=songs[i].filePath;
    element.getElementByClassName("songName")[0].innerText=songs[i].songName;
})


// Working on MasterPlay Button for On/Off
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif1.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif1.style.opacity=0;
    }
})
// Checking timeupdation of audioElement
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})
// Update Rangebar
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
    // console.log(audioElement.currentTime);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs ${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif1.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


// extra

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
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