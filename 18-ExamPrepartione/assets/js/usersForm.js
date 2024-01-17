const allInputs = document.querySelectorAll("input");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8030/products";

if (id) {
  axios(`${BASE_URL}/${id}`).then((res) => {
    inputs[1].value = res.data.name;
    inputs[2].value = res.data.text;
  });
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    name: inputs[1].value,
    text: inputs[2].value,
    photo: `./assets/img/${inputs[3].value.split("\\")[2]}`,
  };

  if (id) {
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    axios.post(`${BASE_URL}`, obj);
  }
  window.location = "./usersPage.html";
});

onclick = "userEdit(${element.id},this)";

async function userEdit(id, btn) {
  await axios.PATCH(`${BASE_URL}/products/${id}`, obj);
  window.location = "./usersPage.html";
}
