let songsname=document.getElementById('p1');
let artirstname=document.getElementById('p2');
let myimage=document.getElementById('image');
let next=document.getElementById('next');
let play=document.getElementById('play');
let previous=document.getElementById('prev')
let lastBox=document.getElementById('last-box').children;
for(var i=0;i<lastBox.length; i++){
lastBox[i].addEventListener('click',mainfunction)
}
let song=new Audio()
song.src="wiz new.mp4";
let isplaying=false;
const musicplay=()=>{
    song.play()
    isplaying=true;
    play.classList.replace("fa-play-circle" , "fa-pause-circle" )
}
const musicstop=()=>{
    song.pause()
    isplaying=false;
    play.classList.replace("fa-pause-circle","fa-play-circle");
}
let myallsongs=[
    {
        title:"-Smoke-Screen",
        artist:"Wiz-Khalifa_ft_Bootsyano",
        song1:"wiz new.mp4",
        image:"bestcity.jpg",
    },
    {
        title:"-Still_D.R.E",
        artist:"Dr_Dre_ft_Snoop_Dog",
        song1:"snoop-dog.mp4",
        image:"cityexp.jpg",
    },
    {
        title:"left-foot-up...",
        artist:"Drake",
        song1:"drake.mp4",
        image:"ryan.jpg",
    },
    {
        title:"Halloween_cypher",
        artist:"Marshall",
        song1:"hallowen2.mp4",
        image:"paoilio.jpg",
    },
    {
        title:"Linkin_park",
        artist:"Mellin_Gi & Tommee",
        song1:"linkin.mp4",
        image:"citylight.jpg",
    },
    {
        title:"Ujayalo-xaina",
        artist:"Goli",
        song1:"Goli.mp4",
        image:"kevin.jpg",
    },
    {
        title:"\"Billy\" ",
        artist:"6IXI9INE",
        song1:"billi.mp4",
        image:"ali.jpg",
    },
    {
        title:"Gangsta's_Pradise ",
        artist:"Coolio",
        song1:"co-lio.mp4",
        image:"blackcity.jpg",
    },
    {
        title:"Pull_up",
        artist:"wiz_Khalifa-ft-lil-uzi",
        song1:"wiz2.mp4",
        image:"nick.jpg",
    },
    {
        title:"Designer",
        artist:"Designer-Panda",
        song1:"D-panda.mp4",
        image:"artur.jpg",
    },
]
const addallsongs=(myallsongs)=>{
songsname.textContent=myallsongs.title;
artirstname.textContent=myallsongs.artist;
song.src=myallsongs.song1;
myimage.src=myallsongs.image;
}
let songsindex=0;
function mainfunction(){
    let useid=this.id
   switch(useid){
       case "play":
           if(isplaying){
               musicstop()
           }
           else{
               musicplay()
           }
           break;
           case "next":
               songsindex=(songsindex+1)%myallsongs.length;
              
               addallsongs(myallsongs[songsindex])
               musicplay();
               break;
               case "prev":
                songsindex=(songsindex-1+myallsongs.length)%myallsongs.length;
                musicstop();
                addallsongs(myallsongs[songsindex])
                break;
 }
 }
 let progress=document.getElementById('insideprogress')
 let startingtime=document.querySelector('.starting-time');
 let finishingtime=document.querySelector('.finishing-time');
song.addEventListener('timeupdate',(e)=>{
const{currentTime,duration}=e.srcElement;
let progresstime=(currentTime/duration)*100
progress.style.width=`${progresstime}%`;
let min_Time=Math.floor(duration/60);
let sec_Time=Math.floor(duration%60);
if(sec_Time<10){
    sec_Time=`0${sec_Time}`
}
if(duration){
    finishingtime.textContent=`${min_Time}:${sec_Time}`
}
let current_tim=Math.floor(currentTime/60);
let current_sec=Math.floor(currentTime%60);
if(current_sec<10){
    current_sec=`0${current_sec}`
}
startingtime.textContent=`${current_tim}:${current_sec}`

})
song.addEventListener('ended',NextSong)
song.addEventListener('ended',musicplay)
function NextSong(){
    songsindex=(songsindex+1)%myallsongs.length;
    addallsongs(myallsongs[songsindex])
}

let outsideprogress=document.querySelector('.progress');
outsideprogress.addEventListener('click',(e)=>{
const {duration}=song;
let move_progressbar=(e.offsetX/e.srcElement.clientWidth)*duration
song.currentTime=move_progressbar;
})