import React, { Component } from "react";
import ArtDetail from "./artdetail";
import SearchBar from "./searchbar";
import StackGrid, { transitions } from "react-stack-grid";
import sizeMe from "react-sizeme";

const { scaleDown } = transitions;

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
    const {
      size: { width },
    } = this.props;

    return (
      <>
        <header>The Met's Collection</header>
        <h1>
          <SearchBar searchFunction={this.searchData} />
        </h1>
        <StackGrid
          columnWidth={width <= 768 ? "100%" : "33.33%"}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          {data.map((item, index) => {
            if (index < 80 && item.primaryImage !== " ") {
              return <ArtDetail objectID={item} key={item} />;
            } else {
              return null;
            }
          })}
        </StackGrid>
      </>
    );
  }
}

export default sizeMe()(MainContent);
