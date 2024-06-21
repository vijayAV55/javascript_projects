//set intial count
let count = 0;

//set values and button
const value =document.querySelector('#value');
const btn = document.querySelectorall("btn");


btns.array.forEach(function(btn) {
    console.log(orange);
    btn.addEventListener('click',function(e){
       const styles=e.currentTarget.classList;
       if(styles.contains('decrease')){
        count--;
       } else if(styles.contains("increase")){
        count++;

       }else{
        count=0;
       }
       if(count>0){
        value.style.color="green";
       }
       if(count<0){
        value.style.color="red";
       }
       if(count===0){
        value.style.color="#222";
       }
       value.textContent=count;

    });
});