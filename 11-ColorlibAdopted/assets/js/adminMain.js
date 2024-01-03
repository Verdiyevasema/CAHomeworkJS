let tBody = document.querySelector("tBody");
const searchInput = document.querySelector(".searchInput");
const BASE_URL = " http://localhost:8000";
let arr;

async function getData(endPoint) {
  const resp = await axios(`${BASE_URL}/${endPoint}`);
  drawTable(resp.data);
  arr = resp.data;
}

getData("books");

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
  await axios.delete(`${BASE_URL}/books/${id}`);
}

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawTable(filtered);
  console.log(filtered);
});
