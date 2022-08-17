const startBtn = document.querySelector(".start")
const stoptBtn = document.querySelector(".stop")
const resettBtn = document.querySelector(".reset")

let day = hr = min = seg = ms = "0" + 0
let startTimer;


startBtn.addEventListener("click", start)
stoptBtn.addEventListener("click", stop)
resettBtn.addEventListener("click", reset)


function start() {
    startBtn.classList.add("active")
    startBtn.classList.remove("stopActive")
    enableDisbleBtn(startBtn)
    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms

        if(ms == 100){
            seg++
            ms = "0" + 0
        }
        if(seg == 60){
            min++
            seg = "0" + 0
        }
        if(min == 60){
            hr++
            min = "0" + 0
        }
        if(hr == 24){
            day++
            hr = "0" + 0
        }
        putValue(startTimer)
    },10)

}


function stop() {
    startBtn.classList.remove("active")
    stoptBtn.classList.add("stopActive")
    enableDisbleBtn(startBtn)
    clearInterval(startTimer)


}

function reset() {
    startBtn.classList.remove("active")
    stoptBtn.classList.remove("stopActive")
    startBtn.disabled = false
    stoptBtn.disabled = false
    clearInterval(startTimer)
    day = hr = min = seg = ms = "0" + 0
    putValue()
}

function putValue() {
    document.querySelector(".milissegundos").innerText = ms
    document.querySelector(".segondo").innerText = seg
    document.querySelector(".minuto").innerText = min
    document.querySelector(".hora").innerText = hr
    document.querySelector(".dia").innerText = day
}

function enableDisbleBtn(btn) {
    btn.disabled = !btn.disabled
}
