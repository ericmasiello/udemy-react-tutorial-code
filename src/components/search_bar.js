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
      term: 'Initial value'
    };
  }

  render(){
    return (
      <div>
        <input type='search'
               placeholder='Search me'
               value={this.state.term} // by doing this, we call this a 'controlled component' (input is controlled by state)
               onChange={event => this.setState({ term: event.target.value })}
          />
        Value of the input: {this.state.term}
      </div>
    );
  }

  ///* React naming convention: on + ELEMENT + EVENT */
  //onInputChange(event){
  //  console.log(event.target.value);
  //}
}

export default SearchBar;