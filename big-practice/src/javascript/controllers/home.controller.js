export class HomeController {
  constructor(bookModel, homeView) {
    this.bookModel = bookModel;
    this.homeView = homeView;
    this.init();
    console.log('Controller');
  }

  /**
  * Show book list after call API
  * Attaching event handlers to specified elements on the home page
  */
  async init() {
    this.handleShowBooks();
    this.homeView.bindBookActions();
    this.homeView.bindConfirmDeleteBook(this.handleConfirmDeleteBook.bind(this));
  }

  /**
   * Get all books from the book model
   * Show all books to the home page
   */
  async handleShowBooks() {
    const bookList = await this.bookModel.getBookList();
    console.log('Show Book');
    if (!bookList) {
      this.homeView.alertMess('Get book list was failed!');
    }

    if (bookList.length) {
      this.homeView.showBookList(bookList);
    }
  }

  /**
   * Get id whose book is deleted form the home view
   * If deleting is successfull, remove that book
   * Else alert
   * @param {string} id 
   */
  async handleConfirmDeleteBook(id) {
    const res = await this.bookModel.deleteBook(id);
    if (res) {
      this.homeView.removeBook(id);
    } else {
      this.homeView.alertMess('Delete book was failed!');
    }
  }
}
