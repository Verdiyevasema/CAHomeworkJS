const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");

const BASE_URL = "http://localhost:8020/menu";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/${id}`);
    console.log(resp.data);
    menuNav = resp.data;
    drawProductCards(resp.data);
  } catch (error) {
    console.log(error);
  }
}
getData();

function drawProductCards(data) {
  details.innerHTML = "";
  details.innerHTML += `  <div class="menuLeftRight">
  <div class="menuLeft">
    <h1>${data.name}</h1>
    <p>${data.description} ------------------ $${data.price}</p>
  </div>
</div>`;
}
