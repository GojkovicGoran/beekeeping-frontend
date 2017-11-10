import React, {Component} from "react";
import {connect} from "react-redux";
import {saveBeehive} from "../actions/beehive_action";
import input from "../components/newBeehive";
import Button from "../components/button";

class Beehive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beehive: {
                type: "",
                number: null,
                queenColor: "",
                honey: null,
                description: "",
                notice: "",
                apiarySite: null
            },
            inputError: ""
        };
    };

    onChangeHandlerType = (evt) => {
        let beehive = {...this.state.beehive};
        beehive.type = evt.target.value;
        this.setState({beehive})
    };

    onChangeHandlerDescription = (evt) => {
        let beehive = {...this.state.beehive};
        beehive.description = evt.target.value;
        this.setState({beehive})
    };

    onChangeHandlerNotice = (evt) => {
        let beehive = {...this.state.beehive};
        beehive.notice = evt.target.value;
        this.setState({beehive})
    };

    onChangeHandlerQueenColor = (evt) => {
        let beehive = {...this.state.beehive};
        beehive.queenColor = evt.target.value;
        this.setState({beehive})
    };

    onChangeHandlerHoney = (evt) => {
        let beehive = {...this.state.beehive};
        beehive.honey = evt.target.value;
        this.setState({beehive})
    };

    onChangeHandlerNumber = (evt) => {
        let beehive = {...this.state.beehive};
        beehive.number = evt.target.value;
        this.setState({beehive})
    };

    onChangeHandlerApiarySite = (evt) => {
        let beehive = {...this.state.beehive};
        beehive.apiarySite = evt.target.value;
        this.setState({beehive})
    };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.saveBeehive(this.state.beehive);
        this.setState({
            inputError: ""
        });
    };

    render = () => {
        return (
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="justify-content-center">
                        <form className="d-flex justify-content-center">
                            <div>
                                Hive Type:
                                <input
                                    className="form-control"
                                    value={this.state.beehive.type}
                                    placeholder="Type..."
                                    onChange={(evt) => this.onChangeHandlerType(evt)}
                                />
                            </div>
                            <div>
                                Description
                                <input
                                    className="form-control"
                                    value={this.state.beehive.description}
                                    placeholder="Description..."
                                    onChange={(evt) => this.onChangeHandlerDescription(evt)}
                                />
                            </div>
                            <div>
                                Honey (kg per hive)
                                <input
                                    className="form-control"
                                    value={this.state.beehive.honey}
                                    placeholder="Honey"
                                    onChange={(evt) => this.onChangeHandlerHoney(evt)}
                                />
                            </div>
                            <div>
                                Notice
                                <input
                                    className="form-control"
                                    value={this.state.beehive.notice}
                                    placeholder="Your notice"
                                    onChange={(evt) => this.onChangeHandlerNotice(evt)}
                                />
                            </div>
                            <div>
                                Hive number
                                <input
                                    className="form-control"
                                    value={this.state.beehive.number}
                                    placeholder="Hive number"
                                    onChange={(evt) => this.onChangeHandlerNumber(evt)}
                                />
                            </div>
                            <div>
                                Queen color
                                <input
                                    className="form-control"
                                    value={this.state.beehive.queenColor}
                                    placeholder="Queen color"
                                    onChange={(evt) => this.onChangeHandlerQueenColor(evt)}
                                />
                            </div>
                            <div>
                                Apiary site
                                <input
                                    className="form-control"
                                    value={this.state.beehive.apiarySite}
                                    placeholder="Your apiary site"
                                    onChange={(evt) => this.onChangeHandlerApiarySite(evt)}
                                />
                            </div>
                            <Button className="btn btn-default" text="Save beehive"
                                    onClick={(evt) => this.onSubmitHandler(evt)}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveBeehive: inputValue => dispatch(saveBeehive(inputValue))
    }
};

export default connect(null, mapDispatchToProps)(Beehive);
