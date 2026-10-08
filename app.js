let buttons=document.querySelectorAll(".cal2")
for(let i of buttons){
    i.addEventListener("click",calculator)
}
function calculator(event){
    document.querySelector("#para").innerText=event.target.innerText;
    

    
}