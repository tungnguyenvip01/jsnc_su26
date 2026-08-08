axios.get("http://localhost:3000/products").then((res) => {
  console.log(res.data);
  const html = res.data
    .map((sinhvien) => {
      return `
    <tr>
    <td>${sinhvien.id}</td>
    <td>${sinhvien.name}</td>
    <td>${sinhvien.price}</td>
    <td>${sinhvien.email}</td>
    </tr>
    `;
    })
    .join("");
  document.getElementById("student-list").innerHTML = html;
});
