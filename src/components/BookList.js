import BookShow from "./BookShow";

function BookList({books}){

    const renderedList = books.map((book, index) => {
        return <BookShow key={index} book={book}/>
    });

    return (
        <div>
            {renderedList}
        </div>
    );
}

export default BookList;