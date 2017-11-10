import React, {Component} from "react";
import {connect} from "react-redux";
import {saveTask} from "../actions/task_actions.js";
import {setVisibilityFilter} from "../actions/filter_actions";
import NewTask from "../components/newTask";

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: "",
            inputError: ""
        };
    };

    validateInputField = () => {
        let isError = false;
        const errors = {
            inputError: ""
        };
        if (this.state.task.length > 200) {
            isError = true;
            errors.inputError = "Task is too long, 200 characters allowed !"
        }
        if (this.state.task.trim() === "") {
            isError = true;
            errors.inputError = "Please enter a task";
        }
        if (isError) {
            this.setState(errors);
        }
        return isError;
    };

    onChangeHandler = (evt) => {
        this.setState({
            task: evt.target.value,
            inputError: ""
        })
    };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        const error = this.validateInputField();
        const filter = "TODAY";
        if (!error) {
            this.props.saveTask(this.state.task);
            this.setState({
                task: "",
                inputError: ""
            });
            this.props.setVisibilityFilter(filter);
        }
    };

    render = () => {
        return (
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="justify-content-center">
                        <form onSubmit={(evt) => this.onSubmitHandler(evt)}
                              className="d-flex justify-content-center">
                            <NewTask
                                className="form-control"
                                value={this.state.task}
                                placeholder="Your next task..."
                                onChange={(evt) => this.onChangeHandler(evt)}
                            />
                            <p
                                className={
                                    this.state.inputError ?
                                        "col-xs-12  d-flex justify-content-start align-self-center" :
                                        "none"
                                }
                                style={{color: "red"}}>{this.state.inputError}
                            </p>
                        </form>
                    </div>
                    </div>
                </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveTask: inputValue => dispatch(saveTask(inputValue)),
        setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
    }
};

export default connect(null, mapDispatchToProps)(Task);
