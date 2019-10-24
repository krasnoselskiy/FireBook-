import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "../components/layout/Header/Header";
import Dashboard from "../components/dashboard/Dashboard";
import BookDetails from "../components/books/BookDetails";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CreateBook from "../components/books/CreateBook";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route path="/signin" component={SignIn}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/create" component={CreateBook}></Route>
              <Route path="/book/:id" component={BookDetails}></Route>
            </Switch>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
