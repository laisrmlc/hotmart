import { Switch, Route, withRouter  } from 'react-router-dom'
import Home from './home';
import About from './about';
import React from 'react';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} handler={About} />
        </Switch>
    </main>
);

export default withRouter(Main)