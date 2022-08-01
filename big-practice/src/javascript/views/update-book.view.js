import constants from '../../utils/constants'

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
    const id = window.location.search.replace('?id=', '');
    return id;
  }

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

  isNotEmptyText(str) {
    return constants.notEmptyStringPattern.test(str)
  }

  isFormatText(str) {
    return constants.textLengthPattern.test(str)
  }

  isFormatLargeText(str) {
    return constants.largeTextlengthPattern.test(str)
  }

  isImageURL(str) {
    return constants.imageUrlPattern.test(str)
  }

  showEmptyErrorMess(messElement) {
    messElement.firstElementChild.style.display = 'block';
    messElement.lastElementChild.style.display = 'none';
  }

  showUnformatErrorMess(messElement) {
    messElement.firstElementChild.style.display = 'none';
    messElement.lastElementChild.style.display = 'block';
  }

  hideErrorMess(messElement) {
    messElement.firstElementChild.style.display = 'none';
    messElement.lastElementChild.style.display = 'none';
  }

  isValidName(bookName, nameMessEle) {
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

  isValidAuthor(author, authorMessEle) {
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

  isValidCoverLink(coverLink, coverMessEle) {
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

  isValidCategory(category, categoryMessElement) {
    if (!this.isNotEmptyText(category)) {
      this.showEmptyErrorMess(categoryMessElement);
      return false;
    } else {
      this.hideErrorMess(categoryMessElement);
      return true;
    }
  }

  isValidDescription(description, descMessEle) {
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

  isValidForm() {
    const bookName = this.bookName.value;
    const author = this.author.value;
    const coverLink = this.coverLink.value;
    const category = this.category.value;
    const description = this.description.value;

    const isValidName = this.isValidName(bookName, this.bookNameMess);
    const isValidAuthor = this.isValidAuthor(author, this.authorMess);
    const isValidCoverLink = this.isValidCoverLink(coverLink, this.coverLinkMess);
    const isValidCategory = this.isValidCategory(category, this.categoryMess);
    const isValidDescription = this.isValidDescription(description, this.descriptionMess);

    const isValid = isValidName && isValidAuthor && isValidCoverLink && isValidCategory && isValidDescription;

    return isValid;
  }


  /**
   * Validate form and get the book information to creat book
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
      }
    })
  }
}
