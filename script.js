let btn = document.getElementById('btn');
let output = document.getElementById('op-txt');
let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function() {
  let input = document.getElementById('user-ip').value;
  if (input == 100) {
    alert("Invalid Number, Please enter the number between 1 to 100");
    output.innerHTML = 'Invalid number'
  }
  if (input == number) {
    output.innerHTML = 'Woho you guess the right number, your number was ' + number;
    alert("Woho, you guessed right number, " + number)
  } else if (input < number) {
    output.innerHTML = "Your number is too low, guess highest number!!"
  };
  if (input > number) {
    output.innerHTML = "Your number is too high, guess lowest number!!"
  }
});

