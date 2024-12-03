function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const p = document.createElement("p");
  p.innerText = "Welcome Holberton!";
  document.body.appendChild(p);

  const spookyButton = document.createElement("button");
  spookyButton.innerText = "Spooky";
  spookyButton.onclick = spooky;
  document.body.appendChild(spookyButton);

  const darkButton = document.createElement("button");
  darkButton.innerText = "Dark mode";
  darkButton.onclick = darkMode;
  document.body.appendChild(darkButton);

  const screamButton = document.createElement("button");
  screamButton.innerText = "Scream mode";
  screamButton.onclick = screamMode;
  document.body.appendChild(screamButton);
}
