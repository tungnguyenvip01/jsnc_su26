document.getElementById("form-add").addEventListener("submit", (e) =>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const teacher = document.getElementById("teacher").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  axios
  .post("http://localhost:3000/courses", {
    name: name,
    teacher: teacher,
    price: Number(price),
    category: category,
  })
  .then((res)=>{
    location.replace("index.html");
    alert("thêm thành công");
    
  })
  
});