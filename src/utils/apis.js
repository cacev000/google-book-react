import axios from "axios";

export default {
  // Get books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Get book by id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Delete book by id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Save book to DB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};