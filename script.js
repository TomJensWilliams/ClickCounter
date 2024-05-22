let counter = 1;
let decreaseButton = document.querySelector('#decreaseButton');
let increaseButton = document.querySelector('#increaseButton');
let numberDiv = document.querySelector('#numberDiv');

function increaseCounter() {
  counter++;
}

function decreaseCounter() {
  counter--;
}

function resetNumber() {
  numberDiv.innerHTML = counter;
}

decreaseButton.addEventListener('click', () => {
  counter > 1 ? decreaseCounter() : () => {};
  // console.log(counter);
  resetNumber();
});

increaseButton.addEventListener('click', () => {
  increaseCounter();
  // console.log(counter);
  resetNumber();
});
