import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
    const typesString = process.env.REACT_APP_TYPES || "";
    const typesArray = typesString.split(",");

    const speakAndRedirect = (text, redirectUrl) => {
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);

        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1000);
    };

    return (
        <div className="landing-page bg-dark text-light">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {typesArray.map((data, index) => (
                        <div key={index} className="link-style text-light m-2">
                            <div className="thumbnail-style border border-secondary rounded p-3" onClick={() => speakAndRedirect(data, `/${data}`)}>
                                <img src={`${process.env.PUBLIC_URL}/images/${data}.png`} alt={data} className="image-style" />
                            </div>
                            <div className="mt-2">{data}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
