// let 사람 = {name : "kim"}
// let 학생1 = {
//   name: 'Kim', 
//   age: 15,
//   sayHi: function(){
//     console.log(`안녕하세요 ${this.name}입니다`)
//   }
// }

// function Students(name, age){
//   this.name = name;   // this >> 새로생성되는 오브젝트 instance 라고함!
//   this.age = age;     //object생성기계 >> [constructor, 생성자]
//   this.sayHi = function(){
//     console.log(`안녕하세요 "${this.name}" 입니다`)
//   }
// }

// Students.prototype.gender = '남';

// let 학생1 = new Students('명수', 15);
// let 학생2 = new Students();


// 학생1.sayHi();

// 이런것들을 전문용어로 상속이라고 한다 
//상속을 구현할 수 있는 문법 : prototype(유전자)

//----코딩애플 강의 한마디!
// prototype으로 상속시키는것과 constructor로 상속시키는거랑 차이가 무엇?
// 자식들이 값을 직접 소유하게 만들고 싶으면 constructor로 상속시키면 되고 
// 부모만 가지고 있고 그걸 참조해서 쓰게 만들고 싶으면 prototype으로 상속시키면 된다
// 보통은 그래서 상속할 수 있는 함수 같은 것들은 prototype으로 많이 만들어 놓는다

/*--> 연습문제 <--*/

// let 학생1 = {name : 'Kim', age : 20}
// let 학생2 = {name : 'Park', age : 21}
// let 학생3 = {name : 'Lee', age : 22}

// function Students (name, age){
//   this.name = name
//   this.age = age
//   this.sayHi = function(){
//     console.log(`안녕? 나는 ${this.name}이야`)
//   }
// }

// let 학생1 = new Students('Kim', 20)
// let 학생2 = new Students('Park', 21)
// let 학생3 = new Students('Lee', 22)

// function Student(name, age){
//   this.name = name;
//   this.age = age;
// }
// Student.prototype.sayHi = function(){
//   console.log(`안녕 나는 ${this.name} 이야`)
// }
// let 학생1 = new Student('kim', 20);

// 학생1.sayHi();



// Array.prototype.remove3 = function(arr){
// for(let i = 0; i < this.length; i++){
//   if(this[i] === arr){
//     this.splice(i, 1);
//     }
//   }
// }; 
// let arr= [5,6,1,2,3,4];
// arr.remove3(6);

// console.log(arr)

//상속 기능을 구현하는 다른방법 (ES5/ ES6)

// Object.create(프로토타입object);  // 상속기능을 구현 하는 ES5방법 (엄밀히 constructor는 아님)

// let 부모 = {name : 'Kim', age : 50};

// let 자식 = Object.create(부모)
// 자식.age = 20;

// let 손자 = Object.create(자식)

// Class 문법 // 상속기능 구현하는 ES6방법

// class 부모 {
//   constructor(name, age){
//     this.name = name
//     this.age = age
//   }
//   sayHi(){
//     console.log('hi')
//   }
//   sayHello(){
//     console.log('hello')
//   }
// }

// let 자식 = new 부모 ('Lucy', 30)

/*--> extends / super <-- */

// class 할아버지 {
//   constructor(name){
//     this.성 = 'Kim'
//     this.이름 = name;
//   }
//   sayHi(){
//     console.log('안녕 저는 할아버지에요')
//   }
// }
// var 할아버지1 = new 할아버지('학연');

// class 아버지 extends 할아버지{
//   constructor(name){
//     super(name);
//     this.나이 = 50;
//   }
//   sayHi(){
//     console.log('안녕 저는 아버지에요')
//     super.sayHi();
//   }
// }
// let 아버지1 = new 아버지('경수')

/*--> getter / setter <-- */
//set은 데이터 변경하는 함수에
//get은 데이터 꺼내쓰는 함수에 
//복잡한 소괄호 보기싫으면 set / get키워드
//get 함수들(getter) 꼭 return이 있어야 한다 파라미터 입력하면 안됨!
//set 함수들(setter) 파라미터 1개가 있어야한다.

// let 사람 = {
//   name : 'Park',
//   age : 30,
//   get nextAge(){
//     return this.age + 1
//   },
//   set setAge(age){
//     this.age = parseInt(age)
//   }
// }
// 사람.setAge = '20'
// 사람.nextAge;

// console.log(사람.nextAge())

/*--> getter / setter  Class에서도 가능!<-- */

// class 사람 {
//   constructor(){
//     this.name = 'Park';
//     this.age = 20;
//   }
//   get nextAge(){
//     return this.age + 1
//   }
//   set setAge(age){
//     this.age = parseInt(age);
//   }
// }

// let 사람1 = new 사람();

/*--> 연습문제 <-- */

// let 강아지1 = {type : '말티즈', coler: 'white'}
// let 강아지2 = {type : '진돗개', coler: 'brown'}

// class 강아지 {
//   constructor(type, coler){
//     this.type = type;
//     this.coler = coler;
//   }
//   한살먹기(){
//     if( this instanceof 고양이){
//       this.age++
//     }
//   }
// }
// let 강아지1 = new 강아지('말티즈', 'white')
// let 강아지2 = new 강아지('진돗개', 'brown')

// class 고양이 extends 강아지{
//   constructor(type,coler,age){
//     super(type,coler);
//     this.age = age;
//   }
// }
// let 고양이1 = new 고양이('코숏', 'white', 5)
// let 고양이2 = new 고양이('러시안블루', 'brown', 2)

// class Unit {
//   constructor(공격력 =5, 체력 = 100){ 
//     this.공격력 = 공격력;
//     this.체력 = 체력;
//   }
//   get battlePoint(){
//     return this.공격력 + this.체력
//   }
//   set heal(a){
//     this.체력 = this.체력 + a
//   }
// }
// let 유닛1 = new Unit();

let data = {
  odd : [],
  even : [],
  setter함수 : function(...숫자들){
    숫자들.forEach((a)=>{
      if(a % 2 === 1){
        this.odd.push(a)
      }else{
        this.even.push(a)
      }
    });
  }
};
data.setter함수(1,2,3,4,5,6,)
console.log(data)