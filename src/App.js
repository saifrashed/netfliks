import React, {Component} from 'react';

import './App.css';

class App extends Component {

    apiKey = '428fe45ad7b2d15d210185ac3f4a6bf2';

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            searchUrl:  ""
        };

        this.handleKeyUp  = this.handleKeyUp.bind();
        this.handleChange = this.handleChange.bind();
    }

    handleKeyUp = (e) => {
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
            console.log(searchUrl);
            this.setState({searchUrl: searchUrl});
        }
    };

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value});
        console.log(this.state.searchTerm);
    };

    render() {
        return (
            <div className="App">
                <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search"
                       placeholder="Search for a title..." value={this.state.searchTerm}/>
            </div>
        );
    }
}

export default App;
