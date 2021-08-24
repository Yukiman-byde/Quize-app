import React from 'react';
import ReactDOM from 'react-dom';
// import Show from './Show';

function Show(){
    return (
        <h1>hello world</h1>
        );
}


if(document.getElementById('show')){
    ReactDOM.render(
    <Show />,
    document.getElementById('show'),
    );
}