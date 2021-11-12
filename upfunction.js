// function func (){
//   return 10
// }


// function plus(a, b = func()){
//   console.log(a + b)
// }
// plus(1)

// function plus (a, b, c){
//   for(let i = 0; i < arguments.length; i++){
//     console.log(arguments[i])
//   }
// }
// plus(1,2,3)
// function func2(a, b, ...rest){
//   console.log(rest[0])
//   console.log([a, b])
// }
// func2(1,2,3,4,5,6,7)

// function func2(a, b, ...rest){
  
//   for(let i = 0; i < rest.length; i++){
//     console.log(rest[i])
//   }
// }

// func2(1,2,3,4,5,6,7)

// let a = [1,2,3];
// let b = '김밥';
// let c = [...b, ...a]
// console.log(c)

// let a = [1, 2, 3];
// let b = ['you', 'are'];
// let c = function(a,b){
//   console.log([[...a], ...[...b]][1])
// }
// c(a,b)

// function func(a = 5, b = a*2){
//   console.log(a + b)
//   return 10
// }
// func(3)

// function func(a = 5, b= a * 2){
//   console.log( a + b )
// }
// func(undefined, undefined)

// function array(...rest){
//   // for(let i = 0; i < rest.length; i++){
//   //   console.log(rest[i])
//   // }
//   return rest
// }
// var newArray = array(1,2,3,4,5)
// console.log( newArray )

// let a = [2,3,4,5,6,1,3,2,5,5,4,6,7]

// console.log(Math.max(...a))

// console.log(['b', 'c', 'a'].sort())

// function doSort(rest){
//   console.log([...rest].sort());
// }
// doSort('bear')

글자세기('aacbbb')

function 글자세기(글자){
    let result = {};

    [...글자].forEach(function(a){
      if(result[a] > 0){
        result[a] = result[a]+ 1;
      }else{
        result[a] = 1
      }
    })
  console.log(result)
}