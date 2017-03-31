import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';


class ShippingForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

      

        return (
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="street">Street Address</label>
                    <Field name="street" component="input" type="text"/>
                </div>
                 <div>
                    <label htmlFor="city">City</label>
                    <Field name="city" component="input" type="text"/>
                </div>
                 <div>
                    <label htmlFor="postalCode">Zipcode</label>
                    <Field name="postalCode" component="input" type="text"/>
                </div>
                 <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field name="phoneNumber" component="input" type="text"/>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

ShippingForm = reduxForm({
	form: 'shipping'
})(ShippingForm)

export default connect(mapStateToProps)(ShippingForm);
export { ShippingForm as ShippingFormNotConnected };
