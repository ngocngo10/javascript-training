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
    this.bookList.classList.toggle('spinner-border');
    if (books.length) {
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
    } else {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 6;
      td.innerHTML = 'No records found';
      tr.appendChild(td);
      this.bookList.appendChild(tr);
    }

  }

  /**
   * Use the book id to remove row contain that book in table
   * @param {string} id 
   */
  removeBook(id) {
    const removedElement = document.getElementById(id);
    let el = removedElement.nextElementSibling;

    while (el) {
      el.firstElementChild.innerHTML = parseInt(el.firstElementChild.innerHTML) - 1;
      el = el.nextElementSibling;
    }

    this.bookList.removeChild(removedElement);
    removedElement.remove();
  }

  /**
   * Take the message to notice ò actions is failed 
   * @param {string} str 
   */
  alertMess(str) {
    alert(str);
  }

  /**
   * Add event edit and delete book
   */
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

  /**
   * Add event confirm deleting book
   * @param {function} handleConfirmDeleteBook 
   */
  bindConfirmDeleteBook(handleConfirmDeleteBook) {
    this.btnModalDelete.addEventListener('click', () => {
      const deletedBookId = this.btnModalDelete.dataset.id;
      handleConfirmDeleteBook(deletedBookId);
    })
  }
}
