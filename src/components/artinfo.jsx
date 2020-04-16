import React, { Component } from "react";

class ArtInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // objectID = this.props.match.objectID;

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;
    let objectID = params.objectID;
    console.log("objectID: ", objectID);
    let itemData = await this.getitemData(objectID);
    this.setState({
      data: itemData,
    });
  }

  getitemData = async (objectID) => {
    let response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    );
    let data = await response.json();
    return data;
  };

  render() {
    const data = this.state.data;
    console.log(data);
    return (
      <>
        <img src={data.primaryImageSmall} alt=""></img>

        <br/>
        
          {data.title}, {data.period}, {data.dynasty} {data.objectDate}{" "}
          {data.medium}, {data.dimensions}{" "}
        
      </>
    );
  }
}

export default ArtInfo;
