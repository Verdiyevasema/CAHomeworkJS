let tBody = document.querySelector("tBody");
const search = document.querySelector("#search");

const BASE_URL = "http://localhost:8000";

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  drawTable(response.data);
}

getData("coffe");

function drawTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td><img width="150" src="${element.image}"></td>
        <td>${element.name}</td>
        <td>${element.decription}</td>
        <td>${element.price}</td>
        <td>${element.rating}</td>
         <th class = "tableBtn">
          <button> <a class="editBtn" href="./admin.html?id=${element.id}">Edit</a></button>
          <button class="deleteBtn" onclick="userDelete(${element.id}, this)">Delete</button>
        </th>
    </tr>
    `;
  });
}

async function userDelete(id, btn) {
  if (confirm("Are you sure you want to delete?")) {
    btn.closest("th");
  }
  await axios.delete(`${BASE_URL}/coffe/${id}`);
}




search.addEventListener("input", function (e) {
  console.log(e.target.value);
  getData(`search?coffe=&name=${e.target.value}`);
});

sort.addEventListener("click", function () {
  let sorted;
  if (this.innerText === "Ascending") {
    sorted = suppliers.sort((a, b) => a.id - b.id);
    this.innerText = "Descending";
  } else if (this.innerText === "Descending") {
    sorted = suppliers.sort((a, b) => b.id - a.id);

    this.innerText = "Default";
  } else {
    sorted = suppliersCopy;
    this.innerText = "Ascending";
  }

  drawTable(sorted);
});

