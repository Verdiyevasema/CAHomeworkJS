// TASK 1: Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.
// let numbers = [12, 7, 3, 9, 6, 15, 8];
// for (let i=0; i<numbers.length; i++) {
//   numbers[i] = numbers[i] * numbers[i];
//   console.log(numbers[i]);
// }




// TASK 3: Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.
// let numbers = [12, 7, 3, 9, 6, 15, 8];
// let minIndex = 0;
// for (let i = 1; i<numbers.length; i++) {
//   if (numbers[i]<numbers[minIndex]) {
//     minIndex = i;
//   }
// }
// console.log(minIndex);





// TASK 4: Ortalama maaşı 65000-dən çox olan departamentləri çapa verən program tərtib edin.
//   const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
//   ];

// for (let i=0; i<employees.length; i++) {
//   if (employees[i].salary>65000) {
//     console.log(employees[i].department);
//   }
// }





// TASK 5: Ortalama maaşı 65000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// for (let i=0; i<employees.length; i++) {
//   if (employees[i].salary>=65000 && employees[i].department === "IT") {
//     console.log(employees[i]);
//   }
// }





// TASK 6: Sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// let arr = new Array();
// for (let i=0; i<employees.length; i++) {
//   if (employees[i].department === "HR") {
//     arr = employees[i];
//     console.log(arr);
//   }
// }





// TASK 7: Ölkələrin neçə hərfdən ibarət olduğunu çap edən proqram yazırsınız. Cavab konsolda bu şəkildə olmalıdır:
// let countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Brazil",
//   "British Virgin Islands",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Estonia",
//   "Ethiopia",
//   "Falkland Islands",
//   "Faroe Islands"
// ];

// for (let i=0; i<countries.length; i++) {
// let countriesnamee=countries[i];
// console.log(`${countriesnamee}-${countriesnamee.length}`);
// }


