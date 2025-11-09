const books = [];

const bookList = document.getElementById("book-list");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const btn = document.getElementById("submit");

// Function to render all books
function renderBooks() {
  bookList.innerHTML = ""; // Clear table before re-rendering
  books.forEach((book,index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
	  <td><button class="delete">*</button></td>
    `;
 row.querySelector(".delete").addEventListener("click", () => {
      books.splice(index, 1); // Remove book from array
      renderBooks(); // Re-render table
    });
	  
    bookList.appendChild(row);
  });
}

// Add new book
function addBook(event) {
  event.preventDefault(); // Prevent page reload
  books.push({
    title: title.value,
    author: author.value,
    isbn: isbn.value
  });

  renderBooks(); // Update table
  // Clear inputs
  title.value = "";
  author.value = "";
  isbn.value = "";
}

// Event listener
btn.addEventListener("click", addBook);

// Initial render
renderBooks();
