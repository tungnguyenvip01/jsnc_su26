const id = new URLSearchParams(window.location.search).get("id");

if (id) {
  axios
    .get(`http://localhost:3000/courses/${id}`)
    .then((res) => {
      // console.log(res.data);
      document.getElementById("name").value = res.data.name;
      document.getElementById("teacher").value = res.data.teacher;
      document.getElementById("price").value = res.data.price;
      document.getElementById("category").value = res.data.category;
    })
    .catch(() => {
      alert("error");
    });
}
// Sửa từ "form-add" thành "form-edit" khớp với file HTML
document.getElementById("form-edit").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const teacher = document.getElementById("teacher").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  axios
    .put(`http://localhost:3000/courses/${id}`, {
      name: name,
      teacher: teacher,
      price: price,
      category: category,
    })
    .then(() => {
      window.location.href = "index.html";
      alert("update thanh cong");
      
    });
});