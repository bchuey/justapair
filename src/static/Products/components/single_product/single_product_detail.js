import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';



class SingleProductDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };


    }

    render() {

        const { product } = this.props;

        return (
            <div>
                <div className="row">
                    <h3>{ product.name }</h3>
                </div>
                <div className="row">
                    <h4>${ product.price }</h4>
                </div>
                <div className="row">
                    <span>Color</span>
                    <span>(color options go here)</span>
                </div>
                <div className="row">
                    <span>Size</span>
                    <span>(color options go here)</span>
                </div>
                <div className="row">
                    <h3>{ product.description }</h3>
                </div>
                <div className="row">
                    <h3>{ product.material }</h3>
                </div>
                <div className="row">
                    <h3>{ product.reviews.length } Reviews</h3>
                </div>
                <div className="row">
                    <button className="btn btn-addToBag">Add To Bag</button>
                </div>
                <div className="row">
                    <button className="btn btn-success">Add To Wishlist</button>
                </div>

                

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(SingleProductDetail);
export { SingleProductDetail as SingleProductDetailNotConnected };
