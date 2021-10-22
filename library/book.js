let myLibrary = [];

$titleInput = document.getElementById('title');
$authorInput = document.getElementById('author');
$pagesInput = document.getElementById('pages');
$readInput = document.getElementById('read');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? 'read' : 'not read';
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  }
}

function addBookToLibrary() {
  let newBook = new Book($titleInput.value, 
                          $authorInput.value, 
                          $pagesInput.value, 
                          $readInput.checked);
  console.log(newBook);
  myLibrary.push(newBook);
  updateTable();
  toggleHidden();
  clearForm();
}

function updateTable() {
  let table = document.getElementById('bookListTable');
  table.textContent = '';
  myLibrary.forEach(book => {
    let row = table.insertRow();
    let title = row.insertCell();
    title.innerHTML = book.title;
    let author = row.insertCell();
    author.innerHTML = book.author;
    let pages = row.insertCell();
    pages.innerHTML = book.pages;
    let read = row.insertCell();
    read.innerHTML = book.read;
  });
  addStorage();
}

function clearForm() {
  $titleInput.value = '';
  $authorInput.value = ''; 
  $pagesInput.value = ''; 
  $readInput.checked = false;
}

function toggleHidden() {
  let addBook = document.getElementById('addBook');
  let bookList = document.getElementById('bookList');
  addBook.toggleAttribute('hidden');
  bookList.toggleAttribute('hidden');
}

function addStorage() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

function getStorage() {
  myLibrary = JSON.parse(localStorage.getItem('library'));
}

if(!localStorage.getItem('library')) {
  addStorage();
} else {
  getStorage();
  updateTable();
}