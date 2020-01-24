  var vid = document.getElementById("myVideo");
// video play
$(".fa-play").click(function(){
  vid.play();
  $(".play-push .fa-play").hide();
  $(".play-push .fa-pause").show();
});
// video push
$(".fa-pause").click(function(){
  vid.pause();
  $(".play-push .fa-play").show();
   $(".play-push .fa-pause").hide();
});
// duration first add zero
function addZero(zero){
  if(zero < 10){
    return zero="0"+zero;
  }else{
    return zero;
  }
}
// show song Duration bar
var duration_line=$(".duration-line");
var currentDuration = $(".running-time");
function songDuration(a,b,c){
  a.addEventListener("timeupdate",function(){
  var Duration=a.currentTime/a.duration;
  var element=Duration*100+"%";
  b.width(element);
  var minute=addZero(parseInt(a.currentTime/60));
  var secound=addZero(parseInt(a.currentTime%60));
  c.html(minute+":"+secound);
});
}
songDuration(vid,duration_line,currentDuration);
setInterval(function(){
   var Totalduration = $(".total-duration");
  // song duration
  var minu,sec = 0;
   minu=parseInt(vid.duration/60);
   sec=parseInt(vid.duration%60);
  Totalduration.html(minu+":"+sec);
  console.log(minu+""+sec)
},100);
// show bar when click song bar
var vid_bar=$(".duration");
function songBarLenth(a,b,f){
  a.on("click",function(e){
    var ofset=a.offset();
  var mouseX=e.pageX-ofset.left;//355 offsetleft
   var newtime=mouseX*b.duration/a.innerWidth();//355
   b.currentTime=newtime;
   f.width(newtime);
    console.log(newtime);
  });
}
songBarLenth(vid_bar,vid,duration_line);
// sound default value
var sound=$(".sound");
var soundBar=$(".sound-line");
vid.volume=50/100;
soundBar.width(50);
// sound bar
sound.on("click",function(e){
   var ofset=sound.offset();
   vol_mouseX=e.pageX-ofset.left;
  staticvalume=vol_mouseX/sound.innerWidth();
   vid.volume=staticvalume;
  soundBar.width(vol_mouseX);
});
// sound off/on
$(".sound-icon .fa-volume-up").click(function(){
  vid.volume=0;
  $(".sound-icon .fa-volume-up").hide();
   $(".sound-icon .fa-volume-off").show();
})
// sound off/on
$(".sound-icon .fa-volume-off").click(function(){
  vid.volume=0.5;
  $(".sound-icon .fa-volume-up").show();
   $(".sound-icon .fa-volume-off").hide();
})
// video close button
$(".video-close-btn").click(function(){
  $(".modal").hide();
  vid.pause();
   $(".play-push .fa-play").show();
  $(".play-push .fa-pause").hide();
})
// full screen video
function openFullscreen() {
  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.mozRequestFullScreen) { /* Firefox */
    vid.mozRequestFullScreen();
  } else if (vid.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) { /* IE/Edge */
    vid.msRequestFullscreen();
  }
}
// modal
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// window click and modal none
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    vid.pause();
  }
}
