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
}

function addBookToLibrary() {
  let newBook = new Book($titleInput.value, 
                          $authorInput.value, 
                          $pagesInput.value, 
                          $readInput.checked);
  let valid = validateBook(newBook);
  if (valid) {
    myLibrary.push(newBook);
    updateTable();
    clearForm();
    toggleHidden();
  }
}

function validateBook(book) {
  let errorList = [];
  Object.keys(book).forEach(property => {
    if (book[property] == "") {
      errorList.push(property);
    }
  });
  if (errorList.length > 0) {
    alert(`Missing: ${errorList}`);
    return false;
  }
  return true;
}

function updateTable() {
  let table = document.getElementById('bookListTable');
  table.textContent = '';
  myLibrary.forEach((book, index) => {
    let row = table.insertRow();
    Object.keys(book).forEach(property => {
      let newCell = document.createElement('td');
      newCell.textContent = book[property];
      row.appendChild(newCell);
    });
    row.appendChild(newToggleButton(book));
    row.appendChild(newDeleteButton(index));
  });
  addStorage();
}

function newDeleteButton(index) {
  let deleteCell = document.createElement('td');
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    myLibrary.splice(index, 1);
    updateTable();
  });
  deleteCell.appendChild(deleteButton);
  return deleteCell;
}

function newToggleButton(book) {
  let toggleCell = document.createElement('td');
  let toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Read';
  toggleButton.addEventListener('click', () => {
    book.read = (book.read == 'read') ? 'not read' : 'read';
    updateTable()
  });
  toggleCell.appendChild(toggleButton);
  return toggleCell;
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