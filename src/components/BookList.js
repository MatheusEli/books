import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList(){

    const { books } = useBooksContext();
    
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