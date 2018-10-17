import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { filter, filters } from "../../actions/actions";

class FilterSelectors extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.filter.bind(this, filters.ALL)}>
          {" "}
          All{" "}
        </button>
        <button onClick={this.props.filter.bind(this, filters.TODO)}>
          {" "}
          Todo{" "}
        </button>
        <button onClick={this.props.filter.bind(this, filters.COMPLETE)}>
          {" "}
          Completed{" "}
        </button>
      </div>
    );
  }
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({ filter: filter }, dispatch);
};

export default connect(
  null,
  mapActionsToProps
)(FilterSelectors);
