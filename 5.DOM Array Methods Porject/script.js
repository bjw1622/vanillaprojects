const addUserBtn = document.querySelector('#add-user');

addUserBtn.addEventListener('click',()=>{
    fetch('https://randomuser.me/api/',{
        method:"get"
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data));
});


