function calculator(num1, operation, num2) {
  if (operation === '+') {
    return num1 + num2;
  }

  if (operation === '-') {
    return num1 - num2;
  }

  if (operation === '*') {
    return num1 * num2;
  }

  if (operation === '/') {
    return num1 / num2;
  }
}

export default calculator;
