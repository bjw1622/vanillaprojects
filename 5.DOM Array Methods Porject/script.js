const addUserBtn = document.querySelector('#add-user');
const main = document.querySelector('#main');
const doubleBtn = document.querySelector('#double');

addUserBtn.addEventListener('click',()=>{
    fetch('https://randomuser.me/api/',{
        method:"get"
    })
    .then((response)=>response.json())
    .then((data)=>{
        main.innerHTML += `<div>
        <h3><strong>${data.results[0].name.first +" "+ data.results[0].name.last}</strong> <span class="wealth">${(Math.floor(Math.random() * 1000000)).toFixed(2)}</span></h3>
        </div>`});
});

doubleBtn.addEventListener('click',()=>{
    for(let i =0; i < document.querySelectorAll(".wealth").length; i++){
        document.querySelectorAll(".wealth")[i].innerHTML=((document.querySelectorAll(".wealth")[i].innerHTML)*2).toFixed(2);
    }
});

// show only millonaries
document.querySelector('#show-millionaires').addEventListener('click',()=>{
    document.querySelectorAll('.wealth').forEach(function(element){
        if(element.innerHTML < 1000000){
            element.parentElement.remove();
        }
    });
})