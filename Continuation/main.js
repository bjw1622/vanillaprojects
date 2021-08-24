const $inputWord = document.querySelector('.inputWord');
const $show = document.querySelector('.show');

let inputWord;
$inputWord.addEventListener('input',(event)=>{
  inputWord = event.target.value;
})

$inputWord.addEventListener('keypress',(event)=>{
  //enter쳤을 때
  if(event.keyCode === 13){
    if($show.textContent ==="제시어"){
      $show.textContent = inputWord;
      $inputWord.value = "";
    }else{
      //제시어 마지막과 inputWord 처음이 같다면
      if($show.textContent[$show.textContent.length -1 ] === inputWord[0]){
        $show.textContent = inputWord;
        $inputWord.value = ""
      }else{
        alert('패배 하였습니다.');
        $inputWord.value = "";
        $show.textContent = "제시어";
      }
    }
  }
})