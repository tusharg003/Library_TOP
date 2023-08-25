const nameOfBook = document.querySelector('#title');
const pages = document.querySelector('#pages');
const nameofAuthor = document.querySelector('#author');
const readStatus = document.querySelector('#readCheckBox');
const submitBtn = document.querySelector('.submit');
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    let status = (read) ? "read" : "not read";
    this.info = function () {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${status}.`;
    }
}
// const bk1 = new Book("To kill the mocking bird", 'Tushar Gupta', '373', false);
// console.log(bk1.info());

function addBookToLibrary() {

}

// function storeBook() {
//     let bookName = nameOfBook.value;
//     let authorName = nameofAuthor.value;
//     let numberOfPages = pages.value;
//     if (bookName != '' && authorName != '' && numberOfPages != ''){
//         const bk=new Book(bookName,authorName,numberOfPages,)
//     }
// }
console.log(readStatus.value);
submitBtn.addEventListener('click', storeBook);

