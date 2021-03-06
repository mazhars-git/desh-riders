import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Destination from './component/Destination/Destination';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
            <Switch>
                <Route path= '/home'>
                    <Home />
                </Route>
                <PrivateRoute path= '/destination/:key'>
                    <Destination />
                </PrivateRoute>
                <Route path= '/destination'>
                    <Destination />
                </Route>
                <Route path= '/blog'>
                    <Blog />
                </Route>
                <Route path= '/contact'>
                    <Contact />
                </Route>
                <Route path= '/login'>
                    <Login />
                </Route>
                <Route exact path= '/'>
                    <Home />
                </Route>
                <Route path= '*'>
                    <h1 style={{color: 'red'}}>404! something went wrong! try again.</h1>
                </Route>
            </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
