import React from "react";
import Book from "../book/book"

const Results = (props) =>  {
    return (
        <div>
            <h3>
                Results
            </h3>
            {props.books.map(book =><Book book={book} />)}
        </div>
    );
}

export default Results;