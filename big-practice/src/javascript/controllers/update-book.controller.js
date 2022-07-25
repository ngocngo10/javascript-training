export class UpdateBookController {
  constructor(bookModel, categoryModel, updateBookView) {
    this.bookModel = bookModel;
    this.categoryModel = categoryModel;
    this.updateBookView = updateBookView;
    this.init();
  }

  /**
   * Show categories and book which is updated after call API
   * Attaching event handlers to specified elements on the updating book page
   */
  async init() {
    this.handleShowCategories();
    this.handleShowBook();
    this.updateBookView.bindCancelUpdateBook();
    this.updateBookView.bindUpdateBook(this.handleUpdateBook.bind(this));
    this.updateBookView.bindShowImage();
  }

  /**
   * Get categories from the category model
   * Show the categories to the creating book page
   */
  async handleShowCategories() {
    const categories = await this.categoryModel.getAllCategories();
    this.updateBookView.showCategories(categories);
  }

  /**
   * Get the id of book which is updated from the updating book view
   * Show book information after call API ftom the book model
   */
  async handleShowBook() {
    const book = this.updateBookView.getBookById();  
    this.updateBookView.showBookById(book);
  }

  /**
   * Get response after call API to update book from the book model
   * If response is true, redirect to the home page
   * Else take alert
   * @param {object} body 
   * @param {string} bookId 
   */
  async handleUpdateBook(body, bookId) {
    const res = await this.bookModel.updateBook(body, bookId);
    if (res) {
      this.updateBookView.redirectHomePage();
    } else {
      this.updateBookView.alertMess();
    }
  }
}
