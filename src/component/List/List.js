import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleTask, deleteTask, filters } from "../../actions/actions";
import Task from "../Task/Task";

class List extends Component {
  render() {
    let taskList;
    switch (this.props.filter) {
      case filters.ALL:
        taskList = this.props.tasks;
        break;
      case filters.COMPLETE:
        taskList = this.props.tasks.filter(task => task.complete);
        break;
      case filters.TODO:
        taskList = this.props.tasks.filter(task => !task.complete);
        break;

      default:
        taskList = this.props.tasks;
    }

    let info = null;

    if (!Object.keys(taskList).length) {
      info = (
        <Task>
          <center>
            There are no items in <b> {this.props.filter} </b>list.
          </center>
        </Task>
      );
    } else {
      info = (
        <Task>
          <center>
            <b> {this.props.filter} tasks. </b>
          </center>
        </Task>
      );
    }
    return (
      <div className="taskList">
        {info}
        {taskList.map(task => {
          return (
            <Task
              key={task.id}
              click={() => this.props.toggleTask(task.id, task.complete)}
              close={this.props.deleteTask.bind(this, task.id)}
              complete={task.complete}
              deleteButton="hidden"
            >
              {task.task}
              {task.complete}
            </Task>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer,
    filter: state.filterReducer
  };
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      toggleTask: toggleTask,
      deleteTask: deleteTask
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(List);
