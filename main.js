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

let coord ='0';
setInterval(()=>{
    if(coord === rspX.가위x){ //'가위' 일때
        coord = rspX.바위x;
        computer.style.background = `url(${IMG_URL}) ${rspX.바위x} 0`;
        computer.style.backgroundSize ='auto 200px'; 
    }

    else if(coord === rspX.바위x){//'바위' 일때
        coord = rspX.보x;
        computer.style.background = `url(${IMG_URL}) ${rspX.보x} 0`;
        computer.style.backgroundSize ='auto 200px'; 
    }

    else if (coord === rspX.보x){//'보' 일때
        coord = rspX.가위x;
        computer.style.background = `url(${IMG_URL}) ${rspX.가위x} 0`;
        computer.style.backgroundSize ='auto 200px'; 
    }

    
},50);