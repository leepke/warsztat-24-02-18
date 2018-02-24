(function(){

    var points
    var time
    var mole

    function addPoint(){
        points++
        displayPoints(points)
    
    }

    function reduceTime(){
        time--
        displayTime(time)
        if (time === 0){
            endGame()
        }
    }

    function displayPoints(pointsParam){
        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = 'Punkty: ' + pointsParam
    }

    function displayTime(timeParam){
        var timeContainer = document.querySelector('.time')
        timeContainer.innerText = timeParam
    }

    function makeMole(){

            var molePosX = Math.round(
                Math.random() * (window.innerWidth - window.innerHeight / 10)
            )
            var molePosY = Math.round(
                Math.random() * (window.innerHeight - window.innerWidth / 10)
            )

            var mole = document.createElement('div')

            mole.classList.add('mole')

            mole.style.left = molePosX + 'px'
            mole.style.top = molePosY + 'px'

            mole.addEventListener(
                'click',
                function(){
                    mole.remove()
                    addPoint()
                }
            )

            document.querySelector('body').appendChild(mole)

            return mole
    }

    function init(){
        points = 0
        time = 10
        mole = makeMole()

        displayPoints(points)
        displayTime(time)

        gameIntervalId = setInterval(
            function(){
                mole.remove()
                mole = makeMole()
                reduceTime()
            },
            1000
        )
    }
    
    function endGame(){
        clearInterval(gameIntervalId)
        mole.remove()
        alert('Gra skończona!\nTwoje punkty: ' + points + ' !')
    }

    init()

})()