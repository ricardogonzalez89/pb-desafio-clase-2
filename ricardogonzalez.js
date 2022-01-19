class User{
    constructor(name, lastName, books, pets){
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }

    getFullName(){
        return `${this.name}  ${this.lastName}`;
    }

    addPet(petName){
        console.log("adding new pet...");
        this.pets.push(petName);
    }

    countPets(){
        return this.pets.length;
    }

    addBook(name, author){
        console.log("adding new book...");
        this.books.push({name: name, author : author});
    }

    getBooks(){
        let booksNameArray = [];
        for (let i = 0; i < this.books.length; i++) {
            booksNameArray.push(this.books[i].name);
        }
        return booksNameArray;
    }
}

// First test user
const user01 = new User("Ricardo", "Gonzalez",  [{name: "clean code", author : "Robert Martin"}], ["gato"]);
console.log("First User Test-------------------------------------");
console.log(user01.getFullName());
console.log(user01.countPets());
user01.addPet("Perro");
console.log(user01.countPets());
console.log(user01.getBooks());
user01.addBook("El señor de los anillos", "J. R. Tolkien");
console.log(user01.getBooks());

// Second test user
const user02 = new User("Kenia", "Farill",  [{name: "It", author : "Stephen King"}, {name: "El hobbit", author : "J. R. Tolkien"}], ["hamnster", "Camaleon"]);
console.log("\nSecond User Test-------------------------------------");
console.log(user02.getFullName());
console.log(user02.countPets());
user02.addPet("Perro");
console.log(user02.countPets());
console.log(user02.getBooks());
user02.addBook("El psicoanalista", "John Katzenbach");
console.log(user02.getBooks());
