const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-content-form");
const addBookBtn = document.querySelector(".addBook");
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
}
Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
 
}

//function to clear the form once an input has been recorded
function clearForm() {
    modalForm.reset();
}


// fun to check redundancy of books 
function bookExistsInLibrary(book) {
    return myLibrary.some(existingBook =>
        existingBook.title === book.title &&
        existingBook.author === book.author &&
        existingBook.pages === book.pages);
}


// fun to render the book card on the page
function render() {
    let libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let bookObj = myLibrary[i];
        let bookCard = document.createElement('div');
        libraryContainer.appendChild(bookCard);
        bookCard.classList.add("bookDisplay");
        bookCard.innerHTML = `
            <div class="info bk-name">${bookObj.title}</div>
            <div class="info author-name">${bookObj.author}</div>
            <div class="info">${bookObj.pages}</div>
            <div class="utility-btns">
                <button class ="read-btn" onclick ="toggleRead(${i})">${bookObj.read ? "Read" : "Not Read"}</button>
                <button class ="remove-btn" onclick="removeBook(${i})">Remove</button>
            </div>
        `;
    }

}
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}


//fun to store all the info from the form to array
function storeBook(event) {
    event.preventDefault();//prevents the default form submitting behavior causing the page to reload
    let bookName = nameOfBook.value;
    let authorName = nameofAuthor.value;
    let numberOfPages = pages.value;
    let readStatus = readCheckBox.checked;
    console.log(readStatus)
    if (bookName != '' && authorName != '' && numberOfPages != '') {
        const bk = new Book(bookName, authorName, numberOfPages, readStatus);
        if (bookExistsInLibrary(bk) == false) {
            myLibrary.push(bk);
        }
        else {
            alert("book already present int lib");
        }
    }
    render();
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

// Adding a click event listener to the window object
window.onclick = function (event) {
    // Checking if the clicked element is the same as the modal element
    if (event.target == modal) {
        // If the condition is true, hide the modal by changing its display style
        modal.style.display = "none";
        clearForm();
    }
}
submitBtn.addEventListener('click', storeBook);
submitBtn.addEventListener('click', clearForm);
submitBtn.addEventListener('click', closeModal);

