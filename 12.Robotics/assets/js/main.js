let flowersPricing = document.querySelector(".featuredRobotics");
let container = document.querySelector(".container");
const searchInput = document.querySelector(".search");
const products = document.querySelector(".products");
const favCount = document.querySelector(".fav-count");
const sort = document.querySelector(".sort");
let leadMoreBtn = document.querySelector(".leadMoreBtn");
let button = document.querySelector(".btn")
let limit = 3;
let copyData = [];
let arr;

let productsCopy = [];

// button.style.padding = "15px 17px";


const favoritedProducts = getFavoritesFromLocaleStorage();
const BASE_URL = "http://localhost:8000";

calculateFavCount(favoritedProducts.length);

async function getProducts(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  productsCopy = response.data;
  arr = response.data;

  drawCards(response.data);
}

getProducts("robotcs");

function drawCards(data) {
  products.innerHTML = "";

  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "product-card";
    const productTitleDivElement = document.createElement("div");
    productTitleDivElement.className = "product-card-title";

    const productNameElement = document.createElement("h3");
    productNameElement.textContent = element.name;
    const favIconElement = document.createElement("i");

    const favoritObj = favoritedProducts.find((item) => item.id === element.id);

    favIconElement.className = favoritObj
      ? "fa-solid fa-heart"
      : "fa-regular fa-heart";

    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.innerHTML = `<b>${element.description}</b>`;

    const productImageElement = document.createElement("img");
    productImageElement.src = element.photo;

    
    const productButtonElement = document.createElement("button");
    productButtonElement.innerHTML = `<b>${element.button}</b>`;

    favIconElement.addEventListener("click", function () {
      this.className === "fa-regular fa-heart"
        ? (this.className = "fa-solid fa-heart")
        : (this.className = "fa-regular fa-heart");

      let favorites = getFavoritesFromLocaleStorage();

      const favIndex = favorites.findIndex((item) => item.id === element.id);

      if (favIndex === -1) {
        favorites.push(element);
      } else {
        favorites.splice(favIndex, 1);
      }

      setProductToLocaleStorage(favorites);

      calculateFavCount(favorites.length);
    });

    productTitleDivElement.append(favIconElement);

    productCardElement.append(
      productTitleDivElement,
      productImageElement,
      productNameElement,
      productDescriptionElement,
      productButtonElement
    );

    products.append(productCardElement);
  });
}

function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

function getFavoritesFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}

function calculateFavCount(count) {
  favCount.textContent = count;
}

sort.addEventListener("click", function () {
  productsCopy.sort((a, b) =>
    a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
  );
  productsCopy.sort((a, b) =>
    b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase())
  );
});

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawCards(filtered);
  console.log(filtered);
});

leadMoreBtn.addEventListener("click", function () {
  limit += 3;
  drawCards(copyData.slice(0, limit));
});
