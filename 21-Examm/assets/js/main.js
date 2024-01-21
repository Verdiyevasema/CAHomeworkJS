const cards = document.querySelector(".cards");
const card = document.querySelector(".card");
let limit = 3;
let data = [];
let copyData = [];
let arr = [];

const BASE_URL = "http://localhost:8090";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/restaurantFoodSec`);
    console.log(resp.data);
    drawCards(resp.data.slice(0, limit));
    copyData = resp.data;
    arr = resp.data;
    data = resp.data;
  } catch (error) {
    console.log(error);
  }
}

getData();

function drawCards(data) {
  cards.innerHTML = "";

  data.forEach((element) => {
    cards.innerHTML += `
            <div class="card">
              <img src="${element.image}" alt="" />
              <h1>${element.name}</h1>
              <p>${element.description}</p>
              <p>${element.title}</p>
              <p>${element.price}</p>
              <a class="viewBtn" href="./details.html?id=${element.id}">View</a>
            </div>`;
  });
}
