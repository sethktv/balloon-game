var needle = document.getElementById('needle')
var board = document.getElementById('board')
let boom = document.querySelector('.boom')
var start = document.getElementById('start')


window.addEventListener('keydown', (e) => {
    var left = parseInt(window.getComputedStyle(needle).getPropertyValue('left'))
    if (e.key == 'ArrowLeft' && left > 0) {
        needle.style.left = left - 40 + 'px'
    }
    else if (e.key == 'ArrowRight' && left <= 795) {
        needle.style.left = left + 40 + 'px'
    }
})

var ganerate = setInterval(() => {
    var balloon = document.createElement('div')
    balloon.classList.add('balloons')

    balloon.style.left = Math.floor(Math.random() * 740) + 'px'

    board.appendChild(balloon)
}, 1500)



var moveBalloons = setInterval(() => {

    var balloonSet = document.getElementsByClassName('balloons')
    for(var i=0;i<balloonSet.length; i++) {
        var balloo = balloonSet[i]
        balloonBound = balloo.getBoundingClientRect()
        needleBound = needle.getBoundingClientRect()
        if(
            needleBound.left >= balloonBound.left &&
            needleBound.right <= balloonBound.right &&
            needleBound.bottom >= balloonBound.top &&
            needleBound.bottom == balloonBound.top 

            ) {
                balloo.parentElement.removeChild(balloo)
                
               document.getElementById('points').innerHTML =
               parseInt(document.getElementById('points').innerHTML) + 1
               boom.play()
            }
    }

    var balloonsMove = document.getElementsByClassName('balloons')
    if (balloonsMove != undefined) {
        for (var i = 0; i < balloonsMove.length; i++) {
            var balloon = balloonsMove[i]
            var balloonTop = parseInt(
                window.getComputedStyle(balloon).getPropertyValue('bottom')
            )
            balloon.style.bottom = balloonTop + 1 + 'px'
        }
    }
}, 10);

