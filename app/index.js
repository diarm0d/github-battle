import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Popular from "./Components/Popular";
import Battles from "./Components/Battles";

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
    render() {
        return (
        <div className="container">
            {/* <Popular /> */}
            <Battles />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))