"use strict"; 

var React = require('react');

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

module.exports = AuthorList;