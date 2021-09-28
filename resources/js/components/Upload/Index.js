import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './Upload'


if(document.getElementById('upload')){
    ReactDOM.render(
        <Upload />,
        document.getElementById('upload'),
        );
}