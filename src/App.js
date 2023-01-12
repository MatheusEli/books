import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('Need to add book with: ', title);
    };

    const addBook = (newBook) => {
        let newBooks = books;
        newBooks.push(newBook);
        
        setBooks(newBooks);
    }

    return (
        <div>
            <BookList books={books} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;