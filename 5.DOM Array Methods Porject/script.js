const addUserBtn = document.querySelector('#add-user');
const main = document.querySelector('#main');
const doubleBtn = document.querySelector('#double');

addUserBtn.addEventListener('click',()=>{
    fetch('https://randomuser.me/api/',{
        method:"get"
    })
    .then((response)=>response.json())
    .then((data)=>{
        main.innerHTML += `<div class="info">
        <h3><strong>${data.results[0].name.first +" "+ data.results[0].name.last}</strong><span class="wealth">${(Math.floor(Math.random() * 1000000)).toFixed(2)}</span></h3>
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

// sort by Richest
document.querySelector('#sort').addEventListener('click',()=>{
    const arr = [];
    document.querySelectorAll('.wealth').forEach(function(element){
        arr.push(element)
    });
    // value가 높은 순서대로 정렬
    arr.sort((a,b)=>{
        return parseFloat(b.innerHTML) - parseFloat(a.innerHTML);
    })
    // div info 다 지우기
    const info = document.querySelectorAll('.info');
    info.forEach((element)=>{
        element.remove();
    })
    // 정렬 상태로 다시 그리기
    arr.forEach((element)=>{
        const tag = document.createElement("div");
        tag.className = 'info'
        tag.appendChild(element);
        console.log(tag);
        document.querySelector('main').appendChild(tag);
    })
})

// calculate entire wealth
document.querySelector('#calculate-wealth').addEventListener('click',()=>{
    let total = 0;
    document.querySelectorAll('.wealth').forEach(function(element){
        total += (parseFloat(element.innerHTML));
    });
    document.querySelector('#main').innerHTML += `<h3>Total Wealth: <span><strong>$${total.toFixed(2)}</strong></span></h3>`
})

