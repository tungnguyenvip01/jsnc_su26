console.log("javascript");
let name = "tungnt"; // string
const age = 22; // number
let money = 100;
let isStuding = true; // boolean

money = 50;

const yearCong = 2004;
console.log(name);

// alert("Xin chào JavaScript"); // sau them thanh cong, co loi xay ra
// thay doi du lieu HTML: innerHTML


const h11 = document.getElementById("title1").innerHTML = "Danh sách sản phẩm";
console.log(h11);
const th1 = document.getElementById("11").innerHTML = "1";
console.log(th1);
const th2 = document.getElementById("1").innerHTML = "Tùng";
console.log(th2);



const h1 = document.getElementById("title");
console.log(h1);
const title = "Laptop - Mobile";
// ``  dấu cạnh số 1, ${}
h1.innerHTML = `Danh sách sản phẩm ${title}`;

// object
const student = {
  name: "tungnt",
  age: 22,
  isStudent: true,
};
console.log(student.name);
h1.innerHTML = `Danh sách sinh viên ${student.name}`;

const book = {
  title: "Hoa vàng trên cỏ xanh",
  author: "Nguyễn Nhật Anh",
  cover: " ",
  year: 1999,
};
document.getElementById("titleBook").innerHTML = book.title;
document.getElementById("titleBook").innerHTML = `Tên cuốn sách ${book.title}`;