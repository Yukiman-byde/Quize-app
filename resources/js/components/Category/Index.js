import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Category.js';

if(document.getElementById('category')){
    ReactDOM.render(
        <Category />,
        document.getElementById('category'),
        );
}