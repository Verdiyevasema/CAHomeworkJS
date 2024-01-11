let header = document.querySelector("header");
let nav = document.querySelector("nav");
let inputSelect = document.querySelector(".inputSelect");
let ourBestServices = document.querySelector(".ourBestServices");
let container = document.querySelector(".container");
let ourTopServices = document.querySelector(".ourTopServices");
let ourTopServicesCards = document.querySelector(".ourTopServicesCards");
let allBtn = document.querySelectorAll(".btn");
let cards = document.querySelector(".cards");
let limit = 3;
let copyData = [];
let leadMoreBtn = document.querySelector(".leadMoreBtn");
const BASE_URL = "  http://localhost:8080";

async function getData(endpoint) {
  const resp = await axios(`${BASE_URL}/${endpoint}`);
  console.log(resp.data);
  copyData = resp.data;
  drawCards(resp.data.slice(0, limit));
}

getData("ourBestServices");

function drawCards(array) {
  ourTopServicesCards.innerHTML = "";
  console.log(array);
  array.forEach((el) => {
    ourTopServicesCards.innerHTML += `
    
         <div class="cards">
            <img src="${el.photo}" alt="" />
            <div>
              <h2>${el.name}</h2>
              <p>${el.text}</p>
              <button  class="btn btn-danger" onclick="deletecard(${el.id}, this)">Delete</button>
        
            </div>
          </div>
        `;
  });
}

search.addEventListener("input", async function (event) {
  let response = await axios(`${BASE_URL}/ourBestServices`);
  let filtered = response.data.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  drawCards(filtered);
});



async function deletecard(id, btn) {
  console.log(id,btn);
  if (confirm("Are you sure you want to delete it?")) {
    btn.closest(".cards").remove();
await axios.delete(`${BASE_URL}/ourBestServices/${id}`);
  }
}

