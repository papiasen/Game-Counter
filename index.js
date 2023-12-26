// Home Score

let homeScore = 0
document.getElementById("actual-score").textContent = homeScore

function addOne() {
    let result = homeScore + 1
    homeScore = result
    document.getElementById("actual-score").textContent = result
}

function addTwo() {
    let result = homeScore + 2
    homeScore = result
    document.getElementById("actual-score").textContent = result
}

function addThree() {
    let result = homeScore + 3
    homeScore = result
    document.getElementById("actual-score").textContent = result
}

// Guest Score

let guestScore = 0
document.getElementById("guest-Score").textContent = guestScore

function addguestOne() {
    let result = guestScore + 1
    guestScore = result
    document.getElementById("guest-Score").textContent = result
}

function addguestTwo() {
    let result = guestScore + 2
    guestScore = result
    document.getElementById("guest-Score").textContent = result
}

function addguestThree() {
    let result = guestScore + 3
    guestScore = result
    document.getElementById("guest-Score").textContent = result
}

// New Game

function newGame() {
    homeScore = 0
    document.getElementById("actual-score").textContent = homeScore
    guestScore = 0
    document.getElementById("guest-Score").textContent = guestScore

}
