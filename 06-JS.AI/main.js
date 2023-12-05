let allInputs = document.querySelectorAll("input");
let prodDiv = document.querySelector(".products-div");
let product = document.querySelector(".product");
const BASE_URL = ` https://api.escuelajs.co/api/v1`;
fetch(`${BASE_URL}/products`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    drawCards(data);
  })
  .catch((err) => console.log(err));

function drawCards(array) {
  prodDiv.innerHTML = "";

  array.forEach((elm) => {
    prodDiv.innerHTML += `
    <div class="product">
    <div class="product-image">
      <img src="${elm.images[3]}" style="width: 100%" alt="" />
    </div>
    <div class="product-heading">
    <p class="description">Descprition ${elm.description.slice(0, 70)}...</p>
    <span>Price ${elm.price}</span>
    <p class="title">title ${elm.title}</p>
      <div><button class="deleteBtn" onclick=deleteCustomer("${
        elm.id
      }",this)>Delete</button></div>
    </div>
  </div> `;
  });
}
drawCards();

fetch(`${BASE_URL}/products`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(obj),
}).then(() => {
  fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      drawCards(data);
    })
    .catch((error) => console.log(error));
});

allInputs.forEach((item) => (item.value = ""));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: allInputs[0].value,
    price: allInputs[1].value,
    description: allInputs[2].value,
    images: allInputs[3].value,
  };
  console.log(obj);
});
function deleteCustomer(id, btn) {
  if (confirm("Are you sure you want to delette it?")) {
    fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    btn.closest(".product").remove();
  }
}

