function loadStudents() {
  axios.get("http://localhost:3000/students").then((res) => {
    const html = res.data
      .map(
        (student) => `
          <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>
              <button onclick="deleteStudent(${student.id})">
                Xóa
              </button>
            </td>
          </tr>
        `,
      )
      .join("");

    document.getElementById("student-list").innerHTML = html;
  });
}

function deleteStudent(id) {
  const result = confirm("Bạn có chắc chắn muốn xóa không?");

  if (result) {
    axios.delete(`http://localhost:3000/students/${id}`).then(() => {
      loadStudents();
    });
  }
}

loadStudents();