const decrementButton = document.getElementById("dec-btn")
const incrementButton = document.getElementById("inc-btn")
const resetButton = document.getElementById("res-btn")
const value = document.getElementById("value")

decrementButton.addEventListener("click",()=>{
    value.innerText--
})

incrementButton.addEventListener("click",()=>{
    value.innerText++
    // value.innerText = ++value.innerText
    // let val = value.innerText
    // val++
    // value.innerText = val
})

resetButton.addEventListener("click",()=> {
    value.innerText = 0
})

setTimeout(value.innerText = 0, 5)