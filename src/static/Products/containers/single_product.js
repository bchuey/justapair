import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SingleProductDetail from '../components/single_product/single_product_detail';
import SingleProductImagesListing from '../components/single_product/single_product_images_listing';
import SimilarProducts from './similar_products';

import { Row, Col } from 'react-bootstrap';
import './style.scss';
import '../../base_style.scss';

import { fetch_single_product } from '../actions/products';

class SingleProductView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        };


    }

    componentWillMount(){

        this.props.fetch_single_product(this.props.params.productId);
    }

    render() {

        return (
            <div className="container">
                <Row>
                    <Col xs={6}>
                        <SingleProductImagesListing/>
                    </Col>
                    <Col xs={6}>
                        <SingleProductDetail product={this.props.product}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <SimilarProducts />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.products.product
    };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetch_single_product,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleProductView);
export { SingleProductView as SingleProductViewNotConnected };
