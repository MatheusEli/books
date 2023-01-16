import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

    const [books, setBooks] = useState([]);

    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {title});
        console.log(response);
        //let newBooks = [...books, { id: Math.round(Math.random() * 9999), title }];
        //setBooks(newBooks);
    };

    const deleteBookById = (id) => {
        let newBooks = books.filter((book) => {
          return book.id !== id;  
        });

        setBooks(newBooks);
    };

    const editBook = (id, newTitle) => {
        let newBooks = books.map((book, index) => {
            if(book.id == id){
                return {...book, title: newTitle} 
            }

            return book;
        });

        setBooks(newBooks);
    };

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById} onEdit={editBook}/>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;