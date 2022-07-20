export class HomeController {
  constructor(model, homeView) {
    this.model = model;
    this.homeView = homeView;
    this.init();
  }

  async init() {
    this.handleShowBooks();
    this.homeView.bindDeleteBook();
    this.homeView.bindConfirmDeleteBook(this.handleConfirmDeleteBook.bind(this));
  };

  async handleShowBooks() {
    await this.model.getBookList();
    this.homeView.showBookList(this.model.bookList);
  }

  async handleConfirmDeleteBook(id) {
    console.log(id);
    await this.model.deleteBook(id);
    console.log('Ngoc');
    this.homeView.removeBook(id);
  }

}
