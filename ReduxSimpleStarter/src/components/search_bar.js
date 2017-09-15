import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}

    }

    //render method always required
    render() {
        //return <input onChange={this.onInputChange} />;
        //return <input onChange={event => console.log(event.target.value)} />
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

    //event handler
    //event object passed as param. It describes the event that occurred
            /*
    onInputChange(event) {
        console.log(event.target.value);
    }
    */
}

export default SearchBar;

