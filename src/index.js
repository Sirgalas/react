import React from 'react';
import ReactDOM from 'react-dom';
import App from './09_fragments_styles/lesson.jsx';
import registerServiceWorker from './registerServiceWorker';
// Syntax without JSX
// React.createElement('div', null, 'Simple div with text');
// React.createElement('input', { className: 'just-class' });
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();