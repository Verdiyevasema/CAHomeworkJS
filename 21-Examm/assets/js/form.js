const allInputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const sortBtn = document.querySelector(".sortBtn");
const submitBtn = document.querySelector(".submitBtn");
const tbody = document.querySelector("tbody");
const searchInput = document.querySelector(".searchInput");
let editId = null;
let data = [];
let arr;

let BASE_URL = "http://localhost:8090";
async function getData() {
  try {
    const res = await axios(`${BASE_URL}/restaurantFoodSec`);
    console.log(res.data);
    drawCards(res.data);
    data = res.data;
    arr = res.data;
  } catch (err) {
    console.log(err);
  }
}

getData();

console.log(allInputs);
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let obj = {
    name: allInputs[0].value,
    description: allInputs[1].value,
    price: allInputs[2].value,
    image: allInputs[3].value,
  };

  if (!editId) {
    let res = await axios.post(`${BASE_URL}/restaurantFoodSec`, obj);
    drawCards(res.data);
  } else {
    axios.patch(`${BASE_URL}/restaurantFoodSec/${editId}`, obj);
  }
});

function drawCards(data) {
  console.log(data);
  tbody.innerHTML = "";

  data.forEach((el) => {
    tbody.innerHTML += `
        <tr>
            <td>${el.id}</td>
            <td><img src="${el.image}" width=100px alt=""></td>
            <td>${el.name}</td>
            <td>${el.description}</td>
            <td>${el.price}</td>
            <td>
                <button class="deleteBtn" onclick=menuDelete("${el.id}",this)>Delete</button>
                <a class="editBtn" href="#" onclick=editProduct("${el.id}") >Edit</a>
            </td>
        </tr>`;
  });
}

async function menuDelete(id, btn) {
  if (confirm("Silmek istediyinize eminsiniz?")) {
    btn.closest("th");
    await axios.delete(`${BASE_URL}/restaurantFoodSec/${id}`);
  }
}

async function editProduct(id) {
  editId = id;
  let res = await axios(`${BASE_URL}/restaurantFoodSec/${id}`);
  console.log(res.data);
  allInputs[0].value = res.data.name;
  allInputs[1].value = res.data.description;
  allInputs[2].value = res.data.price;
  allInputs[3].value = res.data.image;
}

sortBtn.addEventListener("click", function () {
  let sorted = [];
  if (this.innerText === "Ascending") {
    sorted = data.sort((a, b) => a.price - b.price);
    this.innerText = "Descending";
  } else if (this.innerText === "Descending") {
    sorted = data.sort((a, b) => b.price - a.price);
    this.innerText = "Ascending";
  }
  drawCards(sorted);
});

searchInput.addEventListener("input", function (e) {
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawCards(filtered);
  console.log(filtered);
});
