let now = new Date()
let finish = date = new Date(2024, 2, 29, 1, 40, 0, 0)
let delta = Math.trunc( (finish - now)/1000)

function convertSecondToDHMS(second){
    const days = Math.floor (second / (3600 * 24));
    const hours = Math.floor (second % (3600 * 24) / 3600);
    const minutes = Math.floor (second % (3600 * 24) /60);
    const remainingSeconds = Math.floor(second % 60)
    return  { days, hours, minutes, seconds, remainingSeconds}
}

const {days, hours, minutes, seconds} = convertSecondToDHMS(delta)
  

let timerElems = document.querySelectorAllll('.timerElem .num')
timerElems[0].innerHTML = twoDigitsNum(days)
timerElems[1].innerHTML = twoDigitsNum(hours)
timerElems[2].innerHTML = twoDigitsNum(minutes)
console.log(timerElems)

function twoDigitsNum(a) {
    if(a<10) {
        return '0${a}'
    }else {
        return a
    }
}