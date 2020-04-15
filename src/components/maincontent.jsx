import React, { Component } from "react";
import ArtDetail from "./artdetail";
import SearchBar from "./searchbar";
// import ArtInfo from './artinfo';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      textInput: "",
      fileredData: [],
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
          textInput: "",
          filteredData: data,
        }));
      });
  };

  getfilterData = (imageFilter) => {
    let filteredData = this.state.data;
    filteredData = filteredData.filter((data) => {
      let getImageOnly = data.primaryImage;
      return getImageOnly.indexOf(imageFilter !== -1);
    });

    this.setState({
      filteredData,
    });
    console.log(filteredData);
  };

  render() {
    let { data, textInput } = this.state;

    // console.log(data);
    return (
      <>
        <>
          <SearchBar value={textInput} data={data.title} />
          <br/>

          {data.map((item, index) => {
            if (index < 80 && item.primaryImage != " ")
              return <ArtDetail objectID={item} key={item} />;
          })}
        </>
      </>
    );
  }
}

export default MainContent;
