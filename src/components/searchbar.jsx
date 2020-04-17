import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };
  }

  objectID = this.props.objectID;

  handleChange = (event) => {
    this.setState({
      textInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchFunction(this.state.textInput);
  };

  render() {
    let textInput = this.state.textInput;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={textInput} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default SearchBox;
