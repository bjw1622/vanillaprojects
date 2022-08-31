let selectedNumber = 0;



function clicked(event){
    const classElement = event.target.classList[1];
    const selectValue = document.querySelector('#movie').value
    //TODO
    // 1. if(occupied가 있을 떄) => classList[1] === "occupied"
    if(classElement === "occupied"){
        return;
    }
    // 2. elseif(selected가 있을 떄) => classList[1] === "selected"
    else if(classElement === "selected"){
        selectedNumber -= 1;
        document.querySelector('#count').innerHTML = selectedNumber;
        event.target.classList.remove('selected');
    }
    // 3. elseif(occupied,selected 다 없을 때) => classList[1]===undefined
    else if(classElement === undefined){
        selectedNumber += 1;
        document.querySelector('#count').innerHTML = selectedNumber;
        document.querySelector('#total').innerHTML = selectedNumber*selectValue;
        event.target.className += ' selected';
    }
}

function selectClicked(event){
    const selectValue = event.target.value;
    document.querySelector('#count').innerHTML = selectedNumber;
    document.querySelector('#total').innerHTML = selectedNumber*selectValue;
}