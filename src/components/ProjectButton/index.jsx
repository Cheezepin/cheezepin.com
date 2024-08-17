import React, { Component } from 'react';
import "./projbutton.css"

import { Link } from "react-router-dom";

export default class ProjectButton extends Component {
    constructor(props) {
      super(props);
    //   console.log(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
      const styles = {
        containerStyle: {
            backgroundImage: `url("/src/assets/projects/${this.props.imgPath}.png"), url("/src/assets/projects/${this.props.bgPath}.png"), linear-gradient(rgb(67, 126, 204), rgb(49, 95, 155))`,
        }
      };

      const { containerStyle } = styles;

      return (
        //   <Link to={this.props.page}>
            <button style={containerStyle} onClick={this.props.setOverlay} class="projBtn"></button>
        //   </Link>
      );
    }
};