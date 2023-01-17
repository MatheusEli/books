import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {

    const [title, setTitle] = useState(book.title);
    const { editBook } = useContext(BooksContext);

    const handleChange = (evt) => {
        setTitle(evt.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBook(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input onChange={handleChange} className="input" value={title}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;