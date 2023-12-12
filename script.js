const data=function(){
    const hex="0123456789ABCDEF";
    let colors="#"
    for(i=0;i<6;i++){
       colors +=hex[Math.floor(Math.random()*16)];
    }
    return colors;
}
let Intervalid;
let startChangingMethod=function(){
    if(Intervalid==null){
    Intervalid=setInterval(changeBgColour,1000)
    }
    function changeBgColour(){
    document.body.style.backgroundColor=data();
    }
}
let stopChangingMethod=function(){
clearInterval(Intervalid);
Intervalid=null;
}
document.querySelector("#start").addEventListener('click' , startChangingMethod);

document.querySelector("#stop").addEventListener('click', stopChangingMethod);
