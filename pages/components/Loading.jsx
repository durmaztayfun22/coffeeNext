import React from "react"; // Importing React library for JSX
import '../../styles/Loading.css'

// Functional component for a Loading Page
export default function LoadingPage() {

    return (
        <div className="wrapper">
            <div className="press">
                <div className="holder"></div>
                <div className="lid"></div>
                <div className="carafe">
                <div className="drop"></div>
                <div className="spout"></div>
                <div className="contents">
                    <div className="grounds"></div>
                    <div className="water"></div>
                </div>
                </div>
                <div className="plunger">
                <div className="shaft">
                    <div className="knob"></div>
                </div>
                <div className="filter"></div>
                </div>
            </div>
        </div>
    );
}
