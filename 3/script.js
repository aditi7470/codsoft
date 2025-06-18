const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function percent() {
  try {
    display.value = parseFloat(display.value) / 100;
  } catch {
    display.value = "Error";
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(parseFloat(display.value));
  } catch {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(parseFloat(display.value), 2);
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
