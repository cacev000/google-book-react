import React from "react";
import "./book.css"

const Book = props => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.book.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.book.author}</h6>
          <p className="card-text"><img  alt={props.book.title} src={props.book.image} className="card-image" />{props.book.description}</p>
          
          <a href={props.book.link} className="card-link">
            More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;