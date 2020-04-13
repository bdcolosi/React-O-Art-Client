// import React, { Component } from "react";

// class ArtDetail extends Component {
//   state = {
//     data: [],
//   };
//   componentDidMount() {
//     const { object_id } = this.props.match.params;
//     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object_id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState(() => ({ data: data }));
//       });
//   }
//   render() {
//       const {data} = this.state;
//     return (
//       <div>
//         {/* {data.map(artdetail => {
//             return(
//                 <ul key={artdetail.objectID}>
//                     <p>
//                         <img src={artdetail.primaryImage}></img><br/>
//                         {artdetail.title}, {artdetail.objectName}, {artdetail.culture}<br/>
//                         {artdetail.period}<br/>
//                         {artdetail.dynasty}<br/>
//                     </p>
//                 </ul>
//             )
//         })} */}
//       </div>
//     );
//   }
// }

// export default ArtDetail;
