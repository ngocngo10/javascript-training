import { UpdateBookController } from './controllers/update-book.controller';
import { BookModel } from './models/book.model';
import { CategoryModel } from './models/category.model';
import {UpdateBookView } from './views/update-book.view';

const createBookController = new UpdateBookController(new BookModel(), new CategoryModel, new UpdateBookView());
