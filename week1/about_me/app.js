let countElem = document.getElementById("count");
let countButtonElem = document.getElementById("countButton")
let clearButtonElem = document.getElementById ("clearButton");
let currentCount = 0;
// if(currentCount == 0){
//    clearButtonElem.classList.add("hidden");
// }
function addCount(){
   currentCount++;
   //countElem.innerText = currentCount;
   countButtonElem.innerText = `${currentCount} 👽 spawned.`;
   drawAliens();
   clearButtonElem.classList.remove("hidden");
}
function clearAliens(){
   currentCount = 0;
   countButtonElem.innerText = `${currentCount} 👽 spawned.`;
   template = "";
   document.getElementById("aliens").innerHTML = template;
}
let template = "";
function drawAliens(){
   if(currentCount < 5){
      template += `<img src="alien1.gif">`;
      document.getElementById("aliens").innerHTML = template;
   } else if(currentCount >= 10){
      template += `<img src="alien2.gif">`;
      document.getElementById("aliens").innerHTML = template;
   } else if(currentCount >= 15 && currentCount % 2){
      template += `<img src="alien1.gif">`;
      document.getElementById("aliens").innerHTML = template;
   } else if(currentCount >= 15 && currentCount % 1){
      template += `<img src="alien2.gif">`;
      document.getElementById("aliens").innerHTML = template;
   }
   // template += `<img src="alien.gif">`;
   // for(let i = 0; i < currentCount; i++){
   //    document.getElementById("aliens").innerHTML = template;
   // }
}
