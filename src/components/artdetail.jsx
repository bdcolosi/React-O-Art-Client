import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    const objectID = this.props.objectID;

    return (
      <>
        <Link to={`/${objectID}`}>
    <img src={data.primaryImage} width="300" height="225" alt=""></img>
        </Link>
      </>
    );
  }
}

export default ArtDetail;
