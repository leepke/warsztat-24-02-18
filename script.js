console.log('Hello Krzysiek!')

//data types

//prymitives


//string
var textVariable = "Krzysiek"
console.log(textVariable)

//number
var numberVariable = 43
console.log(numberVariable)

//boolean
var boolVariable = true
console.log(boolVariable)

//null
var nullVariable = null
console.log(nullVariable)

//undefined
var undefinedVariable = undefined
console.log(undefinedVariable)

//objects

var simplestObj = {
    name: 'Krzysztof',
    lastname: 'Lipka'

}
console.log(simplestObj)

// nested objects with data

var nastedObj = {
    name: 'Krzysiek',
    car: {
        brand: 'Skoda',
        engine: 1.4
    }
}
console.log(nastedObj)
console.log(nastedObj.car.engine)
console.log(nastedObj.car.year) //undefined


//arrays
var simpleArray = [
    1,
    {name: 'Ala' },
    3,
    4,
    5
]
console.log(simpleArray)
console.log(simpleArray[4])
console.log(simpleArray[1].name)