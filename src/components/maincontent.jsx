import React, { Component } from "react";
import {Link} from "react-router-dom";

class MainContent extends Component {
  state = {
    data: [],
  };
 async componentDidMount() {
    const artData = await this.grabData()
      this.setState({
          data: artData
      })
  }

  async grabData() {
   const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`);
   const data = await response.json();
   return data;
  }
  
  render() {
   const {data} = this.state;
   console.log(data.objectIDs)
    return (
      <div>
        <p>{data.objectIDs.map(art => {
            return (
                <ul key={art}>
        <li>{art.objectIDs}</li>
        {/* <Link to={`images/${art.objectIDs}`}><img src={art.primaryImage}></img></Link> */}
                </ul>
            )
        })}</p>
      </div>
    );
  }
}

export default MainContent;
