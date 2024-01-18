const allInputs = document.querySelectorAll("input");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8030";
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let obj = {
    name: inputs[0].value,
    text: inputs[1].value,
    photo: `./assets/img/${inputs[2].value.split("\\")[2]}`,
  };
  if (!editId) {
    if (
      inputs[0].value != "" &&
      inputs[1].value != "" &&
      inputs[2].value != ""
    ) {
      await axios.post(`${BASE_URL}/products`, obj);
    } else {
      alert("bos buraxmaq olmaz");
    }
  } else {
    await axios.patch(`${BASE_URL}/products/${editId}`, obj);
  }
});

async function userEdit(id, btn) {
  editId = id;
  const res = await axios(`${BASE_URL}/products/${id}`);
  inputs[0].value = res.data.name;
  inputs[1].value = res.data.text;
}
