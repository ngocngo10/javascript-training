import { BookHelper } from '../helpers/book.helper';
export class CategoryModel {
  constructor() {
    this.bookHelper = new BookHelper();
  }

  /**
   * Call API from the category helper to get all categories
   * @returns {array} categories
   */
  async getAllCategories() {
    try {
      const categories = await this.bookHelper.getRequest(`/categories`);
      return categories;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
