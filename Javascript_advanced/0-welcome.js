function welcome(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  function displayFullName() {
    return `Welcome ${fullName}!`;
  }
  return displayFullName();
}
