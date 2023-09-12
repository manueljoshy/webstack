function fetchBooks() {
    $.ajax({
      url: "booklist.json",
      dataType: "json",
      success: function(data) {
        displayBooks(data);
      }
    });
  }
  
  function displayBooks(data) {
    var bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
  
    for (var i in data) {
      var book = data[i];
      var bookDiv = document.createElement("div");
      bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.genre}</p>
      `;
      bookList.appendChild(bookDiv);
    }
  }
  
  $(document).ready(function() {
    $("#fetchBooks").click(fetchBooks);
  });