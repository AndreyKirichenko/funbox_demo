import '../scss/app.scss';
import '../pug/index.pug'

import React from 'react';
import ReactDOM from 'react-dom';

import Page from './page'


let loadingData = fetch('/data/data.json')
    .then(function(response){
      let contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Oops, we haven't got JSON!");
    });

let documentReady = new Promise((resolve) => {
  document.addEventListener("DOMContentLoaded", function(event) {
    resolve();
  });
});

Promise.all([loadingData, documentReady]).then(values => {
  let loadedData = values[0];

  render(loadedData);
});

function render(loadedData) {
  ReactDOM.render(<Page {...loadedData} />, document.getElementById('root'));
}
