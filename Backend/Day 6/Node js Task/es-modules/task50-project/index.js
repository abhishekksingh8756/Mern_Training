import { libraryName, formatBookInfo } from './book.js';
import Book from './Book.js';

console.log("Welcome to", libraryName);
console.log("----------------------------------");

const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("Atomic Habits", "James Clear", false);

console.log(formatBookInfo(book1.title, book1.author), "-", book1.status());
console.log(formatBookInfo(book2.title, book2.author), "-", book2.status());
