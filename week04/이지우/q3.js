// 예제문제 1
const greeting = (name) => {
    return `안녕하세요, ${name}님!`;
}

console.log(greeting("김미미"));

// 예제문제 2
let fruits = ["Apple", "Banana", "Cherry"]
fruits.forEach(function(value,index,array){
    console.log(`{index}. {value}`);
})

