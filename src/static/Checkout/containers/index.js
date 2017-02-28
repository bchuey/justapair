import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.scss';

class CheckoutView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-addToBag">CHECKOUT</button>
                </div>
                <div className="row">
                    
                </div>
                <div className="row">
                    <button className="btn btn-addToBag">CHECKOUT</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(CheckoutView);
export { CheckoutView as CheckoutViewNotConnected };
