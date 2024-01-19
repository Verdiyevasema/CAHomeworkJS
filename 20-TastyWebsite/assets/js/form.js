const allInputs = document.querySelectorAll("input");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8030";
let editId = null;
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let obj = {
    name: inputs[0].value,
    description: inputs[1].value,
    price: inputs[2].value,
  };
  if (!editId) {
    if (
      inputs[0].value != "" &&
      inputs[1].value != "" &&
      inputs[2].value != ""
    ) {
      await axios.post(`${BASE_URL}/menus`, obj);
    } else {
      alert("Bos saxlamaq olmaz.");
    }
  } else {
    await axios.patch(`${BASE_URL}/menus/${editId}`, obj);
  }
});

async function userEdit(id, btn) {
  editId = id;
  const res = await axios(`${BASE_URL}/menus/${id}`);
  inputs[0].value = res.data.name;
  inputs[1].value = res.data.description;
  inputs[2].value = res.data.price;
}
