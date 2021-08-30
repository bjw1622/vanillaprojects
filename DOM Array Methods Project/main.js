const $addUser = document.querySelector('#add-user');
const $doubleMoney = document.querySelector('#double');
const $millionaries = document.querySelector('#show-millionaires');
const $sort = document.querySelector('#sort');
const $calculate = document.querySelector("#calculate-wealth");
const $main = document.querySelector('#main');

class Enterprise  {
  constructor(name,money){
    this.name = name;
    this.money = money;
  }
}

const enterprise = [new Enterprise('Baek',"1,000,000"),new Enterprise('Choi',"10,000,000"),
                    new Enterprise('Park',"100,000,000"), new Enterprise('Kim',"3,232,000"),
                    new Enterprise('Lee',"321,000,000"), new Enterprise('Baek',"1,000,000")]
$addUser.addEventListener('click',()=>{
  const content = document.createElement('h3');
  content.setAttribute('id','content')
  while(true){
    //random 숫자가 리스트 인덱스 범위 안에 있을 때
    const ran = parseInt(Math.random()*10);
    console.log(enterprise.length);
    if(ran <= enterprise.length){
      content.innerHTML = `<strong>${enterprise[ran].name}</strong>${enterprise[ran].money}`;  
      enterprise.splice(ran,ran+1);
      break
    }else if(enterprise.length === 0){
      alert('추가 금지');
      break
    }
    
  }
  $main.appendChild(content);
})