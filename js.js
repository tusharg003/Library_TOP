const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-content-form");
const addBookBtn = document.querySelector(".addBook");
const closeModalBtn = document.querySelector(".close");
const nameOfBook = document.querySelector('#title');
const pages = document.querySelector('#pages');
const nameofAuthor = document.querySelector('#author');
const readCheckBox = document.querySelector('#readCheckBox');
const submitBtn = document.querySelector('.submit');
const myLibrary = [];

//object constructor
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
//function to clear the form once an input has been recorded
function clearForm() {
    modalForm.reset();
}


//modal opening and closing 
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
//open the modal
addBookBtn.addEventListener('click', openModal);
//close the modal
closeModalBtn.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', clearForm);
// Adding a click event listener to the window object
window.onclick = function (event) {
    // Checking if the clicked element is the same as the modal element
    if (event.target == modal) {
        // If the condition is true, hide the modal by changing its display style
        modal.style.display = "none";
        clearForm();
    }
}


//fun to store all the info from the form to array
function storeBook(event) {
    event.preventDefault();//prevents the default form submitting behavior causing the page to reload
    let bookName = nameOfBook.value;
    let authorName = nameofAuthor.value;
    let numberOfPages = pages.value;
    let readStatus = readCheckBox.checked;
    if (bookName != '' && authorName != '' && numberOfPages != '') {
        const bk = new Book(bookName, authorName, numberOfPages, readStatus);
        console.log(bk);
        myLibrary.push(bk);
    }
    // console.log(readStatus.checked);

}
submitBtn.addEventListener('click', storeBook);
submitBtn.addEventListener('click', clearForm);

