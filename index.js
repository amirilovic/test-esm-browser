import React from 'react';
import * as ReactDOM from 'react-dom';
import Title from './title.js'


ReactDOM.hydrate(
    React.createElement(Title, { text: 'Hello ESM!' }),
    document.getElementById('root')
);

