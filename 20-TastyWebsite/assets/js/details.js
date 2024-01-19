const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");

const BASE_URL = "http://localhost:8030/menus";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/${id}`);
    console.log(resp.data);
    drawProductCards(resp.data);
    ourMenu = resp.data;
  } catch (error) {
    console.log(error);
  }
}
getData();

function drawProductCards(data) {
  details.innerHTML = "";
  details.innerHTML = `<div class="menus">
  <div class="ourMenuLeft">
    <div class="ourMenu-text-img">
      <div><img src="${data.photo}" class="width:10%"alt="" /></div>
      <div class="ourMenu-text">
        <h3>${data.name} -----------------  $${data.price}</h3>
        <p>${data.description}</p>
      </div>
    </div>
  </div>
</div>`;
}
