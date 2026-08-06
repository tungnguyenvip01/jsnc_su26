const tbody = document.getElementById("student");
console.log(tbody);

const student = {
  name: "Nguyễn Thanh Tùng",
  age: 20,
  email: "boy@gmail.com",
  major: "CNTT",
};

document.getElementById("student").innerHTML = `
<tr>
  <td>${student.age}</td>
  <td>${student.name}</td>
  <td>${student.email}</td>
  <td>${student.major}</td>
 </tr>
`;