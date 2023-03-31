function setnum(num) {
  let input = document.getElementById("screen");
  input.value += num;
}

function ans() {
  let inputvalue = document.getElementById("screen");
  let output = eval(inputvalue.value);
  inputvalue.value = output;
}

function clearbtn() {
  let inputvalue = document.getElementById("screen");
  inputvalue.value = "";
}

function del() {
  let inputvalue = document.getElementById("screen");
  inputvalue.value = inputvalue.value.slice(0, -1);
}
