const ourMenu = document.querySelector(".ourMenu");
const menus = document.querySelector(".menus");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
const input = document.querySelector(".input");
const search = document.querySelector(".search");
let limit = 3;
let arr = [];
let copyData = [];
const BASE_URL = "http://localhost:8030";

async function getData() {
  try {
    const resp = await axios(`${BASE_URL}/menus`);
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
  ourMenu.innerHTML = "";
  data.forEach((element) => {
    ourMenu.innerHTML += `   
          <div class="menus">
            <div class="ourMenuLeft">
              <div class="ourMenu-text-img">
                <div><img src="${element.photo}" alt="" /></div>
                <div class="ourMenu-text">
                  <h3>${element.name} ----------------- $${element.price}</h3>
                  <p>${element.description}</p>
                </div>
              </div>
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
