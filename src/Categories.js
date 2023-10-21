import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
    const typesString = process.env.REACT_APP_TYPES || "";
    const typesArray = typesString.split(",");

    return (
        <div className="categories-page bg-dark text-light">
            <div className="sliding-text">
                <span className="background-text">👋🏽 Welcome Back! Norden!</span>
                &nbsp;----&nbsp;
                <img src="/images/helicopter.png" alt="aircraft" height={30} />
            </div>

            <div className="container">
                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {typesArray.map((data, index) => (
                        <Link key={index} to={`/${data}`} className="link-style text-decoration-none text-light m-2">
                            <div className="thumbnail-style border border-secondary rounded p-3">
                                <img src={`${process.env.PUBLIC_URL}/images/types/${data}.png`} alt={data} className="image-style" />
                            </div>
                            <div className="mt-2">{data}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
