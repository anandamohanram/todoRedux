import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addTask } from "../../actions/actions";

class Input extends Component {
  state = { task: "" };

  onChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

  keyHandler = event => {
    if (event.key === "Enter") {
      document.getElementById("btnAddTask").click();
    }
  };

  addTaskHandler = () => {
    this.reset();
    document.getElementById("inputTask").focus();
  };

  reset = () => {
    this.setState({ task: "" });
  };

  render() {
    return (
      <div className="inputTask">
        <input
          id="inputTask"
          type="text"
          placeholder="enter task here..."
          value={this.state.task}
          onChange={this.onChangeHandler}
          onKeyPress={this.keyHandler}
          style={{ width: "60%" }}
        />
        <button
          id="btnAddTask"
          onClick={() => {
            if (this.state.task) {
              this.addTaskHandler();
              this.props.addTask(this.state.task);
            }
          }}
        >
          Add Task
        </button>
        <button onClick={this.reset}> Clear </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state };
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({ addTask: addTask }, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Input);
