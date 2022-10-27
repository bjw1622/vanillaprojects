// 콜백 함수
function action(mood,good,bad){
    if(mood === "good"){
        good();
    }
    else if(mood === "bad"){
        bad();
    }
}
function good(){
    console.log('Action :: good')
}
function bad(){
    console.log('Action :: bad')
}
action("good",good,bad);
//객체
let person1 = new Object(); // 생성자
let person = {
    key : "value", // 프로퍼티 
    key1 : function(){
        // console.log("프로퍼티 확인");
        return 1;
    },
} // 객체 리터럴 방식
console.log(person.key1());
console.log(person["key"]);
function getPropertyValue(key){
    return person[key];
}
// 객체를 상수로 선언해도 프로퍼티 수정 삭제 추가는 가능
console.log(getPropertyValue("key")); 

// 객체 프로퍼티를 지우는 두가지 방법

// 1. delete => 메모리 상에서 삭제 X
delete person.key;
// 2. null => 메모리 상에서 삭제 O
person.key1 = null;

console.log(person);
console.log(person.key1)

const test = {
    age : 11,
    say : function(){
        console.log(`${this.age} age`)
    }
}
test.say();
// in 연사자를 통해 객체 안에 property 존재 하는지 확인
console.log(`name : ${"name" in person}`);
console.log(`test is exist ${"age" in person}`);