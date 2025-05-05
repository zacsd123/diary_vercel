function displayPerson(person) {
    console.log(`이름: ${person.name}`);
    console.log(`나이: ${person.age}`);
  }
  
  let personInfo = {
    name: "YuJin Jung",
    age: 22
  };
  
// 예제문제 1
let {name, age} = personInfo;

