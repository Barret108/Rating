

let starOne = document.querySelector("#star-one")
let starTwo = document.querySelector("#star-two")
let starThree = document.querySelector("#star-three")
let starFour = document.querySelector("#star-four")
let starFive = document.querySelector("#star-five")

// Reset Stars

function clearStar() {
    starOne.src = `img/star-type-three.svg`;
    starTwo.src = `img/star-type-three.svg`;
    starThree.src = `img/star-type-three.svg`;
    starFour.src = `img/star-type-three.svg`;
    starFive.src = `img/star-type-three.svg`;
}

// Star Click

function starChangeOne() {
    clearStar()
    starOne.src = `img/star-type-one.svg`;
}

function starChangeTwo() {
    clearStar()
    starChangeOne()
    starTwo.src = `img/star-type-one.svg`;
}

function starChangeThree() {
    clearStar()
    starChangeOne()
    starChangeTwo()
    starThree.src = `img/star-type-one.svg`;
}

function starChangeFour() {
    clearStar()
    starChangeOne()
    starChangeTwo()
    starChangeThree()
    starFour.src = `img/star-type-one.svg`;
}

function starChangeFive() {
    clearStar()
    starChangeOne()
    starChangeTwo()
    starChangeThree()
    starChangeFour()
    starFive.src = `img/star-type-one.svg`;
}

// Star Hover

function starHoverOne() {
    clearStar()
    starOne.src = `img/star-type-two.svg`;
}

function starHoverTwo() {
    clearStar()
    starHoverOne()
    starTwo.src = `img/star-type-two.svg`;
}

function starHoverThree() {
    clearStar()
    starHoverOne()
    starHoverTwo()
    starThree.src = `img/star-type-two.svg`;
}

function starHoverFour() {
    clearStar()
    starHoverOne()
    starHoverTwo()
    starHoverThree()
    starFour.src = `img/star-type-two.svg`;
}

function starHoverFive() {
    clearStar()
    starHoverOne()
    starHoverTwo()
    starHoverThree()
    starHoverFour()
    starFive.src = `img/star-type-two.svg`;
}

function clearHover() {
    if (!starOne.src.endsWith('img/star-type-one.svg')) {
        clearStar()
    }
}