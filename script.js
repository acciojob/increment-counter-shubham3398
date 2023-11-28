//your JS code here. If required.
let counter = 0;

const pElement = document.getElementById("counter");

const button = document.getElementById("incrementBtn");

let incrementCounter = (event) => {
    alert(counter);
    pElement.innerText = ++counter;
}

button.addEventListener("click", incrementCounter);
