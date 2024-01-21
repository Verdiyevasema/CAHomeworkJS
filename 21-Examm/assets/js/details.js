const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const BASE_URL = "http://localhost:8090/restaurantFoodSec";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/${id}`);
    console.log(resp.data);
    drawCards(resp.data);
    cards = resp.data;
  } catch (error) {
    console.log(error);
  }
}

getData();

function drawCards(data) {
  details.innerHTML = "";
  details.innerHTML = `
    <div class="card">
        <img src="${data.image}" alt="" />
        <h1>${data.name}</h1>
        <p>${data.description}</p>
        <p>${data.title}</p>
        <p>${data.price}</p>
    </div>`;
}
