import React, { Component } from "react";
import ArtDetail from "./artdetail";
import SearchBar from "./searchbar";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      textInput: "",
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
        }));
      });
  };

  render() {
    let { data, textInput } = this.state;

    // console.log(data);
    return (
      <>
        <div>
          <SearchBar value={textInput} data={data.title} />
          {data.map((item, index) => {
            if (index < 500) {
              return <ArtDetail objectID={item} key={item} />;
            }
          })}
        </div>
      </>
    );
  }
}

export default MainContent;
