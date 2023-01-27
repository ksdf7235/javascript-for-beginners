const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.style.position = "absolute";
bgImage.style.top = "0";
bgImage.style.width = "100%";
bgImage.style.height = "100vh";
bgImage.style.zIndex = "-1";
