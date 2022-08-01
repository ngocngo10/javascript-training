import { BookHelper } from '../helpers/service.helper';
export class CategoryModel {
  constructor() {
    this.bookHelper = new BookHelper();
  }

  /**
   * Call API from the category helper to get all categories
   * @returns {array} categories
   */
  async getAllCategories() {
    const categories = await this.bookHelper.getRequest(`/categories`);
    return categories;
  }
}
