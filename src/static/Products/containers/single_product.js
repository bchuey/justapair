import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SingleProductDetail from '../components/single_product/single_product_detail';
import SingleProductImagesListing from '../components/single_product/single_product_images_listing';
import SimilarProducts from './similar_products';

import './style.scss';
import '../../base_style.scss';

class SingleProductView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            product: {
                'name': 'Cropped High-Waisted Jeans',
                'price': 23.00,
                'description': 'Blah blah blah',
                'material': 'synthetic cotton and fiber',
                'reviews': [
                    {'id':1,'content':'It is great'},
                    {'id':2,'content':'It is awesome'},
                    {'id':3,'content':'It is good'},
                ]

            }
        };


    }

    render() {

      

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <SingleProductImagesListing/>
                    </div>
                    <div className="col-xs-6">
                        <SingleProductDetail product={this.state.product}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <SimilarProducts />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(SingleProductView);
export { SingleProductView as SingleProductViewNotConnected };
