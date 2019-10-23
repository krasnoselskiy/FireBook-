import React, { Component } from "react";
import { connect } from "react-redux";

import { createBook } from "../../store/actions/bookActions";

class CreateBook extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.createBook(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Book</h5>
          <div className="input-field">
            <label>Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label>Description</label>
            <textarea
              id="description"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Create Book</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => dispatch(createBook(book))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBook);
