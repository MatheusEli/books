import BookShow from "./BookShow";

function BookList({books}){

    const renderedList = books.map((book, index) => {
        return <BookShow key={book.id} book={book.title}/>
    });

    return (
        <div>
            {renderedList}
        </div>
    );
}

export default BookList;