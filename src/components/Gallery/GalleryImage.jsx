import React, { Component } from 'react';
import AnimatedPage from "../../pages/AnimatedPage";
import Ononoki from '/src/components/Ononoki';

class GalleryImage extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
    //   this.props.setOverlay("empy");
        alert("yeah");
    }
  }

  render() {
    return (
        <></>
    );
  }
};

export default GalleryImage;