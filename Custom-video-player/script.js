const $play = document.querySelectorAll('.fa-play,#video');
const $stop = document.querySelector('.fa-stop');
const $bar = document.querySelector('.bar');
const $screen = document.querySelector('.screen')
const $time = document.querySelector('.time');


const run = function(){
  for(let i = 0; i<$play.length; i++) {
    $play[i].addEventListener('click',()=>{
      for(let i = 0; i<$play.length; i++) {
        $screen.play();
        //클릭 시 타임
        let checkTime = new Date().getSeconds();
      }
    })
  }
}
$stop.addEventListener('click',()=>{
  $screen.pause();
})
run