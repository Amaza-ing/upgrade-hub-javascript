console.log("POO - clases!");

class Book {
  // title;
  #author;
  pages = 100;

  constructor(title, author) {
    this.title = title;
    this.#author = author;
  }

  getAuthor() {
    return this.#author;
  }

  setAuthor(author) {
    this.#author = author;
  }

  getInfo() {
    console.log("Libro: " + this.title + " , Author: " + this.author);
  }

  getInfoWithPages() {
    console.log(
      `Libro: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
    );
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling");
console.log(book1);

const book2 = new Book("1984", "George Orwell");
console.log(book2.title);
book2.getInfo();
book2.getInfoWithPages();
book2.title = "Harry Potter: La Piedra Filosofal";
book2.setAuthor("Orwell");
console.log(book2.getAuthor());
book2.getInfo();

class Novel extends Book {
  // genre;

  constructor(title, author, genre) {
    super(title, author);
    this.genre = genre;
  }
}

const novel1 = new Novel("El Código Da Vinci", "Dan Brown", "Misterio");
console.log(novel1);
novel1.getInfo();

class Calc {
  constructor() {}

  static max(n1, n2) {
    if (n1 >= n2) return n1;
    return n2;
  }

  static min(n1, n2) {
    if (n1 <= n2) return n1;
    return n2;
  }
}

const maxNumber = Calc.max(5, 100);
console.log(maxNumber);

