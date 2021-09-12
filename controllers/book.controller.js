'use strict';

const bookModel = require('../models/book.model');


const getBooks = (request, response) => {

    bookModel.find((error, booksData) => {
    response.json(booksData)
  });

};


module.exports = {
    getBooks
}