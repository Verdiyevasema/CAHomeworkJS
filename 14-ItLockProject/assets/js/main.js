let caseStudy = document.querySelector(".caseStudy");
let container = document.querySelector(".container");
let inputSelect = document.querySelector(".inputSelect");
let globalBrands = document.querySelector(".globalBrands");
let allBtn = document.querySelectorAll(".btn");
let cards = document.querySelector(".cards");
let limit = 3;
let copyData = [];
let loadMoreBtn = document.querySelector(".loadMoreBtn");
const BASE_URL = "http://localhost:8070";
async function getData(endpoint) {
  const resp = await axios(`${BASE_URL}/${endpoint}`);
  console.log(resp.data);
  copyData = resp.data;
  drawCards(resp.data.slice(0, limit));
}

getData("globalBrands");

function drawCards(array) {
  cards.innerHTML = "";
  console.log(array);
  array.forEach((el) => {
    cards.innerHTML += `

         <div class="card">
            <div class="cardImage"><img src="${el.photo}" alt="" /></div>
            <div>
              <h4>${el.name}</h4>
              <p>${el.text}</p>
              <button  class="btn btn-danger" onclick="deletecard(${el.id}, this)">Delete</button>
        
            </div>
          </div>
        `;
  });
}

async function deletecard(id, btn) {
  console.log(id, btn);
  if (confirm("Are you sure you want to delete it?")) {
    btn.closest(".cards").remove();
    await axios.delete(`${BASE_URL}/globalBrands/${id}`);
  }
}

search.addEventListener("input", async function (event) {
  let response = await axios(`${BASE_URL}/globalBrands`);
  let filtered = response.data.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  drawCards(filtered);
});

loadMoreBtn.addEventListener("click", function () {
  limit += 3;
  drawCards(copyData.slice(0, limit));
});
