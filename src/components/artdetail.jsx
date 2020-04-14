import React, {Component} from "react";
import MainContent from "./maincontent";

 class ArtDetail extends Component {
   constructor(props) {
     super(props);
     this.state = {
       data: []
     }
     
   };
  
  objectID = this.props.objectID
  
  
  async componentDidMount() {
   let itemData = await this.getitemData(this.objectID)
   this.setState({
     data: itemData
   });
  };

  



   getitemData = async (objectID) => {
    
    let response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    )
    let data = await response.json();
    return data
      
  };

  

  render() {
    console.log(this.state.data)
    return (
      <div>
         {/* {itemData.primaryImage} */}
      </div>
    );

  }


  
};

export default ArtDetail;

