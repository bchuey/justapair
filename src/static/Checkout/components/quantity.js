import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class QuantityComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            quantity: this.props.quantity,
        };


    }

    render() {

        const { quantity } = this.props;

        return (
            <div>
                <button>-</button>
                <span>{ quantity }</span>
                <button>+</button>

            </div>
               
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(QuantityComponent);
export { QuantityComponent as QuantityComponentNotConnected };
