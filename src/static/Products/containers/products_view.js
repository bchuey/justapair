import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AltNav from '../../Home/components/alt_nav';
import ProductsListing from '../components/products_listing';
import FilterMenu from '../components/filter_menu';


import skinny_jean from './images/skinny.jpg';
import boyfriend_jean from './images/boyfriend.jpg';
import flare_jean from './images/flare.jpg';
import cropped_jean from './images/cropped.jpg';
import high_waisted_jean from './images/high_waisted.jpg';

import { Row, Col } from 'react-bootstrap';
import './style.scss';

// actions
import { showAllProducts } from '../actions/products';

class ProductsView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          styles: [
            {'id':1,'label':'Skinny', 'img_url': skinny_jean },
            {'id':2,'label':'Boyfriend', 'img_url': boyfriend_jean },
            {'id':3,'label':'Flare', 'img_url': flare_jean },
            {'id':4,'label':'Cropped', 'img_url': cropped_jean },
            {'id':5,'label':'High-Waisted', 'img_url': high_waisted_jean },
          ]
        };


    }

    componentWillMount(){
        // run action here
        // have access to the store
        // pass that list of products down as props
        this.props.showAllProducts();
    }

    render() {

        let jean_styles = this.state.styles.map((style) => {
            return (
                <li key={style.id}>
                    <img src={ style.img_url } height="175"/>
                    <h4 className="text-center">{ style.label }</h4>
                </li>
            )
        })

        return (
            <div>
                <AltNav/>
                <Row>
                    <h3>CHOOSE YOUR STYLE</h3>
                    <ul id="jean_style">
                        { jean_styles }
                    </ul>
                </Row>
                <Row>
                    <p>breadcrumbs</p>
                </Row>
                <Row>
                    <Col xs={3}>
                        <FilterMenu/>
                    </Col>
                    <Col xs={9}>
                        <ProductsListing/>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({

        showAllProducts,

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
export { ProductsView as ProductsViewNotConnected };
