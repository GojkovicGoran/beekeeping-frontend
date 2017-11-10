import React from "react";
import Button from "./button";

const TaskItem = (props) => (
    <div className="row align-items-center tasks">
        <div className="col col-sm-12 d-inline-flex">
            <div className="col-xs-2 d-flex justify-content-start align-self-center">
                <h4>{props.index + 1}</h4>
            </div>
            <div className="col-xs-7 offset-sm-0 align-item-start">
                <div className={props.task.completed ? "complete-task" : "none"}>
                    <a className="task-name" onClick={props.openModal}>{props.task.name}</a>
                </div>
            </div>
            <div className="col-xs-3 d-flex justify-content-end nopadding">
                <Button
                    className={props.task.completed ?
                        "btn btn-default btn-sm glyphicon glyphicon-repeat" :
                        "btn btn-default btn-sm glyphicon glyphicon-ok-circle"}
                    onClick={props.onToggleHandler}
                />
                <Button
                    className={props.task.completed || props.task.postpone ?
                        "hidden" :
                        "btn btn-default btn-sm glyphicon glyphicon-time"}
                    onClick={props.onPostponeHandler}
                />
                <Button
                    className="btn btn-default btn-sm glyphicon glyphicon-trash"
                    onClick={props.onDeleteHandler}
                />
            </div>
        </div>
    </div>
);

export default TaskItem;
