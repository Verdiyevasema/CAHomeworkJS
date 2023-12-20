let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let btn = document.querySelector(".btn");
const BASE_URL = "http://localhost:8000";
const coffeData = JSON.parse(localStorage.getItem("coffe")) ?? [];

const id = new URLSearchParams(window.location.search).get("id");
console.log("id", id);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(allInputs[3].value);
  let coffeObj = {
    name: allInputs[0].value,
    description: allInputs[1].value,
    price: allInputs[2].value,
    userphoto: `./assets/img/${allInputs[3].value.split("\\")[2]}`,
  };

  if (!id) {
    axios.post(`${BASE_URL}/coffe`, coffeObj);
  } else {
    axios.patch(`${BASE_URL}/coffe/${id}`, coffeObj);
  }
  coffeData.push(coffeObj);
  localStorage.setItem("coffe", JSON.stringify(coffeData));

  if (id) {
    axios(`${BASE_URL}/${id}`).then((resp) => {
      inputs[0].value = resp.data.name;
      inputs[1].value = resp.data.description;
      inputs[2].value = resp.data.price;
    });
  }
});

onclick = "userEdit(${element.id},this)";

async function userEdit(id, btn) {
  await axios.PATCH(`${BASE_URL}/users/${id}`, obj);
  window.location = "./form.html";
}
