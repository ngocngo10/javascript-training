import constants from '../../utils/constants';

export class CreateBookView {
  constructor() {
    this.createBookBtn = document.getElementById('create-btn');
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
   * Use the categories array to show on the creating book page
   * @param {array} categories 
   */
  showCategories(categories) {
    categories.forEach((category) => {
      const categoryItem = document.createElement('option');
      categoryItem.value = category.id;
      categoryItem.innerText = category.categoryName;
      this.category.appendChild(categoryItem);
    })
  }

  /**
   * Redirect to home page from the creating book page
   */
  redirectHomePage() {
    window.location.href = './index.html';
  }

  /**
   * Take the message to notice of creating book is failed 
   * @param {string} str 
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
   * @param {string} bookName 
   * @param {document object} nameMessEle 
   * @returns {boolean}
   */
  isValidName(bookName, nameMessEle) {
    console.log('d', this.isFormatText(bookName), bookName);
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
   * @param {string} author 
   * @param {document object} authorMessEle 
   * @returns {boolean}
   */
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

  /**
   * Validate for the cover link
   * @param {string} coverLink 
   * @param {document object} coverMessEle 
   * @returns {boolean}
   */
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

  /**
   * Validate for the category of book
   * @param {string} category 
   * @param {document object} categoryMessElement 
   * @returns {boolean}
   */
  isValidCategory(category, categoryMessElement) {
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
   * @param {string} description 
   * @param {document object} descMessEle 
   * @returns {boolean}
   */
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

  /**
   * Validate for the create book form
   * @returns {boolean}
   */
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

  bindValidateFormField() {
    const bookName = this.bookName.value;
    const author = this.author.value;
    const coverLink = this.coverLink.value;
    const category = this.category.value;
    const description = this.description.value;

    this.formContentRight.addEventListener('keyup', (event) => {
      if (event.target.id === 'book-name') {
        this.isValidName(this.bookName.value, this.bookNameMess);
      }
      if (event.target.id === 'author') {
        this.isValidName(this.author.value, this.authorMess);
      }
      if (event.target.id === 'cover-link') {
        const isValid = this.isValidCoverLink(this.coverLink.value, this.coverLinkMess);
        if (isValid) {
          this.coverImage.src = this.coverLink.value;
        } else {
          const defaultCoverImage = require('../../assets/images/cover-image.png');
          this.coverImage.src = defaultCoverImage;
        }
      }
      if (event.target.id === 'description') {
        this.isValidDescription(this.description.value, this.descriptionMess);
      }

    })
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
   * Redirect to the home page from the creating book page when click the cancel button
   */
  bindCancelCreateBook() {
    this.cancelBtn.addEventListener('click', () => {
      this.redirectHomePage();
    })
  }

  /**
   * Validate form and get the book information to creat book
   * @param {function} handleCreateBook 
   */
  bindCreateBook(handleCreateBook) {
    this.createBookBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.isValidForm()) {
        const body = {
          name: this.bookName.value,
          author: this.author.value,
          cover: this.coverLink.value,
          category: this.category.value,
          description: this.description.value
        }
        handleCreateBook(body);
      }
    })
  }

}
