let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector("nav");
let header = document.querySelector("header");
let ourProduct = document.querySelector(".ourProduct");
let container = document.querySelector(".container");
let productsSection = document.querySelector(".productsSection");
let cosmeticFotoProducts = document.querySelector(".cosmeticFotoProducts");
let limit = 3;
let copyData = []
let leadMoreBtn = document.querySelector(".leadMoreBtn");
const BASE_URL = "http://localhost:8080";

async function getData(endpoint) {
  const resp = await axios(`${BASE_URL}/${endpoint}`);
  console.log(resp.data);
  copyData = resp.data
  drawCards(resp.data.slice(0, limit));
}

getData("ourProducts");

function drawCards(array) {
    cosmeticFotoProducts.innerHTML = ""
    console.log(array);
  array.forEach((el) => {
    cosmeticFotoProducts.innerHTML += `
         <div class="cosmeticFoto2">
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

// search.addEventListener("input", async function (e) {
//   let resp = await axios(`${BASE_URL}/ourProducts/${e.target.value}`);
//   let filtered = resp.data.filter((item) =>
//     item.name
//       .toLocaleLowerCase()
//       .includes(e.target.value.toLocaleLowerCase())
//   );
//   drawCards(filtered);
// });

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");

  // this.classList.contains("fa-solid fa-bars")
  // ? this.classList.add("") : null

  if (nav.classList.contains("show")) {
    nav.style.height = "0px";
    setTimeout(() => {
      nav.style.height = "200px";
    }, 50);
    header.style.backgroundColor = "white";
    header.style.transition = "0.3s all";
  } else {
    header.style.backgroundColor = "rgb(236, 229, 229)";
  }
});
