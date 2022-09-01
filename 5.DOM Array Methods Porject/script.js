const addUserBtn = document.querySelector('#add-user');
const main = document.querySelector('#main');

addUserBtn.addEventListener('click',()=>{
    fetch('https://randomuser.me/api/',{
        method:"get"
    })
    .then((response)=>response.json())
    .then((data)=>{
        main.innerHTML += `<div>
        <h3><strong>${data.results[0].name.first +" "+ data.results[0].name.last}</strong> <span class="wealth">$${(Math.floor(Math.random() * 1000000)).toFixed(2)}</span></h3>
        </div>`});
});


