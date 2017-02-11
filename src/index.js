import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import config from './config'

const API_KEY = config.GOOGLE_API_KEY;

// Create a new component. This component should
// produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component generated HTML and put it in
// the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
