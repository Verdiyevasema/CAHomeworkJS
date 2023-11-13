let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//TASK 1:
// let array = new Array();
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].name[0].toLowerCase() === "t") {
//     array.push(arr[i]);
//   }
// }
// console.log(array);

//TASK 2:
// let count = 0;

// arr.forEach((item) => {
//   if (item.name[0].toLowerCase() === "t" && item.name.slice(-1) === "t") {
//     count++;
//   }
// });
// console.log(count);

//TASK 3:
// let key = 0;
// arr.forEach((item) => {
//   if (item.name[0].toLocaleLowerCase() === "t" && item.name.slice(-1) === "t") {
//     key += item.key;
//   }
// });
// console.log(key);

//TASK 4:
// arr.forEach((item) => {
//   if (item.name.slice(-1).toLocaleLowerCase() === "e") {
//     item.name = "SuperDev";
//   }
// });
// console.log(arr);

//TASK 5:
// let lengthy = arr[0];
// arr.forEach((item) => {
//   if (item.name.length > lengthy.name.length) {
//     lengthy = item;
//   }
// });
// console.log(lengthy);

//TASK 6:
// let lengthy = arr[0];
// arr.forEach((item) => {
//   if (item.name.length > lengthy.name.length) {
//     lengthy = item;
//   }
// });
// let key = lengthy.key;
// console.log(key);

//TASK 11:
// let objects = arr.filter((obj) => {
//   return obj.name.toLocaleLowerCase().split("t").length - 1 >= 2;
// });
// console.log(objects);
