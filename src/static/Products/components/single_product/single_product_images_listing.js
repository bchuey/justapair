import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SingleProductImagesListing extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };


    }

    render() {

      

        return (
            <div className="container">
               <p>Images go here</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(SingleProductImagesListing);
export { SingleProductImagesListing as SingleProductImagesListingNotConnected };
