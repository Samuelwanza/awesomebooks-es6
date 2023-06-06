import Book from './modules/main.js';
import currentTime from './modules/time.js';

const book = new Book();
book.init();
book.showListPage();
book.showFormPage();
book.showContactPage();
currentTime();
