import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

class BillingForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

      

        return (
            <form>
                <div>
                    <Field name="cardholderName" component="input" type="text" placeholder="Cardholder Name"/>
                </div>
                <div>

                    <Field name="cardNumber" component="input" type="text" placeholder="Credit Card Number"/>
                </div>
                <div>
                    <Field name="expDate" component="input" type="text" placeholder="00/0000"/>
                </div>
                 <div>
                    <Field name="cvv" component="input" type="text" placeholder="CVV" />
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

BillingForm = reduxForm({
    form: 'billing'
})(BillingForm)

export default connect(mapStateToProps)(BillingForm);
export { BillingForm as BillingFormNotConnected };
