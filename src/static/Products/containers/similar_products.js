import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Slider from 'react-slick';

import skinny_jean from './images/skinny.jpg';
import boyfriend_jean from './images/boyfriend.jpg';
import flare_jean from './images/flare.jpg';
import cropped_jean from './images/cropped.jpg';

class SimilarProducts extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            similar_products: [
				{'id':1,'name':'Skinny', 'img_url': skinny_jean },
				{'id':2,'name':'Boyfriend', 'img_url': boyfriend_jean },
				{'id':3,'name':'Flare', 'img_url': flare_jean },
				{'id':4,'name':'Cropped', 'img_url': cropped_jean },

            ],
            
        };


    }

    render() {

    	let settings = {
	      dots: true,
	      speed: 500,
	      slidesToShow: 4,
	      slidesToScroll: 4,
	      variableWidth: true,
	    }

	    let other_product = this.state.similar_products.map((product) => {
	    	return (
	    		<div id="single_similar_product" key={product.name}>
	    			<img src={ product.img_url } height="225" />
	    			<h4>{ product.name }</h4>
	    		</div>
	    	)
	    })
      

        return (

            <div>
            	<Slider settings={settings}>
            		{ other_product }
            	</Slider>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(SimilarProducts);
export { SimilarProducts as SimilarProductsNotConnected };
