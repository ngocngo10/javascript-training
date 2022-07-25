export class UpdateBookView {
  constructor() {
    this.updateBookBtn = document.getElementById('update-btn');
    this.cancelBtn = document.getElementById('cancel-btn');
    this.bookName = document.getElementById('book-name');
    this.author = document.getElementById('author');
    this.coverLink = document.getElementById('cover-link');
    this.category = document.getElementById('category');
    this.description = document.getElementById('description');
    this.bookNameMess = document.getElementById('book-name-mess');
    this.authorMess = document.getElementById('author-mess');
    this.coverLinkMess = document.getElementById('cover-link-mess');
    this.categoryMess = document.getElementById('category-mess');
    this.descriptionMess = document.getElementById('description-mess');
    this.coverImage = document.getElementById('cover-image');
  }

  /**
   * Get the book id from the querystring part of a URL
   * @returns {string} book id
   */
  getBookId() {
    const bookId = window.location.search.replace('?id=', '');
    return bookId;
  }

  /**
   * Get the book information to show on update form
   * @param {object} book 
   */
  showBookById(book) {
    if (book) {
      this.bookName.value = book.name;
      this.author.value = book.author;
      this.coverLink.value = book.cover;
      this.category.value = parseInt(book.category);
      this.description.value = book.description;
      this.coverImage.src = book.cover;
    }
  }

  /**
   * Use the categories array to show on the updatings book page
   * @param {array} categories 
   */
  showCategories(categories) {
    if (categories.length) {
      categories.forEach((category) => {
        const categoryItem = document.createElement('option');
        categoryItem.value = category.id;
        categoryItem.innerText = category.categoryName;
        this.category.appendChild(categoryItem);
      })
    }
  }

  /**
   * Redirect to home page from the update book page
   */
  redirectHomePage() {
    window.location.href = './index.html';
  }

  /**
   * Take the message to notice of updating book is failed 
   */
  alertMess() {
    alert('Update book failed!');
  }

  /**
   * Show the book cover image when remove focus from the text input contains cover link
   */
  bindShowImage() {
    this.coverLink.addEventListener('blur', () => {
      this.coverImage.src = this.coverLink.value;
    })
  }

  /**
   * Redirect to the home page from the updating book page when click the cancel button
   */
  bindCancelUpdateBook() {
    this.cancelBtn.addEventListener('click', () => {
      this.redirectHomePage();
    })
  }

  /**
   * Validate form and get the book information to upate book
   * @param {function} handleUpdateBook 
   */
  bindUpdateBook(handleUpdateBook) {
    this.updateBookBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.bookName.value === '') {
        this.bookNameMess.firstElementChild.style.display = 'block';
      } else  if (this.bookName.value.length >= 30){
        this.bookNameMess.firstElementChild.style.display = 'none';
        this.bookNameMess.lastElementChild.style.display = 'block';
      } else {
        this.bookNameMess.firstElementChild.style.display = 'none';
        this.bookNameMess.lastElementChild.style.display = 'none';
      }

      if (this.author.value === '') {
        this.authorMess.firstElementChild.style.display = 'block';
      } else  if (this.author.value.length >= 30){
        this.authorMess.firstElementChild.style.display = 'none';
        this.authorMess.lastElementChild.style.display = 'block';
      } else {
        this.authorMess.firstElementChild.style.display = 'none';
        this.authorMess.lastElementChild.style.display = 'none';
      }

      if (this.coverLink.value === '') {
        this.coverLinkMess.style.display = 'block';
      } else {
        this.coverLinkMess.style.display = 'none';
      }

      if (this.category.value === '') {
        this.categoryMess.style.display = 'block';
      } else {
        this.categoryMess.style.display = 'none';
      }

      if (this.description.value === '') {
        this.descriptionMess.firstElementChild.style.display = 'block';
      } else  if (this.description.value.length >= 150){
        this.descriptionMess.firstElementChild.style.display = 'none';
        this.descriptionMess.lastElementChild.style.display = 'block';
      } else {
        this.descriptionMess.firstElementChild.style.display = 'none';
        this.descriptionMess.lastElementChild.style.display = 'none';
      }
      if (this.bookName.value && this.bookName.value.length < 30 && this.author.value && this.author.value.length < 30 && this.coverLink.value && this.category.value && this.description.value && this.description.value.length < 150) {
        const body = {
          name: this.bookName.value,
          author: this.author.value,
          cover: this.coverLink.value,
          category: this.category.value,
          description: this.description.value
        }
        const bookId = this.getBookId();
        handleUpdateBook(body, bookId);
      }
    })
  }

}
