const count = document.querySelector(".count")
const add = document.querySelector(".add")
const resetCount = document.querySelector(".reset")
const sub = document.querySelector(".subtract")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
  if(e.target.classList.contains("add")){
    console.log("add")
    count.innerHTML++;
    setColor();
  }
  if(e.target.classList.contains("subtract")){
    console.log("subtract")
    count.innerHTML--;
    setColor();
  }
  if(e.target.classList.contains("reset")){
    console.log("reset")
    count.innerHTML = 0;
    setColor();
  }
})

function setColor() {
  if (count.innerHTML > 0){
    count.style.color = "yellow";
  }else if (count.innerHTML < 0){
    count.style.color = "orange";
  }else{
    count.style.color = "#fff";
  }
}




// add.addEventListener("click", () => {
//   count.innerHTML++;
// })
// sub.addEventListener("click", () => {
//   count.innerHTML--;
// })
// reset.addEventListener("click", () => {
//   count.innerHTML = 0;
// })