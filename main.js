const computer = document.querySelector('#computer');
const score = document.querySelector('#score');
const 가위 = document.querySelector('#가위');
const 바위 = document.querySelector('#바위');
const 보 = document.querySelector('#보');

const rspX = {
 가위x :'0', //가위
 바위x :'-220px', //바위
 보x :'-440px', //보
};
const IMG_URL = './imgs/rsp.png';
computer.style.background = `url(${IMG_URL})0 0`;
computer.style.backgroundSize ='auto 200px'; //이렇게 하면 이미지 사이즈게 높이200px에 맞춰서 '자동으로' 맞춰짐

let computerChoice ='가위x'; //객체를 굳이 지정하지 않아도 읽기 쉽게 코딩가능
const changeComputerHand=()=>{
    if(computerChoice === '가위x'){ //'가위' 일때
        computerChoice = '바위x';        
    }

    else if(computerChoice === '바위x'){//'바위' 일때
        computerChoice = '보x';       
    }

    else if (computerChoice === '보x'){//'보' 일때
        computerChoice = '가위x'  ;        
    }  
        computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
        computer.style.backgroundSize ='auto 200px';
};
let intervalId = setInterval(changeComputerHand,50);

// 버튼 클릭하면 컴퓨터가 선택 1초간 보여주는 이벤트
// 만약 clickButton을 5번 '연속' 호출하면 인터벌이 1,2,3,4 계속 덮어씌우다가 5번만 intervalId에 저장
// 그 다음에 버튼을 클릭하면 마지막 5번만 취소됨(1,2,3,4번은 남아서 계속 돌고있게됨)
const clickButton = ()=>{
    clearInterval(intervalId);
    //점수 계산 및 화면 표시
    setTimeout(()=>{
        clearInterval(intervalId);
        intervalId= setInterval(changeComputerHand,50);
    },1000);
};

가위.addEventListener('click',clickButton);
바위.addEventListener('click',clickButton);
보.addEventListener('click',clickButton);