import React from 'react';
import ReactDOM from 'react-dom';
import App from './18_routers_one/Lesson';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./19_routers_two/components/home/home";
import Contacts from './18_routers_one/components/contacts/contacts';
import Posts from "./18_routers_one/components/posts/posts";

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/posts' component={Posts} />
            </Switch>
        </App>
    </BrowserRouter>
),
    document.getElementById('root'));
registerServiceWorker();