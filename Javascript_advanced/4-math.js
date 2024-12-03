function divideBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber;
  }
}

function addBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber + firstNumber;
  }
}

function addBy100(number) {
  return addBy(100)(number);
}

function addBy1000(number) {
  return addBy(1000)(number);
}

function divideBy10(number) {
  return divideBy(10)(number);
}

function divideBy100(number) {
  return divideBy(100)(number);
}
