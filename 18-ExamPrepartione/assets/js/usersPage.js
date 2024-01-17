let tBody = document.querySelector("tBody");
const searchInput = document.querySelector(".searchInput");
const BASE_URL = "http://localhost:8030";
let arr;

async function getData(endPoint) {
  const resp = await axios(`${BASE_URL}/${endPoint}`);
  drawTable(resp.data);
  arr = resp.data;
}

getData("products");

function drawTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td><img width="150" src="${element.photo}"></td>
        <td>${element.name}</td>
        <td>${element.text}</td>
         <th class = "tableBtn">
          <a href="./admin.html?id=${element.id}"><button class="editBtn">Edit</button></a>
          <button class="deleteBtn" onclick=userDelete("${element.id}",this)>Delete</button>
        </th>
    </tr>
    `;
  });
}

async function userDelete(id, btn) {
  if (confirm("Are you sure you want to delete?")) {
    btn.closest("th");
    await axios.delete(`${BASE_URL}/products/${id}`);
  }
}

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawTable(filtered);
  console.log(filtered);
});
