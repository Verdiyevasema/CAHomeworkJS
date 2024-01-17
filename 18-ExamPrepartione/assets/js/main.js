const apiSection = document.querySelector("#apiSection");
const input = document.querySelector(".input");
const search = document.querySelector(".search");
const productCard = document.querySelector(".productCard");
const card = document.querySelector(".card");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
let limit = 3;
let arr = [];
let copyData = [];
const BASE_URL = "http://localhost:8030";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/products`);
    console.log(resp.data);
    drawProductCards(resp.data.slice(0, limit));
    arr = resp.data;
    copyData = resp.data;
  } catch (error) {
    console.log(error);
  }
}

getData();

function drawProductCards(data) {
  productCard.innerHTML = "";
  data.forEach((element) => {
    productCard.innerHTML += `<div class="card">
    <div class="img">
      <img src="${element.photo}" alt="" />
    </div>
    <div class="div">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-description">${element.text}</p>
    </div>
    <div class="cardBtn">
      <a class="view" href="details.html?id=${element.id}">View</a>
    </div>
  </div>`;
  });
}

search.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawProductCards(filtered);
  console.log(filtered);
});

loadMoreBtn.addEventListener("click", function () {
  limit += 3;
  console.log(copyData);
  drawProductCards(copyData.slice(0, limit));
});
