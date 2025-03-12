# 📚 Exercise: JavaScript Book Collection with Filtering

## Task  
Create an array of JavaScript objects where each book belongs to a specific category, and implement a filtering functionality that allows the user to sort books by category.

---

## 🛠️ Before You Start  
1. Go to the **"image"** folder and identify the relevant books you want to include in the array.  
2. Use websites like **saxo.dk** or **amazon.co.uk** to find detailed information about each book.  
3. Each book must have a **category** (e.g., `"fiction"`, `"non-fiction"`, `"science"`, etc.).  
4. Implement a **filtering function** that allows the user to select a category and only see the books belonging to that category.  

📌 **TIP:** Use the method from the previous task where we sorted movies and apply `.filter()` to your array.  

---

## 📖 Example: Array of Books Categorized by Genre  

### Fiction  
```javascript
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "fiction",
        publishedYear: 1925,
        pages: 218,
        image: "/img/the-great-gatsby.webp"
    }
];
```