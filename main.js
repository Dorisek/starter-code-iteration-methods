// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.

console.log(users)

// Append the katas to this element:

// katas0

const main = document.querySelector('main')

function printKataHeading(parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA" + kataNumber)
    parentElement.append(kata1Heading)

}

function printObject(parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}

printKataHeading(main, 0)
const greenEyes1 = users.filter(user => user.eyeColor === "green")
printObject(main, greenEyes1)


function printKata(kata1Heading, object) {
    const detailsElement = document.createElement('details')
    main.append(detailsElement)

    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kata1Heading)
    detailsElement.append(summaryElement)

    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


const kata2Heading = document.createElement("h1")
kata2Heading.append("KATA 1")
main.append(kata2Heading)

function printObject(parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
printKataHeading(main, 1)

let persons = [users];
function isActive() {
    for (let index = 0; index < persons.length; index++) {
        console.log(persons)
        index += 1
    }
    return true
}

function myFunction(users, callback) {
    innerHTML = persons.filter(persons => persons.isActive === "true")
    return callback(users)
}
const isActiveOutput = myFunction(users, isActive)
console.log({ isActiveOutput })

main.append(isActiveOutput)

const kata3Heading = document.createElement("h1")
kata3Heading.append("KATA 2")
main.append(kata3Heading)

const array = [users];

let element = document.querySelectorAll('email')
function getEmailAdress() {
    for (let index = 0; index < array.length; index++) {
        console.log(array)
        index += 1
    }
    return element
}
function myFunction(users, callback) {
    innerHTML = persons.map(persons => persons.getEmailAdress === "email")
    return callback(users)
}
const getEmailAdressOutput = myFunction(users, getEmailAdress)
console.log({ getEmailAdressOutput })

main.append(getEmailAdressOutput)

//A map applies a function over every element and then return
//<script> square = x=> Math.pow(x,2);
//squares = array.map(square);
//;
//console.log(squares);</script>

const kata4Heading = document.createElement("h1")
kata4Heading.append("KATA 3")
main.append(kata4Heading)

const array1 = [users];

function company() {
    (array, callback)
    for (let index = 0; index < array.length; index = index + 1) {
        let currentItem = array[index]
        callback(currentItem, index, array)
    }
}










