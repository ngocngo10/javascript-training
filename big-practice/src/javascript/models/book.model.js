import { BookHelper } from '../helpers/book.helper';
export class Model {
  constructor() {
    this.bookList = [];
    this.bookHelper = new BookHelper();
  }

  async getBookList() {
    this.bookList = await this.bookHelper.getRequest(`/book`) || [];
    return this.bookList;
  };

  async deleteBook(id) {
    const res = await this.bookHelper.deleteRequest(`/books/${id}`);
    if (res) {
      const itemIndex = this.bookList.findIndex(item => item.id === id);
      this.bookList.splice(itemIndex, 1);
    }
  };
}
