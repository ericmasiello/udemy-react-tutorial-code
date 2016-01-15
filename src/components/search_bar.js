import React, { Component } from 'react';


//const SearchBar = () => {
//  return <input placeholder="Search Youtube"/>;
//};

class SearchBar extends Component {
  constructor(props){

    //calls Component's constructor function
    super(props);

    //initialize state
    this.state = {
      term: ''
    };
  }

  render(){
    return (
      <div className='search-bar'>
        <input type='search'
               placeholder='Search me'
               value={this.state.term} // by doing this, we call this a 'controlled component' (input is controlled by state)
               onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  ///* React naming convention: on + ELEMENT + EVENT */
  //onInputChange(event){
  //  console.log(event.target.value);
  //}
}

export default SearchBar;