let count=0;

const increase=document.getElementById(`increase`);
const reset=document.getElementById(`reset`);
const decrease=document.getElementById(`decrease`);

increase.onclick = function(){
    count++;
    counter1.textContent=count;
}
reset.onclick = function(){
    count=0;
    counter1.textContent=count;
}
decrease.onclick = function(){
    count--;
    counter1.textContent=count;
}