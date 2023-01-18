import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from './BookEdit';

function BookShow({ book }) {

    const { deleteBookById, editBook } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false);

    const removeBook = () => {
        deleteBookById(book.id);
    };

    const editBooks = () => {
        setShowEdit(!showEdit)
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>;

    return (
        <div className="book-show">

            <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>

            <div className="actions">
                <button onClick={editBooks} className="edit">Edit</button>
                <button onClick={removeBook} className="delete">
                    Delete
                </button>
            </div>

        </div>
    );
}

export default BookShow;