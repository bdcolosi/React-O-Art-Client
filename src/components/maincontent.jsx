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
   const response = await fetch(`http://localhost:3000/images/`);
   const data = await response.json();
   return data;
  }
  
  render() {
   const {data} = this.state;
   console.log(data)
    return (
      <div>
        <p>{data.map(art => {
            return (
                <ul key={art.id}>
        <Link to={`images/${art.id}`}><img src={art.worksimg}></img></Link>
                </ul>
            )
        })}</p>
      </div>
    );
  }
}

export default MainContent;
