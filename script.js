const buttonYes=document.querySelector('.yes');
const buttonNo=document.querySelector('.no');

let buttonYesFontSize=2;
let buttonNoFontSize=2;

buttonNo.addEventListener('click', doYesMore);
buttonYes.addEventListener('click', pushYes);

function doYesMore(){
    buttonYesFontSize+=0.4;
    buttonYes.style.fontSize=buttonYesFontSize+'em';
    buttonNoFontSize -=0.2;
    buttonNo.style.fontSize=buttonNoFontSize+'em';
}

function pushYes(){
    location.href='./page2.html';
}