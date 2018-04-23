"use strict"; 

var React = require('react');
var AuthorApi = require('../../api/authorApi');

class AuthorPage extends React.Component {

  getInitialState() {
    return {
      authors: []
    };
  }

  componentWillMount() {
    this.setState({ authors: AuthorApi.getAllAuthors() });
  }

  createAuthorRow(author) {
    return (
      <tr key={author.id}>
        <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
        <td>{author.firstName} {author.lastName}</td>
      </tr>
    );
  }

  render() {

    return (
      <div>
        <h1>Authors</h1>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map(this.createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = AuthorPage;