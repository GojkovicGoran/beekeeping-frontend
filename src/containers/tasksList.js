import React, {Component} from "react";
import {connect} from "react-redux";
import {completeTask, deleteTask, getAllTasks, postponeTask, uncompletedTask} from "../actions/task_actions";
import TaskItem from "../components/taskItem";
import moment from "moment";
import {Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-modal-bootstrap";
import TimeKeeper from "react-timekeeper";


class TasksList extends Component {

    state = {
        showModal: false,
        id: null,
        estimated: false
    };

    componentDidMount = () => {
        this.props.getAllTasks();
    };

    onCompletedHandler = (id) => {
        this.props.completeTask(id);
    };

    onUncompletedHandler = (id) => {
        this.props.uncompletedTask(id);
    };

    onPostponeHandler = (id) => {
        this.props.postponeTask(id);
    };

    onDeleteHandler = (id) => {
        this.props.deleteTask(id);
    };

    getVisibleTasks = (tasks, filter) => {
        switch (filter) {
            case "TODAY":
                return tasks.filter(task => !task.postpone);
            case "TOMORROW":
                return tasks.filter(task => task.postpone);
            default:
                throw new Error("Unknown filter: " + filter)
        }
    };

    openModal = (id) => {
        this.setState({
            showModal: true,
            id
        })
    };

    closeModal = () => {
        this.setState({
            showModal: false
        });
    };

    newModal = () => {
        this.setState({
            estimatedTask: null,
            estimated: false
        });
    };

    setEstimate = () => {
        this.setState({
            estimatedTask: this.state.id,
            estimated: true
        })
    };

    render = () => {
        let visibleTasks = this.getVisibleTasks(this.props.tasks, this.props.filter);
        let estimatedTask = this.props.tasks.map(task => {
            if (task.id === this.state.estimatedTask) {
                return task.name;
            }
            return null;
        });

        let taskName = visibleTasks.map(task => {
            if (task.id === this.state.id) {
                return task.name;
            }
            return null;
        });

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="justify-content-center overflow-box">
                        {
                            visibleTasks.map((task, index) => {
                                    return (
                                        <TaskItem
                                            index={index}
                                            key={task.id}
                                            task={task}
                                            completed={task.completed}
                                            postpone={task.postpone}
                                            onToggleHandler={
                                                (!task.completed) ?
                                                    () => this.onCompletedHandler(task.id) :
                                                    () => this.onUncompletedHandler(task.id)
                                            }
                                            onDeleteHandler={() => {
                                                return this.onDeleteHandler(task.id)
                                            }}
                                            onPostponeHandler={() => {
                                                return this.onPostponeHandler(task.id)
                                            }}
                                            openModal={() => {
                                                if (!task.completed) this.openModal(task.id)
                                            }}
                                        />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer,
        filter: state.filterReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        completeTask: id => dispatch(completeTask(id)),
        uncompletedTask: id => dispatch(uncompletedTask(id)),
        getAllTasks: () => dispatch(getAllTasks()),
        postponeTask: id => dispatch(postponeTask(id)),
        deleteTask: id => dispatch(deleteTask(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
