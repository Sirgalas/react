import React from 'react';
import ReactDOM from 'react-dom';
import Lesson from './02_components/lesson.jsx';
import CounterButton from './03_state/lesson.jsx';
import registerServiceWorker from './registerServiceWorker';
// Syntax without JSX
// React.createElement('div', null, 'Simple div with text');
// React.createElement('input', { className: 'just-class' });
ReactDOM.render(<CounterButton />, document.getElementById('root'));
registerServiceWorker();