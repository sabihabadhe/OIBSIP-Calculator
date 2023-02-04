var screen = document.querySelector("#input");
var btn = document.querySelectorAll('.button');

for(item of btn){
    item.addEventListener('click',(e) => {
        text = e.target.innerText;
        if(text == 'x')
        {
            text = '*';
        }
        screen.value += text;
    });
}
function pow(){
    screen.value=Math.pow(screen.value,2);
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function pi(){
    screen.value=3.14159265359
}
function e(){
    screen.value=2.718281828459045
}
function backspace(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}