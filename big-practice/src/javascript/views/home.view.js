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
    let count = 0;
    let bookItemTemplate = '';
    books.forEach((book) => {
      count = count + 1;
      const editIcon = require('../../assets/images/edit-icon.svg');
      const deleteIcon = require('../../assets/images/delete-icon.svg');
      bookItemTemplate += `                   
      <tr id="${book.id}">
        <td>${count}</td>
        <td>
          <a href="javascript:void(0)">
            <img src="${book.cover}" class="book-cover" alt="Book cover">
          </a>
        </td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td><button> <img src="${editIcon}" alt="Edit Icon" class="edit-btn__img"></a></button></td>
        <td><button><img src="${deleteIcon}" alt="Delete Icon" class="delete-btn__img" data-toggle="modal" data-target="#delete-modal"></button></td>
    </tr>`
      this.bookList.innerHTML = bookItemTemplate;
    })
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

  alertMess(str) {
    alert(str);
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
