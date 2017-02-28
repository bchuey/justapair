import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SingleProductsListing extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

    	const { item } = this.props;

        return (
            <div className="col-xs-4">
                <img src={ item.img_url } width="280" />
                <h3>{ item.name }</h3>
                <h4>${ item.price }</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(SingleProductsListing);
export { SingleProductsListing as SingleProductsListingNotConnected };
