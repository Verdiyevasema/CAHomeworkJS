const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");

const BASE_URL = "http://localhost:8030/products";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/${id}`);
    console.log(resp.data);
    productCard = resp.data;
    drawProductCards(resp.data);
  } catch (error) {
    console.log(error);
  }
}
getData();

function drawProductCards(data) {
  details.innerHTML = "";
  details.innerHTML += ` <div class="productCard">
  
    <div class="img">
      <img src="${data.photo}" alt="" />
    </div>
    <div class="div">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-description">${data.text}</p>
    </div>
</div>`;
}
