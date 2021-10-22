function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  }
}

var book1 = new Book("Dune", "Frank Herbert", 324, "not read");

console.log(book1.info());