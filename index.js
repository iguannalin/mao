window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const r = () => getRandomInt(7, 20);

  function displayText(t) {
    const p = document.createElement("p");
    p.innerHTML = t.substring(0, getRandomInt(1, t.length));
    p.style.marginTop = `${getRandomInt(0, 40)*10}px`;
    p.style.lineHeight = `${r()*2}px`;
    container.appendChild(p);
  }
  
  fetch("mao.txt").then((r) => r.text()).then((result) => {
    const text = result.split(/[。、，]/);
    for (let i = 0; i < r(); i++) {
      displayText(text[getRandomInt(0, text.length)]);
    }
  })
});