import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { render } from '@testing-library/react';

// Display the App component in the "root" element
ReactDOM.render(<App />, document.getElementById('root'));
