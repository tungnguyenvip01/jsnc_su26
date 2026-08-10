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




/*axios.get("http://localhost:3000/products").then((res) => {
  console.log(res.data);
  const html = res.data
    .map((sinhvien) => {
      return `
    <tr class="hover:bg-gray-50">
    <td class="px-4 py-2 border border-gray-300">${sinhvien.id}</td>
    <td class="px-4 py-2 border border-gray-300">${sinhvien.name}</td>
    <td class="px-4 py-2 border border-gray-300">${sinhvien.price}</td>
    <td class="px-4 py-2 border border-gray-300">${sinhvien.email}</td>
    </tr>
    `;
    })
    .join("");
  document.getElementById("student-list").innerHTML = html;
});*/
function loadStudents(){
axios.get("http://localhost:3000/students").then((hoc)=>{
  console.log(hoc.data);
  const html=hoc.data
  .map((js)=>{
    return `
 <tr>
            <td class="px-4 py-2 border border-gray-300">${js.id}</td>
            <td class="px-4 py-2 border border-gray-300">${js.name}</td>
            <td class="px-4 py-2 border border-gray-300">${js.age}</td>
            <td class="px-4 py-2 border border-gray-300">${js.email}</td>
            <td class="px-4 py-2 border border-gray-300">
              <button style= color: white; padding: 10px 20px; border: none; border-radius: 5px;" onclick="deleteStudent(${js.id})">
                Xóa
              </button>
            </td>
          </tr>
    `;
  })
  .join("");

    document.getElementById("student-list").innerHTML = html;
})}

function deleteStudent(id) {
  const result = confirm("Bạn có chắc chắn muốn xóa không?");

  if (result) {
    axios.delete(`http://localhost:3000/students/${id}`).then(() => {
      loadStudents();
    });
  }
}
loadStudents();