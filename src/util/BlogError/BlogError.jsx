import React from "react";
import "./BlogError.scss";
import { AlertTriangle } from "lucide-react";
import errorBg from "../../assets/blogerror.jpg"; // apne image ka path daal yahan

const BlogError = () => {
    return (
        <div className="blog-error-container">
            <div className="error-bg">
                <img src={errorBg} alt="Blog Error" />
            </div>
            <div className="error-content">
                <AlertTriangle size={48} strokeWidth={1.5} className="error-icon" />
                <h2 className="error-title">Oops! Blogs Missing 🫠</h2>
                <p className="error-message">Something went wrong, we couldn't load the blogs!</p>
                <button onClick={() => window.location.reload()} className="retry-button">
                    Retry Loading
                </button>
            </div>
        </div>
    );
};

export default BlogError;
