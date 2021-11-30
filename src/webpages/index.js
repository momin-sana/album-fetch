import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home';
import User from './user';

const Webpages = () => {
    return ( <
        Router >

        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > } > < /Route> <
        Route exact path = "/user/:userId"
        component = { < User / > } > < /Route> <
        /Routes> <
        /Router>
    );
};

export default Webpages;