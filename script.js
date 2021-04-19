/*** 1 ***/
total = 0
document.querySelector(".lime-cola").addEventListener("click", addCola);
function addCola() {
    total += 2;
    let currentTotal = document.querySelector('h1');
    currentTotal.innerText = `Total: $${total.toFixed(2)}`
};
document.querySelector(".salted-peanuts").addEventListener("click", addPeanuts);
function addPeanuts() {
    total += 3;
    let currentTotal = document.querySelector('h1');
    currentTotal.innerText = `Total: $${total.toFixed(2)}`
};
document.querySelector(".chocolate-bar").addEventListener("click", addChocolate);
function addChocolate() {
    total += 4;
    let currentTotal = document.querySelector('h1');
    currentTotal.innerText = `Total: $${total.toFixed(2)}`
};
document.querySelector(".fruit-gummies").addEventListener("click", addGummies);
function addGummies() {
    total += 6;
    let currentTotal = document.querySelector('h1');
    currentTotal.innerText = `Total: $${total.toFixed(2)}`
};
/*** 2 ***/
const form = document.querySelector('form');
form.addEventListener('submit', (e) => { e.preventDefault();
    let number = document.getElementById("num");
    let coinNum = Number(number.value);
    let selected = document.getElementById("select").value;
    for (i = 1; i <= coinNum; i++){
        let coins = document.createElement("div");
        coins.innerText = selected;
        let container = document.getElementById("coinDrop");
        container.append(coins);

        coins.addEventListener("click", (event) => {
            event.target.remove();
        });
    }
});
/*** 3 ***/
bulb = document.querySelector(".light-bulb");

document.querySelector(".on").addEventListener("click", lightOn);
function lightOn(){
    bulb.classList.remove("light-off");
}
document.querySelector(".off").addEventListener("click", lightOff);
function lightOff(){
    bulb.classList.add("light-off");
}
document.querySelector(".toggle").addEventListener("click", lightSwitch);
function lightSwitch(){
    bulb.classList.toggle("light-off");
}
document.querySelector(".end").addEventListener("click", lightEnd);
function lightEnd(){
    bulb.remove();
    document.querySelector(".on").disabled = true;
    document.querySelector(".off").disabled = true;
    document.querySelector(".toggle").disabled = true;
    document.querySelector(".end").disabled = true;
}