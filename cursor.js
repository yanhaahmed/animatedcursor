const text = document.querySelector(".animate");
const strText = text.textContent
const splitText = strText.split("");
text.textContent = ""; 

for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
   }

   let character = 0;
   let timer = setInterval(onTick, 50);

   function onTick() {
    const span = text.querySelectorAll("span")[character];
    span.classList.add("fade");     
    character++;
    if( character === splitText.length){
       complete();
       return;
       }
}
 function complete(){
    clearInterval (timer);
    timer = null; 
   }
   
   (function(){
      const capslockenable = 
      document.getElementById("caps_lock_check");
   const errormsg = 
   document.getElementById("check_warning");  

   capslockenable.onkeyup = function(e) {
  if (e.getModifierState("CapsLock")) 
  { errormsg.classList.remove("d-none");
     } else {
      errormsg.classList.add("d-none");
   }   }   }());
    
   

   // const button = document.querySelector('.button');
   // const submit = document.querySelector('.submit');
   
   // function toggleClass(){
   //    this.classList.toggle('active');
   // }
   // function addClass(){
   //    this.classList.add('finished');
   // }
   
   // button.addEventListener('onclick', toggleClass);
   // button.addEventListener('transitioned', toggleClass);
   // button.addEventListener('transition', addClass);
