//Template literals & Tagged literals 

// 해체 분석기라는 함수명으로 함수를 만들고 
// 함수실행할때 () 가 아닌 템플릿리터럴을 넣게되면(Tagged literals)
// 첫번째 파라미터에는 문자들이 들어가고 2번째 3번째 등등 이후에는 변수들이 들어가게 됨
// console.log 확인해보면 문자들(띄어쓰기 포함)이 배열형태로 나옴 변수를 중심으로 문자들이 나뉨


// var 변수 = '손흥민';
// var 문자 = `안녕하세요 ${변수} 입니다`

// function 해체분석기(문자들, 변수들){
// console.log(문자들[0] + 변수들 + 문자들[1])
// console.log(변수들)
// }

// 해체분석기`안녕하세요 ${변수} 입니다`


let pants = 100
let socks = 0;
`바지${pants} 양말${socks}`

function 해체분석기(문자들, 변수들1, 변수들2){
  
  if(변수들1 === 0){
    console.log(`바지 다팔렸어요 양말` + 변수들2 )
  }else if(변수들2 === 0){
    console.log(`양말 다팔렸어요 바지` + 변수들1)
  }
  else{
    console.log(문자들[0] + 변수들1 + 문자들[1] + 변수들2)
  }
}

해체분석기`바지${pants} 양말${socks}`

