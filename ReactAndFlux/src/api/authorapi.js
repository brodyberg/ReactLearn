"use strict"; 

var authors = require('./authorData').authors
var _ = require('lodash');

var _generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = (item) => {
  return JSON.parse(JSON.stringify(item));
}

class AuthorApi {
  static getAllAuthors() {
    return _clone(authors);
  };

  getAuthorById(id) {
    // validate id
    var author = _.find(authors, {id: id});

    return _clone(author);
  };

  saveAuthor(author) {
    console.log('pretend this is saved to db via ajax');

    if (author.id) {
      var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
      authors.splice(existingAuthorIndex, 1, author);
    }
    else {
      author.id = _generateId(author); 
      authors.push(author);
    }

    return _clone(author);
  }

  deleteAuthor(id) {
    console.log('pretent this is delete from db via ajax call');

    _.remove(authors, {id: id});
  }
}

module.exports = AuthorApi;