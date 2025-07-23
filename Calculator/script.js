let display = document.getElementById('display');

function append(value) {
  if (value === '%') {
    display.value += '/100';
  } else {
    display.value += value;
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

