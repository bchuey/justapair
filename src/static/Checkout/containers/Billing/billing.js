import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ShippingForm from './shipping_form';
import BillingForm from './billing_form';
import OrderSummary from './order_summary';

import { Row, Col } from 'react-bootstrap';

class BillingView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

        return (
            <div className="container">
                <Col xs={8}>
                    <Row>
                        <h4>Shipping Information</h4>
                        <ShippingForm/>
                    </Row>
                    <Row>
                        <h4>Billing Information</h4>
                        <BillingForm/>
                    </Row>
                    <Row>
                        <h4>Delivery Options</h4>
                    </Row>
                </Col>
                <Col xs={4}>
                    <OrderSummary />
                </Col>
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
