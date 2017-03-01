import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class CheckoutView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
         
        };


    }

    render() {



        return (
            <div className="container">
               {this.props.children}
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
