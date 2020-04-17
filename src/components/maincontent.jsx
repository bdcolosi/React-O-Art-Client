import React, { Component } from "react";
import ArtDetail from "./artdetail";
import SearchBar from "./searchbar";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchValue: " ",
    };
  }

  componentDidMount() {
    this.theMetData();
  }

  theMetData = () => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2018-10-22&departmentIds=10`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({
          data: data.objectIDs,
          textInput: "",
          searchValue: data.objectIDs,
        }));
      });
  };

  searchData = (value) => {
    this.theMetData(this.searchValue);
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${value}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({
          data: data.objectIDs,
          searchValue: value,
        }));
      });
  };

  render() {
    let { data, searchValue } = this.state;

    return (
      <>
      <h1>The Met</h1> <br/>
        <div>
          <SearchBar searchFunction={this.searchData} />
        </div>
        <br />
      <div>
        {data.map((item, index) => {
          if (index < 80 && item.primaryImage !== " ") {
            return <ArtDetail objectID={item} key={item} />;
          } else {
            return null;
          }
        })}
        </div>
      </>
    );
  }
}

export default MainContent;
