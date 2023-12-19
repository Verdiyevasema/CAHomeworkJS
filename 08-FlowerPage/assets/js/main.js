// $("#owl-carousel").owlCarousel({
//   loop: true,
//   margin: 30,
//   dots: true,
//   nav: true,
//   items: 2,
// });

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

let flowersPricing = document.querySelector(".flowersPricing");
let container = document.querySelector(".container");
let wonderfulBeauty = document.querySelector(".wonderfulBeauty");
let flowerImg = document.querySelector(".flowerImg");
let limit = 3;
let copyData = [];
let leadMoreBtn = document.querySelector(".leadMoreBtn");
const BASE_URL = "http://localhost:8080";

async function getData(endpoint) {
  const resp = await axios(`${BASE_URL}/${endpoint}`);
  console.log(resp.data);
  copyData = resp.data;
  drawCards(resp.data.slice(0, limit));
}

getData("flowersPricing");

function drawCards(array) {
  flowerImg.innerHTML = "";
  console.log(array);
  array.forEach((el) => {
    flowerImg.innerHTML += `
    <div class="flowerImg1">
    <img src="${el.photo}" alt="" />
    <div>
      <h6>${el.name}</h6>
      <p>$${el.price}</p>
    </div>
  </div>
        `;
  });
}

leadMoreBtn.addEventListener("click", function () {
  limit += 3;
  drawCards(copyData.slice(0, limit));
});
