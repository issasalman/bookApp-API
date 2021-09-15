'use strict';


const bookModel = require('../models/book.model');

const seedCat = () => {

  
  const firstBook = new bookModel({
    title: 'loyalty',
    description: 'Loyalty is a highly charged and important issue, often evoking strong feelings and actions. What is loyalty? Is loyalty compatible with impartiality? ',
    status: "New",
    email:"issasalmanhu1996@gmail.com"
  });

  firstBook.save();

  const secondBook = new bookModel({
    title: 'The Bad Seed',
    description: 'A New York Times bestseller! Amazon Primes Most Read Title of 2019! An Amazon Best Childrens Book of the Month from the New York Times bestselling author of the Goodnight Already! series This is a book about a bad seed',
    status: "New",
    email:"issasalmanhu1996@gmail.com"
  });

  secondBook.save();


  const thirdBook = new bookModel({
    title: 'A History of Jordan',
    description: 'An accessible introduction to the political history of Jordan, including new material on the major events of the last decade',
    status: "New",
    email:"issasalmanhu1996@gmail.com"
  });

  thirdBook.save();


  console.log("Data seeded! 👍");
}

module.exports = seedCat;