"use strict";

// Task: Create an array of JavaScript objects where each book belongs to a specific category,
// and implement a filtering functionality that allows the user to sort books by category.

// Before you start:
// 1. Go to the "image" folder and identify the relevant books you want to include in the array.
// 2. Use websites like saxo.dk or amazon.co.uk to find detailed information about each book.
// 3. Each book must have a **category** (e.g., "fiction", "non-fiction", "science", etc.).
// 4. Implement a **filtering function** that allows the user to select a category and only see the books belonging to that category.
// TIP: Use the method from the previous task where we sorted movies and apply `.filter()` to your array.

// Example: Array of books categorized by genre
// Fiction
// {title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", publishedYear: 1925, pages: 218, images:"/img/the-great-gatsby.webp" }

const books =[

    {title:"1984", author: "George Orwell", category:"fiction", year:1949, img:"/img/1984.webp", url:"https://www.goodreads.com/book/show/40961427-1984"},
    {title:"A Game of Thrones", author: "George R. R. Martin", category:"fantasy", year:1996, img:"/img/a-game-of-thrones.webp", url:"https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?ref=nav_sb_ss_1_8"},
    {title:"IT", author: "Stephen King", category:"horror", year:1986, img:"/img/it.webp", url:"https://www.goodreads.com/book/show/830502.It?from_search=true&from_srp=true&qid=K2l4Ug542N&rank=3"},
    {title:"Harry potter and the philosophers stone", author: "J. K. Rowling", category:"fantasy", year:1997, img:"/img/harry-potter-and-the-sorcerers-stone.webp", url:"https://www.goodreads.com/book/show/72193.Harry_Potter_and_the_Philosopher_s_Stone?ref=nav_sb_ss_1_26"},
    {title:"The Hobbit", author: "J. R. R. Tolkien", category:"fantasy", year:1937, img:"/img/the-hobbit.webp", url:"https://www.goodreads.com/book/show/17157681-the-hobbit-part-one?ref=nav_sb_ss_2_10"},
    {title:"Pride and Prejudice", author: "Jane Austen", category:"history", year:1813, img:"/img/pride-and-prejudice.webp", url:"https://www.goodreads.com/book/show/129915654-pride-prejudice?ref=nav_sb_ss_1_10"},
    {title:"Essentials of classic italian cooking", author: "Marcella Hazan", category:"cookbook", year:1976, img:"/img/essentials-of-classic-italian-cooking.webp", url:"https://www.goodreads.com/book/show/19552.Essentials_of_Classic_Italian_Cooking?ref=nav_sb_ss_1_37"},
    {title:"Guns, Germs, and Steel", author: "Jared Diamond", category:"non-fiction", year:1997, img:"/img/guns-germs-and-steel.webp", url:"https://www.goodreads.com/book/show/1842.Guns_Germs_and_Steel?ref=nav_sb_ss_1_11"}    
];

const booksContainer = document.getElementById("books-container");
const selectedCategory = document.getElementById("category-select");



function displayBooks(booksList) {
    booksContainer.innerHTML = "";

    booksList.forEach((books) => {
        
        const booksElem = document.createElement("article");  

        booksElem.innerHTML = `
        <h3>${books.title}</h3>
        <p>Forfatter: ${books.author}</p>
        <p>genre: ${books.category}</p>
        <p>År: ${books.year}</p>
        <figure>
            <a href="${books.url}" target="_blank">
                <img src="${books.img}" alt="${books.title}">
            </a>
        </figure>`;
        booksContainer.appendChild(booksElem); 
    });
}

displayBooks(books);

selectedCategory.addEventListener("change", () => {
    // henter den valgte kategori eller genre
    const selectedValue = selectedCategory.value;

    let filteredBooks;

    if(selectedValue === "all") {
        filteredBooks = books;
    } else {
        filteredBooks = books.filter(books => books.category === selectedValue);
    }

    displayBooks(filteredBooks);
})