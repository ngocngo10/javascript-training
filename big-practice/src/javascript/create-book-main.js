import { CreateBookController } from './controllers/create-book.controller';
import { BookModel } from './models/book.model';
import { CategoryModel } from './models/category.model';
import { CreateBookView } from './views/create-book.view';

const createBookController = new CreateBookController(new BookModel(), new CategoryModel(), new CreateBookView());
