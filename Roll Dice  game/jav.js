const Roll = document.getElementById("roll")
const Reset = document.getElementById("reset")
let Result = document.getElementById("dice-result")
let image_result= document.getElementById("dice-images")
const value = []
const images = []
Roll.addEventListener("click",()=>{
      value.length=0
      images.length=0
       
      let Input = document.getElementById("input").value
    for(let i=0;i<Input;i++){
          const values = Math.floor(Math.random()*6)+1
           value.push(values)
          images.push(`<img src="dice/${values}.png" height="100px" width="100px">`)
    }
    Result.textContent=`Dice : ${value.join(" ,")}`
    image_result.innerHTML=images.join(" ")
})

Reset.addEventListener("click",(a)=>{
    a.preventDefault()
    Result.textContent=""
    image.innerHTML=""
})