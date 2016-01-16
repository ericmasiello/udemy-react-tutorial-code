import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
 * Containers (smart components) have direct connection to redux state
 * Regular components (dumb components) are just regular React components
 *
 * Containers are only meant for components that care about state
 * Only the most parent component that cares about a paricular piece of state
 * needs to be connected to redux. Therefore the BookItem componnent doesn't need
 * to be a container
 */
class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

/*
 * This function is necessary to take the state from
 * from redux and map it to props on our component
 * Our redux state object has a property called 'books'
 * which will map to our BookList component's props 'books'
 */
function mapStateToProps(state){
  // whatever gets returned from here will show up as props inside of BookList
  return {
    books: state.books
  }
}

//connect is what what produces the 'container' -> mapping redux state to a component
export default connect(mapStateToProps)(BookList);