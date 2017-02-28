import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import AltNav from '../../Home/components/alt_nav';
import ProductsListing from '../components/products_listing';
import FilterMenu from '../components/filter_menu';


import skinny_jean from './images/skinny.jpg';
import boyfriend_jean from './images/boyfriend.jpg';
import flare_jean from './images/flare.jpg';
import cropped_jean from './images/cropped.jpg';
import high_waisted_jean from './images/high_waisted.jpg';

import './style.scss';

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
            <div className="container">
                <AltNav/>
                <div className="row">
                    <h3>CHOOSE YOUR STYLE</h3>
                    <ul id="jean_style">
                        { jean_styles }
                    </ul>
                </div>
                <div className="row">
                    <p>breadcrumbs</p>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <FilterMenu/>
                    </div>
                    <div className="col-xs-9">
                        <ProductsListing/>
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

export default connect(mapStateToProps)(ProductsView);
export { ProductsView as ProductsViewNotConnected };
