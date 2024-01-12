let ourProduct = document.querySelector(".ourProduct");
let container = document.querySelector(".container");
let productsSection = document.querySelector(".productsSection");
let chooseCards = document.querySelector(".chooseCards");
let leadMoreBtn = document.querySelector(".leadMoreBtn");
let choosecard = document.querySelector(".choosecard");
let limit = 3;
let copyData = [];
const BASE_URL = "http://localhost:8000";

async function getData(endpoint) {
  const resp = await axios(`${BASE_URL}/${endpoint}`);
  console.log(resp.data);
  copyData = resp.data;
  drawCards(resp.data.slice(0, limit));
}

getData("whyChooseUs");

function drawCards(array) {
  chooseCards.innerHTML = "";
  console.log(array);
  array.forEach((el) => {
    chooseCards.innerHTML += `
         <div class="choosecard">
            <img src="${el.photo}" alt="" />
            <div>
              <h6>${el.name}</h6>
              <p>${el.text}</p>
            </div>
          </div>
          <button class="btn btn-danger" onclick="deleteProduct(${el.id},this)">Delete</button>
        `;
  });
}

async function deleteProduct(id, btn) {
  console.log(id, btn);
  try {
    if (window.confirm("Silmek istediyinize eminsiniz?")) {
      await axios.delete(`${BASE_URL}/whyChooseUs/${id}`);
      btn.closest(".choosecard").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

leadMoreBtn.addEventListener("click", function () {
  limit += 3;
  drawCards(copyData.slice(0, limit));
});
