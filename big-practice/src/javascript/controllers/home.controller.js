export class HomeController {
  constructor(bookModel, homeView) {
    this.bookModel = bookModel;
    this.homeView = homeView;
    this.init();
  }

  /**
  * Show book list after call API
  * Attaching event handlers to specified elements on the home page
  */
  init() {
    this.handleShowBooks();
    this.homeView.bindBookActions();
    this.homeView.bindConfirmDeleteBook(this.handleConfirmDeleteBook.bind(this));
  }

  /**
   * Get all books from the book model
   * Show all books to the home page
   */
  async handleShowBooks() {
    try {
      const bookList = await this.bookModel.getBookList();
      localStorage.setItem('bookList', JSON.stringify(bookList));
      if (bookList.length) {
        this.homeView.showBookList(bookList);
      }
    } catch (error) {
      console.log(error.message);
      this.homeView.alertMess('Get book list was failed!');
    }
  }

  /**
   * Get id whose book is deleted form the home view
   * If deleting is successfull, remove that book
   * Else alert
   * @param {string} id 
   */
  async handleConfirmDeleteBook(id) {
    try {
      await this.bookModel.deleteBook(id);
      this.homeView.removeBook(id);
    } catch (error) {
      console.log(error.message);
      this.homeView.alertMess('Delete book was failed!');
    }
  }
}
