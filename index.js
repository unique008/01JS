
function createParagraph(){
    let para = document.createElement('p');
    para.textContent = '风中少年勇敢向前！';
    document.body.appendChild(para);
}
const buttons = document.querySelectorAll('button');
for(let i=0;i<buttons.length; i++){
    buttons[i].addEventListener('click',createParagraph);
}
        