import React, { Component } from "react";

class ArtDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  objectID = this.props.objectID;

  async componentDidMount() {
    let itemData = await this.getitemData(this.objectID);
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

    return (
      <section>
        <img src={data.primaryImage} width="300" height="225"></img>
        <p>{data.title}</p>
      </section>
    );
  }
}

export default ArtDetail;
