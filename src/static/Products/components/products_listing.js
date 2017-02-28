import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import SingleProductsListing from './single_products_listing';

import skinny_washed_jean from './images/skinny_washed_jean.jpg';
import boyfriend_pants_jean from './images/boyfriend_pants_jean.jpg';
import flare_up_jean from './images/flare_up_jean.jpg';
import cropped_bottom_jean from './images/cropped_bottom_jean.jpg';
import high_waisted_wide_jean from './images/high_waisted_wide_jean.jpg';

// default images (for now)


class ProductsListing extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          items: [
            {'id':1, 'name':'Skinny Washed Jean', 'img_url': skinny_washed_jean, 'price': 20 },
            {'id':2, 'name':'Boyfriend Pants Jean', 'img_url': boyfriend_pants_jean, 'price': 30 },
            {'id':3, 'name':'Flare Up Jean', 'img_url': flare_up_jean, 'price': 24 },
            {'id':4, 'name':'Cropped Bottoms Jean', 'img_url': cropped_bottom_jean, 'price': 33 },
            {'id':5, 'name':'High-Waisted Wide Jean', 'img_url': high_waisted_wide_jean, 'price': 44 },
          ]
        };


    }

    render() {

        let product_items = this.state.items.map((item) => {
            return (
                <SingleProductsListing key={item.name} item={item} />
            )
        })

        return (
            <div>
                { product_items }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(ProductsListing);
export { ProductsListing as ProductsListingNotConnected };
