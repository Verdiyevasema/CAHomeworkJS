const ourMenu = document.querySelector("#ourMenu");
const input = document.querySelector(".input");
const search = document.querySelector(".search");
const menuNav = document.querySelector(".menuNav");
const card = document.querySelector(".card");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
let limit = 3;
let arr = [];
let copyData = [];
const BASE_URL = "http://localhost:8020";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/menu`);
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
  menuNav.innerHTML = "";
  data.forEach((element) => {
    menuNav.innerHTML += `
    <div class="menuLeftRight">
            <div class="menuLeft">
              <h1>${element.name}</h1>
              <p>${element.description} ------------------ $${element.price}</p>

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
