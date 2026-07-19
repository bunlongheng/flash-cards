import React from "react";
import PropTypes from "prop-types";

// Catches render errors anywhere below it and shows a friendly, kid-appropriate
// message + a way back home, instead of a blank white screen.
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Flash Cards error:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div role="alert" style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
                    <h1>Oops! Something went wrong.</h1>
                    <p>Let us start over.</p>
                    <a href="/" style={{ color: "#4dabf7" }}>
                        Go home
                    </a>
                </div>
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};

export default ErrorBoundary;
