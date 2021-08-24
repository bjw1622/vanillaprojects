const $userName = document.querySelector('#userName');
const $email = document.querySelector('#email'); 
const $passWord = document.querySelector('#passWord'); 
const $confirmPW = document.querySelector('#confirmPW'); 
const $submitBtn = document.querySelector('#submitBtn'); 

//UserName에 아이디 저장
let userName;
$userName.addEventListener('input',(event)=>{
  userName = event.target.value;
  if(userName === "a"){
    console.log('a');
  }
  console.log(userName);
})

//email에 email 저장
let email;
$email.addEventListener('input',(event)=>{
  email = event.target.value;
  console.log(email);
})

//passWord에 passWord 저장
let passWord;
$passWord.addEventListener('input',(event)=>{
  passWord = event.target.value;
  console.log(passWord);
})

//confirmPW에 confirmPW 저장
let confirmPW;
$confirmPW.addEventListener('input',(event)=>{
  confirmPW = event.target.value;
  console.log(confirmPW);
})

$submitBtn.addEventListener('click',()=>{
  if($userName.value === "" || $email.value === ""|| $passWord.value === ""|| $confirmPW.value ==="")
  {
    alert('모두 작성해주세요.')
  } else if(confirmPW === passWord){
    alert('등록 되었습니다.');
  } else{
    alert('비밀번호가 일치하지 않습니다.');
  }
  $userName.value = "";
  $email.value = "";
  $passWord.value = "";
  $confirmPW.value = "";
})