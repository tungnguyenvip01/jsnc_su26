function loadcourses(){
  axios.get(" http://localhost:3000/courses").then((res) =>{
    const html = res.data
    .map((course) =>{
      return `
      <tr>
        <td class="px-4 py-2 border border-gray-300">${course.id}</td>
        <td class="px-4 py-2 border border-gray-300">${course.name}</td>
        <td class="px-4 py-2 border border-gray-300">${course.teacher}</td>
        <td class="px-4 py-2 border border-gray-300">${course.price}</td>
        <td class="px-4 py-2 border border-gray-300">${course.category}</td>
        <td class="px-4 py-2 border border-gray-300"> 
          <div>
          <button onclick="deletecourses(${course.id})" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Xóa</button>
          <button onclick="goToEdit(${course.id})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Sửa</button>
        </div>
        </td>
      </tr>
      `;
    })
      .join("");
    document.getElementById("movie-list").innerHTML = html;
  })
}
loadcourses();

function deletecourses(id){
  const result = confirm("Bạn có chắc muốn xóa không?");
  if (result){
    axios.delete(`http://localhost:3000/courses/${id}`).then(()=>{
      loadcourses();
    });
  }
}
function goToEdit(id){
  window.location.href = `edit.html?id=${id}`;
}