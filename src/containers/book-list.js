import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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
        <li key={book.title}
            className="list-group-item"
            onClick={()=> this.props.selectBook(book)}>
          {book.title}
        </li>
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

/*
 * bindActionCreators is what takes our action creator methods (e.g. selectBook())
 * and binds them to our redux store. This is what makes calls to the action creators
 * call all of our reducers
 */

/*
 Anything that is returned from mapDispatchToProps will end ups as props
 on the BookList container. in this case selectBook will be available as
 this.props.selectBook inside of our BookList container
 */
function mapDispatchToProps(dispatch){
  /*
   Whenever selectBook() is called, the result of selectBook() should be
   passed to all of our reducers
   dispatch is what calls into our reducers
   */
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect is what what produces the 'container' -> mapping redux state to a component
// promote bookList from a component to a container
// it needs to know about this new dispatch method, selectBook. Makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);