console.log("add them");
const params = new URLSearchParams(window.location.search)
console.log(params)
const id = params.get("id")
console.log(id)
// addStudent();
document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
console.log (name, age)
  axios
    .put(`http://localhost:3000/students/${id}`, {
      name: name,
      age: age,
      email: "tungnt@gmail.com",
    })
    .then(() => {
      alert("them thanh cong");
    });
});