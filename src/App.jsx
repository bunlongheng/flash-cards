import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";
import Settings from "./Settings";
import ErrorBoundary from "./ErrorBoundary";
import { getCategories } from "./utility/config.js";

import "bootstrap/dist/css/bootstrap.min.css";

const typesArray = getCategories();

const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Routes>
                    <Route path="/" element={<Categories />} />
                    {typesArray.map(type => (
                        <Route key={type} path={`/${type}`} element={<Category type={type} />} />
                    ))}

                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
};

export default App;
