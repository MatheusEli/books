import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {title});
        console.log(response);
        let newBooks = [...books, response.data];
        setBooks(newBooks);
    };

    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

        let newBooks = books.filter((book) => {
          return book.id !== id;  
        });

        setBooks(newBooks);
    };

    const editBook = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        let newBooks = books.map((book, index) => {
            if(book.id == id){
                return {...book, ...response.data} 
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