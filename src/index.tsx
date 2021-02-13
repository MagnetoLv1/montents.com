import React from 'react';
import ReactDom from 'react-dom';

import 'regenerator-runtime/runtime';
import 'libs/prototypes';

import App from 'pages/App';

const root = document.getElementById('root');

ReactDom.render(<App />, root);
