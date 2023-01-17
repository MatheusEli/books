import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList(){

    const { books } = useContext(BooksContext);
    
    const renderedList = books.map((book, index) => {
        return <BookShow key={book.id} book={book} />
    });

    return (
        <div className="book-list">
            {renderedList}
        </div>
    );
}

export default BookList;