import React, {Component} from "react";

class BeehiveItem extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.beehive.title || "Hello beekeeper!"}</h1>

                {this.props.beehive.title ?
                    <button onClick={this.props.closeBeehive}>
                        Exit beehive
                    </button> :
                    <button onClick={() => this.props.activateBeehive({title: "I am a good beekeeper!"})}>
                        Click Me!
                    </button>
                }

            </div>
        );
    }
}

export default BeehiveItem;
