const productCard = document.querySelector(".productCard");
const card = document.querySelector(".card");
const search = document.querySelector(".search");
let leadMoreBtn = document.querySelector(".leadMoreBtn");
let limit = 3;
let arr = [];
let copyData = [];

const BASE_URL = "http://localhost:8040";

async function getData() {
  try {
    const response = await axios(`${BASE_URL}/ourProducts`);
    console.log(response.data);
    drawProductCards(response.data.slice(0, limit));
    arr = response.data;
    copyData = response.data;
  } catch (error) {
    console.log(error);
  }
}

getData();

function drawProductCards(data) {
  productCard.innerHTML = "";
  data.forEach((element) => {
    productCard.innerHTML += `
      <div class="card">
          <div>
            <img
              src="${element.photo}"
              alt=""
              class="product-image"
            />
          </div>
          <h5 class="card-title">${element.name}</h5>
          <span class="card-description"
            >${element.text}</span>
          <div class="cardButton">
            <a class="edit" href="details.html?id=${element.id}">Details</a>
          </div>
      </div>
   
      `;
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

leadMoreBtn.addEventListener("click", function () {
  limit += 3;
  console.log(copyData);
  drawProductCards(copyData.slice(0, limit));
});
