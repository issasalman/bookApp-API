'use strict';
const mongoose = require('mongoose');

/***
 * TO Create a Mongo DB collection
 *
 * 1- You need to create a mongoose Schema
 * 2- Is to generate a model based on that Schema
 *
 */


// Step # 1 Define the Schema on which the collection/ Model will be modeled after
const bookSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String },
    email: { type: String }

});


// Step # 2 We will Generate the Model based on that Schema
const bookModel = mongoose.model('myBooks', bookSchema);

module.exports = bookModel;