import React from 'react';
import Home from './pages/Home';
import India from './pages/India';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Footerpart from './components/Footerpart';

function App() {
    return (
        <Router>
            <div>
                <NavbarMenu></NavbarMenu>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/news" component={India}></Route>
                </Switch>
                <Footerpart></Footerpart>
            </div>
        </Router>
    );
}

export default App;
