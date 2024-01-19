let tBody = document.querySelector("tBody");
const searchInput = document.querySelector(".searchInput");
const BASE_URL = "http://localhost:8030";
let arr;

async function getData(endPoint) {
  const resp = await axios(`${BASE_URL}/${endPoint}`);
  drawTable(resp.data);
  arr = resp.data;
}

getData("menus");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
         <th>${element.photo}</th>
         <th>${element.name}</th>
         <th>${element.description}</th>
         <th>${element.price}</th>
         <th class = "tableBtn">
          <a href="./form.html?id=${element.id}"><button class="editBtn">Edit</button></a>
          <button class="deleteBtn" onclick=menuDelete("${element.id}",this)>Delete</button>
        </th>
    </tr>
    `;
  });
}

async function menuDelete(id, btn) {
  if (confirm("Silmek istediyinize eminsiniz?")) {
    btn.closest("th");
    await axios.delete(`${BASE_URL}/menus/${id}`);
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
