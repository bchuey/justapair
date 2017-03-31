import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Row, Button } from 'react-bootstrap';

import { add_to_cart } from '../../../Cart/actions/cart';

class SingleProductDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            product_id: '',
            title: '',
            brand: '',
            price: '',
            colors: [],
            sizes: [],
            description: '',
            style: '',

        };

        this.addToCart = this.addToCart.bind(this);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            product_id: nextProps.product.id,
            title: nextProps.product.title,
            brand: nextProps.product.brand_name.name,
            price: nextProps.product.price,
            colors: nextProps.product.colors,
            sizes: nextProps.product.sizes,
            description: nextProps.product.description,
            style: nextProps.product.style.style_type,

        })

        

    }

    addToCart(product_id,event){
        event.preventDefault();
        this.props.add_to_cart(product_id);
    }

    render() {

        let product_colors = this.state.colors.map((color) => {
            return (
                <li key={color.hex_value}>{color.hex_value}</li>
            )
        })

        let product_sizes = this.state.sizes.map((size) => {
            return (
                <li key={size.id}>{size.waist} x {size.length}</li>
            )
        })

        return (
            <div>
                <Row>
                    <h3>{ this.state.title }</h3>
                    <h4>{ this.state.brand }</h4>
                </Row>
                <Row>
                    <h4>${ this.state.price }</h4>
                </Row>
                <Row>
                    <span>Colors</span>
                    <span><ul>{product_colors}</ul></span>
                </Row>
                <Row>
                    <span>Sizes</span>
                    <span><ul>{product_sizes}</ul></span>
                </Row>
                <Row>
                    <h3>Description</h3>
                    <p>{ this.state.description }</p>
                </Row>
                <Row>
                    <h3>Style</h3>
                    <p>{ this.state.style }</p>
                </Row>
                <Row>
                    <h3> Reviews</h3>
                </Row>
                <Row>

                    <Button 
                        bsClass="btn btn-addToBag"
                        onClick={(event) => {this.addToCart(this.state.product_id,event)}}
                    >
                        Add To Bag
                    </Button>
                </Row>
                <Row>
                    <Button bsStyle="primary">Primary</Button>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({

        add_to_cart,

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductDetail);
export { SingleProductDetail as SingleProductDetailNotConnected };
