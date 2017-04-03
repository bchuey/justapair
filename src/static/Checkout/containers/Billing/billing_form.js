import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Field, reduxForm } from 'redux-form';
import { Control, Form } from 'react-redux-form';

import { Row, Button } from 'react-bootstrap';

class BillingForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

      

        return (
            <Form model="deep.billingForm">
                <Control.text model=".cardHolder"/>
                <Control.text model=".ccNumber"/>
                <Control.text model=".expDate"/>
                <Control.text model=".cvv"/>

                <Button></Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        billingForm: state.deep.forms.billingForm,
    };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
        // action for the submit
  }, dispatch);
}

// BillingForm = reduxForm({
//     form: 'billing'
// })(BillingForm)

export default connect(mapStateToProps,mapDispatchToProps)(BillingForm);
export { BillingForm as BillingFormNotConnected };
