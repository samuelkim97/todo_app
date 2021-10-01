const images = [
  "image0.jpg",
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];
// const body = document.querySelector("body");

function changeRandomImg() {
  const randomNum = parseInt(Math.random() * images.length);
  document.body.style.backgroundImage = `url("../img/image${randomNum}.jpg")`;
}

changeRandomImg();
