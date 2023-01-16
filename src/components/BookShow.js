import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const removeBook = () => {
        onDelete(book.id);
    };

    const editBook = () => {
        setShowEdit(!showEdit)
    };

    const handleSubmit = (newTitle) => {
        setShowEdit(false);
        onEdit(book.id, newTitle);
    };

    let content = showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>;

    return (
        <div className="book-show">

            <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>

            <div className="actions">
                <button onClick={editBook} className="edit">Edit</button>
                <button onClick={removeBook} className="delete">
                    Delete
                </button>
            </div>

        </div>
    );
}

export default BookShow;