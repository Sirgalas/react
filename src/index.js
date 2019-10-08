import React from 'react';
import ReactDOM from 'react-dom';
import {Lesson,Counter,Button} from './05_prop_types/lesson.jsx';
import registerServiceWorker from './registerServiceWorker';
// Syntax without JSX
// React.createElement('div', null, 'Simple div with text');
// React.createElement('input', { className: 'just-class' });
ReactDOM.render(<Lesson child={<Button />}><Counter/></Lesson>, document.getElementById('root'));
registerServiceWorker();