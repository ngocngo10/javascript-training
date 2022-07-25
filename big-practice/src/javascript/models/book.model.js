import { BookHelper } from '../helpers/book.helper';
export class BookModel {
  constructor() {
    this.bookHelper = new BookHelper();
  }
  
  /**
   * Call to API from the book helper to get all books
   * @returns {array} book list
   */
  async getBookList() {
    try {
      const bookList = await this.bookHelper.getRequest(`/books`);
      localStorage.setItem('bookList', bookList);
      return bookList;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   * Use the id of book to call API from the book helper to get book information
   * @param {string} bookId 
   * @returns {boolean} 
   */
  async getBookById(bookId) {
    try {
      const book = await this.bookHelper.getRequest(`/books/${bookId}`);
      return book;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   * Use the id of book to call API from the book helper to delete that book.
   * @param {string} id 
   * @returns {boolean}
   */
  async deleteBook(id) {
    try {
      const res = await this.bookHelper.deleteRequest(`/books/${id}`);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   * Use the book information of body to call API from the book helper to create the new book
   * @param {object} body 
   * @returns {boolean}
   */
  async createBook(body) {
    try {
      const res = await this.bookHelper.createRequest(`/books`, body);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   * Use the book information of body and the book id to call API from the book helper to update that book
   * @param {object} body 
   * @param {string} bookId 
   * @returns {boolean}
   */
  async updateBook(body, bookId) {
    try {
      const res = await this.bookHelper.updateRequest(`/books/${bookId}`, body);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
