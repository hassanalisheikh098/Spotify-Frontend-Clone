console.log("welcome to spotify");

let songindex = 0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName('songitem'));
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let songtitlename = document.getElementById("songtitlename");

let songs = [
    {songName: "Warriyo - Mortals", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF-Invincible ", filePath: "3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven", filePath: "4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes", filePath: "5.mp3", coverPath: "covers/5.jpg"}
];

masterplay.addEventListener('click' , ()=>{
if(audioelement.paused || audioelement.currentTime <= 0)
{
    audioelement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    gif.style.opacity = 1;

}
else{
    audioelement.pause();
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fa-play");
    gif.style.opacity = 0;
}
})

audioelement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioelement.currentTime / audioelement.duration) *100);
    progressbar.value = progress;

})

progressbar.addEventListener('change' , ()=>{
    audioelement.currentTime = ((progressbar.value * audioelement.duration)/100);
})

songitems.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })
}



Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        if(audioelement.paused || audioelement.currentTime <= 0 )
            {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = `${songindex}.mp3`;
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
        songtitlename.innerText = songs[songindex-1].songName;
            }
            else{
                audioelement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
            }
        
    })

})

forward.addEventListener('click' , ()=>{
    if(songindex < 5)
    {
    songindex++;
    }
    else
    {
        songindex = 0;
    }
    audioelement.src = `${songindex + 1}.mp3`;
    audioelement.play();
    songtitlename.innerText = songs[songindex].songName;
    })

backward.addEventListener('click' , ()=>{
        if(songindex > 0)
        {
        songindex--;
        }
        else
        {
            songindex = 5;
        }
        audioelement.src = `${songindex}.mp3`;
        audioelement.play();
        songtitlename.innerText = songs[songindex].songName;
        })

