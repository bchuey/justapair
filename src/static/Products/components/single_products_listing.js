import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Col } from 'react-bootstrap';

class SingleProductsListing extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

    	const { item } = this.props;

        return (
            <Col xs={4}>
                <Link to={`/shop/${item.id}`}><img src="#" width="280" /></Link>
                <h3>{ item.title }</h3>
                <h4>${ item.price }</h4>
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(SingleProductsListing);
export { SingleProductsListing as SingleProductsListingNotConnected };
