// var array = ['hello', 'world'];
// console.log(...array)
// console.log('hello', 'world');

// var word = 'hello'
// console.log(...word) // hello 라는 문자가 해체 됨 h e l l o 이런식으로 
// console.log(word[0]) // 문자도 array 처럼 인덱싱이 가능하나 엄밀히 말하면 array 는 아님

// let a = [1,2,3];
// let b = [4, 5];

// let c = [...a , ...b] // spreadOperator는 deep copy 할때 유용함

// console.log(c)

// let a = [1,2,3];
// let b = [...a];
// a[3] = 4;

// console.log(a)
// console.log(b)

// let o1 ={ a: 1, b: 2};
// // let o2 = {a: 2, ...o1}
// let o2 = {...o1, a: 2}
// console.log(o2)

// function plus(a, b, c){
//   console.log(a + b + c)
// }
// plus(1,2,3)
// let a = [10, 20, 30]
// plus(...a)

//apply함수: spread이전에는 apply함수로 사용했었다  >> plus.apply(undefined, array)

// let person = {
//   인사 : function(){
//     console.log(this.name + 'hello')
//   },
// }

// let person2 = {
//   name : "손흥민",
// }

// person.인사.apply(person2, [1,2])
// person.인사.call(person2, 1, 2) // apply call 비슷함 근데 apply는 파라미터를 array형태로 집어넣기 가능 