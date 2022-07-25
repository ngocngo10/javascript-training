export class HomeView {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.btnModalDelete = document.getElementById('btn-modal-delete');
    this.btnModalCancel = document.getElementById('btn-modal-cancel');
    this.deleteModal = document.getElementById('delete-modal');
  }

  /**
   * Use the books array to show on the home page
   * @param {array} books 
   */
  showBookList(books) {
    if (books.length) {
      let count = 0;
      books.forEach((book) => {
        const bookItem = document.createElement('tr');
        bookItem.id = book.id;
        const bookId = document.createElement('td');
        count = count + 1;
        bookId.textContent = count;

        const bookCover = document.createElement('td');
        const bookCoverLink = document.createElement('a');
        bookCoverLink.classList.add('book-cover-link');
        const bookCoverImg = document.createElement('img');
        bookCoverImg.src = book.cover;
        bookCoverImg.alt = 'Book cover';
        bookCoverImg.classList.add('book-cover');
        bookCover.appendChild(bookCoverLink);
        bookCoverLink.appendChild(bookCoverImg);

        const bookName = document.createElement('td');
        bookName.textContent = book.name;

        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = book.author;

        const bookEdition = document.createElement('td');
        const editBtn = document.createElement('button');
        const editBtnImage = document.createElement('img');
        editBtnImage.src = require('../../assets/images/edit-icon.svg');
        editBtnImage.alt = 'Edit Icon';
        editBtnImage.classList.add('edit-btn__img');
        bookEdition.appendChild(editBtn);
        editBtn.appendChild(editBtnImage);

        const bookDeletion = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.dataset.toggle = 'modal';
        deleteBtn.dataset.target = '#delete-modal';
        const deleteBtnImage = document.createElement('img');
        deleteBtnImage.src = require('../../assets/images/delete-icon.svg');
        deleteBtnImage.alt = 'Delete Icon';
        deleteBtnImage.classList.add('delete-btn__img');
        bookDeletion.appendChild(deleteBtn);
        deleteBtn.appendChild(deleteBtnImage);

        bookItem.append(bookId, bookCover, bookName, bookAuthor, bookEdition, bookDeletion);
        this.bookList.appendChild(bookItem);
      })
    }
  }

  /**
   * Use the book id to remove row contain that book in table
   * @param {string} id 
   */
  removeBook(id) {
    const removedElement = document.getElementById(id);
    let el = removedElement.nextSibling;

    while (el) {
      console.log(el);
      el.firstChild.textContent = parseInt(el.firstChild.textContent) - 1;
      el = el.nextSibling;
    }

    this.bookList.removeChild(removedElement);
    removedElement.remove();
  }

  alertMess () {
    alert('Delete book failed!');
  }

  bindBookActions() {
    this.bookList.addEventListener('click', (event) => {
      if (event.target.className == 'delete-btn__img') {
        this.btnModalDelete.dataset.id = event.target.parentElement.parentElement.parentElement.id;
      }
      if (event.target.className == 'edit-btn__img') {
        const bookId = event.target.parentElement.parentElement.parentElement.id;
        window.location.href = `/update-book?id=${bookId}`;
      }
    })
  }

  bindConfirmDeleteBook(handleConfirmDeleteBook) {
    this.btnModalDelete.addEventListener('click', () => {
      const deletedBookId = this.btnModalDelete.dataset.id;
      handleConfirmDeleteBook(deletedBookId);
    })
  }
}
