let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function append(value) {
  if (value === '%') {
    display.value += '/100';
  } else {
    display.value += value;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
