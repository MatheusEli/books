import { useState } from "react";

function BookCreate({ onCreate }) {

    const [title, setTitle] = useState('');

    const handleChange = (evt) => {
        setTitle(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onCreate(title);

        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className = "input" value={title} onChange={handleChange} />

                <button className="button">Submit</button>
            </form>
        </div>
    );
}

export default BookCreate;