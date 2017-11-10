import React, {Component} from "react";
import ApiarySite from "../containers/apiarySite";
import Beehive from "../containers/beehive";
import BeehivesList from "../containers/beehivesList";
import Task from "../containers/task";
import Footer from "../containers/footer";


class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>BEEKEEPING</h1>
                <h1>Apiary site info</h1>
                <ApiarySite/>
                <h3>Beehives</h3>
                <BeehivesList/>
            </div>
        );
    }
}

export default App;
