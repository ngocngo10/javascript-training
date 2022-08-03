import constants from '../../utils/constants';

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
    this.formContentRight = document.getElementById('form-content-right');
  }

  /**
   * Get the book id from the querystring part of a URL
   * @returns {string} book id
   */
  getBookId() {
    const id = window.location.search.replace('?id=', '');
    return id;
  }

  /**
   * Get the book information from the id of book
   */
  getBookById() {
    const id = this.getBookId();
    const bookList = JSON.parse(localStorage.getItem('bookList'));
    const book = bookList.find(book => book.id === id);
    return book
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
  alertMess(str) {
    alert(str);
  }

  /**
 * Check if a string is not empty
 * @param {string} str 
 * @returns {boolean}
 */
  isNotEmptyText(str) {
    return constants.notEmptyStringPattern.test(str)
  }

  /**
   * Check if a string in input element is formated
   * @param {string} str 
   * @returns {boolean}
   */
  isFormatText(str) {
    return constants.textLengthPattern.test(str)
  }

  /**
   * Check if a string in textarea element is formated
   * @param {string} str 
   * @returns {boolean}
   */
  isFormatLargeText(str) {
    return constants.largeTextlengthPattern.test(str)
  }

  /**
   * Check if a string is the image url
   * @param {string} str 
   * @returns {boolean}
   */
  isImageURL(str) {
    return constants.imageUrlPattern.test(str)
  }

  /**
   * Show message when a string is empty
   * @param {document object} messElement 
   */
  showEmptyErrorMess(messElement) {
    messElement.firstElementChild.style.display = 'block';
    messElement.lastElementChild.style.display = 'none';
  }

  /**
   * Show message when a string is invalid
   * @param {document object} messElement 
   */
  showUnformatErrorMess(messElement) {
    messElement.firstElementChild.style.display = 'none';
    messElement.lastElementChild.style.display = 'block';
  }

  /**
   * Hide message when a string is valid
   * @param {document object} messElement 
   */
  hideErrorMess(messElement) {
    messElement.firstElementChild.style.display = 'none';
    messElement.lastElementChild.style.display = 'none';
  }

  /**
   * Validate for the book name
   * @returns {boolean}
   */
  isValidName() {
    const bookName = this.bookName.value;
    const nameMessEle = this.bookNameMess;
    if (!this.isNotEmptyText(bookName)) {
      this.showEmptyErrorMess(nameMessEle);
      return false;
    } else if (!this.isFormatText(bookName)) {
      this.showUnformatErrorMess(nameMessEle);
      return false;
    } else {
      this.hideErrorMess(nameMessEle);
      return true;
    }
  }

  /**
   * Validate for author of book
   * @returns {boolean}
   */
  isValidAuthor() {
    const author = this.author.value;
    const authorMessEle = this.authorMess;
    if (!this.isNotEmptyText(author)) {
      this.showEmptyErrorMess(authorMessEle);
      return false;
    } else if (!this.isFormatText(author)) {
      this.showUnformatErrorMess(authorMessEle);
      return false;
    } else {
      this.hideErrorMess(authorMessEle);
      return true;
    }
  }

  /**
   * Validate for the cover link
   * @returns {boolean}
   */
  isValidCoverLink() {
    const coverLink = this.coverLink.value;
    const coverMessEle = this.coverLinkMess;
    if (!this.isNotEmptyText(coverLink)) {
      this.showEmptyErrorMess(coverMessEle);
      return false;
    } else if (!this.isImageURL(coverLink)) {
      this.showUnformatErrorMess(coverMessEle);
      return false;
    } else {
      this.hideErrorMess(coverMessEle);
      return true;
    }
  }

  /**
   * Validate for the category of book
   * @returns {boolean}
   */
  isValidCategory() {
    const category = this.category.value;
    const categoryMessElement = this.categoryMess;
    if (!this.isNotEmptyText(category)) {
      this.showEmptyErrorMess(categoryMessElement);
      return false;
    } else {
      this.hideErrorMess(categoryMessElement);
      return true;
    }
  }

  /**
   * Validate for the description of book
   * @returns {boolean}
   */
  isValidDescription() {
    const description = this.description.value;
    const descMessEle = this.descriptionMess;
    if (!this.isNotEmptyText(description)) {
      this.showEmptyErrorMess(descMessEle);
      return false;
    } else if (!this.isFormatLargeText(description)) {
      this.showUnformatErrorMess(descMessEle);
      return false;
    } else {
      this.hideErrorMess(descMessEle);
      return true;
    }
  }

  /**
   * Validate for the create book form
   * @returns {boolean}
   */
  isValidForm() {
    const isValidName = this.isValidName();
    const isValidAuthor = this.isValidAuthor();
    const isValidCoverLink = this.isValidCoverLink();
    const isValidCategory = this.isValidCategory();
    const isValidDescription = this.isValidDescription();

    const isValid = isValidName && isValidAuthor && isValidCoverLink && isValidCategory && isValidDescription;

    return isValid;
  }

  bindValidateFormFields() {
    this.formContentRight.addEventListener('keyup', (event) => {
      if (event.target.id === 'book-name') {
        this.isValidName();
      }
      if (event.target.id === 'author') {
        this.isValidAuthor();
      }
      if (event.target.id === 'cover-link') {
        const isValid = this.isValidCoverLink();
        if (isValid) {
          this.coverImage.src = this.coverLink.value;
        } else {
          const currId = this.getBookId();
          const currBook = this.getBookById(currId);
          this.coverImage.src = currBook.cover;
        }
      }
      if (event.target.id === 'description') {
        this.isValidDescription();
      }

    })
  }

  /**
   * Show the book cover image when remove focus from the text input contains cover link
   */
  bindShowImage() {
    this.coverLink.addEventListener('blur', () => {
      if (this.isImageURL(this.coverLink.value)) {
        this.coverImage.src = this.coverLink.value;
      }
      else {
        const currId = this.getBookId();
        const currBook = this.getBookById(currId);
        this.coverImage.src = currBook.cover;
      }
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
   * Validate form and get the book information to update book
   * @param {function} handleCreateBook 
   */
  bindUpdateBook(handleUpdateBook) {
    this.updateBookBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.isValidForm()) {
        const body = {
          name: this.bookName.value,
          author: this.author.value,
          cover: this.coverLink.value,
          category: this.category.value,
          description: this.description.value
        }
        const bookId = this.getBookId();
        handleUpdateBook(body, bookId);
      } else {
        this.bindValidateFormFields();
      }
    })
  }
}
