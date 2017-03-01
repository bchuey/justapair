import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import QuantityComponent from '../components/quantity';

class CheckoutDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          items: [
            {'id':1, 'name':'blue jeans','quantity':2,'total':25.24},
            {'id':2, 'name':'red jeans','quantity':3,'total':33.94},
            {'id':3, 'name':'black jeans','quantity':1,'total':12.44},
            {'id':4, 'name':'white jeans','quantity':4,'total':64.74},
          ]
        };


    }

    render() {

        let purchased_items = this.state.items.map((item) => {
            return (
                <tr key={item.name}>
                    <td>{item.name}</td>
                    <td><QuantityComponent quantity={item.quantity}/></td>
                    <td>{item.total}</td>
                </tr>
            )
        })

        return (
            <div className="container">
                <div className="row pull-right">
                    <button className="btn btn-addToBag">CHECKOUT</button>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Item</td>
                                <td>Quantity</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {purchased_items}
                        </tbody>
                    </table>
                </div>
                <div className="row pull-right">
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

export default connect(mapStateToProps)(CheckoutDetail);
export { CheckoutDetail as CheckoutDetailNotConnected };
