import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class UploadImage extends React.Component {

    state = {
        images: [],
        selectedFile: null
    }

    fileChangedHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    uploadHandler = (marker_id) => {
        let images = [...this.state.images]

        images.push([marker_id, this.state.selectedFile])
        console.log(images)
    }

    render() {
        const { marker_id } = this.props
        
        return (
            <div>
                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    hidden
                    onChange={this.fileChangedHandler}
                />
                <label htmlFor="contained-button-file">
                    <Button color="danger"
                        variant="contained"
                        component="span"
                        onClick={this.uploadHandler(this.props.marker_id)}
                    >
                        Upload
                    </Button>
                </label>
            </div>
        )
    }
}

export default withStyles(productStyle)(UploadImage);