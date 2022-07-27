import {HomeController} from './controllers/home.controller';
import {BookModel} from './models/book.model';
import {HomeView} from './views/home.view';

const homeController = new HomeController(new BookModel(), new HomeView());
