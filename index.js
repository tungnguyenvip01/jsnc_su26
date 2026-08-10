function loadBooks(){
  axios.get("http://localhost:3000/books").then((res)=>{
    console.log(res.data);
    const html=res.data
    .map((books)=>{
      return`
      <tr>
          <td class="px-4 py-2 border border-gray-300">${books.id} </td>
          <td class="px-4 py-2 border border-gray-300">${books.title} </td>
          <td class="px-4 py-2 border border-gray-300">${books.author} </td>
          <td class="px-4 py-2 border border-gray-300">${books.price} </td>     
          <td> <button onclick=" deleteBooks(${books.id})"> Xóa  </button> </td>  
      </tr>
      `;
     
    })
    .join("");

    document.getElementById("book-list").innerHTML = html;

  })}
function deleteBooks(id){
  const result = confirm("Bạn có chắc muốn xóa không");
  if (result){
    axios.delete(`http://localhost:3000/books/${id}`).then(() => {
loadBooks();
    })
  }
}
loadBooks();