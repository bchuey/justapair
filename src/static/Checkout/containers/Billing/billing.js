import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ShippingForm from './shipping_form';
import BillingForm from './billing_form';

class BillingView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

        return (
            <div className="container">
                <div className="col-xs-8">
                    <div className="row">
                        <h4>Shipping Information</h4>
                        <ShippingForm/>
                    </div>
                    <div className="row">
                        <h4>Billing Information</h4>
                        <BillingForm/>
                    </div>
                    <div className="row">
                        <h4>Delivery Options</h4>
                    </div>
                </div>
                <div className="col-xs-4">

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(BillingView);
export { BillingView as BillingViewNotConnected };
