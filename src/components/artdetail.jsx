import React, { Component } from "react";

class ArtDetail extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const { art_id } = this.props.match.params;
    fetch(`http://localhost:3000/images/${art_id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({ data: data }));
      });
  }
  render() {
      const {data} = this.state;
    return (
      <div>
        {data.map(artdetail => {
            return(
                <ul key={artdetail.id}>
                    <p>
                        <img src={artdetail.worksimg}></img><br/>
                        {artdetail.title}, {artdetail.medium}, {artdetail.year}<br/>
                        {artdetail.artist}<br/>
                        {artdetail.description}<br/>
                    </p>
                </ul>
            )
        })}
      </div>
    );
  }
}

export default ArtDetail;
