import "./App.css";
import React from "react";
import Home from "./views/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Artist from "./views/Artist";

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/artist-details/:id"
        element = { < Artist / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;