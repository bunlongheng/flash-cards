import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const typesString = process.env.REACT_APP_CATEGORIES || "";
const typesArray = typesString.split(",");

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Categories />} />
                {typesArray.map(type => (
                    <Route key={type} path={`/${type}`} element={<Category type={type} />} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
