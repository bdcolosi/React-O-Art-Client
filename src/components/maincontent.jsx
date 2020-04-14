import React, { Component } from "react";
import ArtDetail from "./artdetail";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

        }))

      });
  };

  render() {
    let { data } = this.state;

    // console.log(data);
    return (
      <>
        {data.map((item, index) => {
          if(index < 500) {
            return <ArtDetail objectID={item} key={item} />;
          }
        })}
      </>
    );
  }
}

export default MainContent;
