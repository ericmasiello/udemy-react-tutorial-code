import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {

    var { book } = this.props;
    if(!book){
      return <div>Select a book to get started</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{book.title}</div>
        <div>Pages {book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps({activeBook}){
  // whatever gets returned from here will show up as props inside of BookDetail
  return {
    book: activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);