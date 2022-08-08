import { BookHelper } from '../helpers/service.helper';

export class BookModel {
  constructor() {
    this.bookHelper = new BookHelper();
  }

  /**
   * Call to API from the book helper to get all books
   * @returns {array} book list
   */
  async getBookList() {
    const bookList = await this.bookHelper.getRequest(`/books`);
    return bookList;
  }

  /**
   * Use the id of book to call API from the book helper to delete that book.
   * @param {string} id 
   */
  async deleteBook(id) {
    await this.bookHelper.deleteRequest(`/books/${id}`);
  }

  /**
   * Use the book information of body to call API from the book helper to create the new book
   * @param {object} body 
   */
  async createBook(body) {
    await this.bookHelper.createRequest(`/books`, body);
  }

  /**
   * Use the book information of body and the book id to call API from the book helper to update that book
   * @param {object} body 
   * @param {string} bookId 
   */
  async updateBook(body, bookId) {
    await this.bookHelper.updateRequest(`/books/${bookId}`, body);
  }
  
}
