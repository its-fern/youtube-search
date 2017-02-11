import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = /*<API KEY from Google Dev Tools>*/;

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
