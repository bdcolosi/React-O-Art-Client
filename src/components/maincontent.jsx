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
   const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/departments`);
   const data = await response.json();
   return data.departments;
  }
  
  render() {
   const {data} = this.state;
   console.log(data)
    return (
      <div>
        {data.map(art => {
            return (
                <ul key={art}>
        <li>{art.displayName}</li>
        {/* <Link to={`images/${art.objectIDs}`}><img src={art.primaryImage}></img></Link> */}
                </ul>
            )
        })}
      </div>
    );
  }
}

export default MainContent;
