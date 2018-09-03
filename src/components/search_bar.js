import React ,{Component} from 'react';

// Function - Based components

// const SearchBar = () => {
//   return <input />;
// }

// Class - Based components with Es6 handle events using arrow functionality.

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  render(){
    return (
      <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />

      </div>
    );
  }
    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);

    }
}



//   onInputChange(event){
//     console.log(event.target.value);
//   }
// }
//
export default SearchBar
