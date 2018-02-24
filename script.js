(function (){

    var secondsCounter = 1


    var intevalId setInterval(
        function(){
            console.log(secondsCounter++)

        },
        1000
    )

    setTimeout (
            function(){
                    clearInterval(intevalId)
            },
            5000
    )
}
)()