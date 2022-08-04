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
    try {
      const categories = await this.categoryModel.getAllCategories();
      if (categories?.length) this.updateBookView.showCategories(categories);
    } catch (error) {
      console.log(error.message);
      this.alertMess('Get categories was failed.');
    }
  }

  /**
   * Show book information
   */
  handleShowBook() {
    const book = this.updateBookView.getBookById();
    if (book) {
      this.updateBookView.showBookById(book);
    } else {
      this.updateBookView.alertMess('Not found book.');
    }
  }

  /**
   * Get response after call API to update book from the book model
   * If response is true, redirect to the home page
   * Else take alert
   * @param {object} body 
   * @param {string} bookId 
   */
  async handleUpdateBook(body, bookId) {
    try {
      await this.bookModel.updateBook(body, bookId);
      this.updateBookView.redirectHomePage();
    } catch (error) {
      console.log(error.message);
      this.updateBookView.alertMess('Update book failed!');
    }
  }
}
