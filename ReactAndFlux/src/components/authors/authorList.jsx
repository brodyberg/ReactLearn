"use strict"; 

var React = require('react');
var PropTypes = require('prop-types');

const AuthorList = (props) => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {props.authors.map((author, i) =>
              <tr key={author.id}>
                <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    );  
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  // foos: PropTypes.string.isRequired
}

// bundle.js:2484 Warning: Failed prop type: The prop `foos` is marked as required in `AuthorList`, but its value is `undefined`.
//     in AuthorList (created by AuthorPage)
//     in AuthorPage (created by App)
//     in div (created by App)
//     in App


module.exports = AuthorList;