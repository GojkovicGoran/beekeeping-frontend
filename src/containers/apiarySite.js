import React, {Component} from "react";
import {connect} from "react-redux";
import {saveApiarySite} from "../actions/apiarySite_actions.js";
import {setVisibilityFilter} from "../actions/filter_actions";
import NewApiarySite from "../components/newApiarySite";
import Button from "../components/button";

class ApiarySite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiarySite: {
                name: "",
                description: "",
                notice: ""
            },
            inputError: ""
        };
    };

    onChangeHandlerName = (evt) => {
        let apiarySite = {...this.state.apiarySite};
        apiarySite.name = evt.target.value;
        this.setState({apiarySite})
    };

    onChangeHandlerDescription = (evt) => {
        let apiarySite = {...this.state.apiarySite};
        apiarySite.description = evt.target.value;
        this.setState({apiarySite})
    };

    onChangeHandlerNotice = (evt) => {
        let apiarySite = {...this.state.apiarySite};
        apiarySite.notice = evt.target.value;
        this.setState({apiarySite})
    };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.saveApiarySite(this.state.apiarySite);
        this.setState({
            apiarySite: {
                name: "",
                description: "",
                notice: ""
            },
            inputError: ""
        });
    };

    render = () => {
        return (
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="justify-content-center">
                        <form
                            className="d-flex justify-content-center">
                            <div>
                                Name:
                                <input
                                    className="form-control"
                                    value={this.state.apiarySite.name}
                                    placeholder="name ..."
                                    onChange={(evt) => this.onChangeHandlerName(evt)}
                                />
                            </div>
                            <div>
                                Description:
                                <input
                                    className="form-control"
                                    value={this.state.apiarySite.description}
                                    placeholder="description ..."
                                    onChange={(evt) => this.onChangeHandlerDescription(evt)}
                                />
                            </div>
                            <div>
                                Notice:
                                <input
                                    className="form-control"
                                    value={this.state.apiarySite.notice}
                                    placeholder="notice ..."
                                    onChange={(evt) => this.onChangeHandlerNotice(evt)}
                                />
                            </div>
                            <div>
                                <Button className="btn btn-default" text="Save apiary site"
                                        onClick={(evt) => this.onSubmitHandler(evt)}/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveApiarySite: inputValue => dispatch(saveApiarySite(inputValue))
    }
};

export default connect(null, mapDispatchToProps)(ApiarySite);
