// const allInputs = document.querySelectorAll("input");
// const btn = document.querySelector(".btn");
// const inputs = document.querySelectorAll(".form-control");
// const form = document.querySelector("form");
// const id = new URLSearchParams(window.location.search).get("id");
// let BASE_URL = "http://localhost:8030";
// let editId = null;
// form.addEventListener("submit", async function (event) {
//   event.preventDefault();
//   let obj = {
//     name: inputs[0].value,
//     description: inputs[1].value,
//     price: inputs[2].value,
//   };
//   if (!editId) {
//     if (
//       inputs[0].value != "" &&
//       inputs[1].value != "" &&
//       inputs[2].value != ""
//     ) {
//       await axios.post(`${BASE_URL}/menus`, obj);
//     } else {
//       alert("Bos saxlamaq olmaz.");
//     }
//   } else {
//     await axios.patch(`${BASE_URL}/menus/${editId}`, obj);
//   }
// });

// async function userEdit(id, btn) {
//   editId = id;
//   const res = await axios(`${BASE_URL}/menus/${id}`);
//   inputs[0].value = res.data.name;
//   inputs[1].value = res.data.description;
//   inputs[2].value = res.data.price;
// }


const allInputs = document.querySelectorAll('input');
const tbody = document.querySelector('tbody');
const form = document.querySelector('form');
const sortBtn = document.querySelector('.sortBtn');

let editId = null;
let data = [];

const BASE_URL = 'http://localhost:8080';

async function getAllData() {
	try {
		const res = await axios(`${BASE_URL}/menu`);
		console.log(res.data);
		data = res.data;
		drawTable(res.data);
	} catch (err) {
		console.log(err);
	}
}

getAllData();

form.addEventListener('submit', async function (e) {
	e.preventDefault();

	let obj = {
		name: allInputs[0].value,
		price: allInputs[1].value,
		description: allInputs[2].value,
		images: allInputs[3].value,
	};

	if (!editId) {
		let res = await axios.post(`${BASE_URL}/menu`, obj);
		drawTable(res.data);
	} else {
		axios.patch(`${BASE_URL}/menu/${editId}`, obj);
	}
});
function drawTable(tableData) {
	console.log(tableData);
	tbody.innerHTML = '';

	tableData.forEach((el) => {
		// console.log(el);
		tbody.innerHTML += `
        <tr>
            <td>${el.id}</td>
            <td><img src="${el.images}" alt=""></td>
            <td>${el.name}</td>
            <td>${el.description}</td>
            <td>${el.price}</td>
            <td>
                <button>Delete</button>
                <a href="#">Edit</a>
            </td>
        </tr>
        `;
	});
}

sortBtn.addEventListener('click', function () {
	let sorted = [];
	if (this.innerText === 'Ascending') {
		sorted = data.sort((a, b) => a.price - b.price);
		this.innerText = 'Descending';
	} else if (this.innerText === 'Descending') {
		sorted = data.sort((a, b) => b.price - a.price);
		this.innerText = 'Ascending';
	}
	drawTable(sorted);
});


