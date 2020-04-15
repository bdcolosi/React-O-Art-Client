import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      textInput: ''
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
    this.getItemData();
  };

  render() {
    let data = this.state.data;
    let textInput = this.state.textInput;
    return (
      <>
        <form onSubmit={this.handleSubmit}></form>
        <ReactSearchBox
          type="text"
          value={textInput}
          data={data.title}
          callback={(record) => console.log(record)}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </>
    );
  }
}

export default SearchBox;
