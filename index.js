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
              <button onclick="deleteStudent(${js.id})">
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
