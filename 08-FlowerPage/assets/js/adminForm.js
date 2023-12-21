const allInputs = document.querySelectorAll("input");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8000/coffe";

if (id) {
  axios(`${BASE_URL}/${id}`).then((res) => {
    inputs[1].value = res.data.name;
    inputs[2].value = res.data.description;
    inputs[3].value = res.data.price;
  });
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    name: inputs[1].value,
    description: inputs[2].value,
    price: inputs[3].value,
    photo: `./assets/image/${inputs[1].value.split("\\")[2]}`,
  };

  if (id) {
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    axios.post(`${BASE_URL}`, obj);
  }
  window.location = "./adminPage.html";
});

onclick = "userEdit(${element.id},this)";

async function userEdit(id, btn) {
  await axios.PATCH(`${BASE_URL}/coffe/${id}`, obj);
  window.location = "./adminPage.html";
}
