import { useState } from "react";

function BookEdit({ book, onSubmit }) {

    const [title, setTitle] = useState(book.title);

    const handleChange = (evt) => {
        setTitle(evt.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(title);
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