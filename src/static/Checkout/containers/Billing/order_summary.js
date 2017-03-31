import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class OrderSummary extends React.Component {
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
                <li key={item.name}>
                    {item.name} <br/>
                    {item.quantity} <br/>
                    {item.total}
                </li>
            )
        })

        return (
            <div>
                <h4>Order Summary</h4>
                <ul>
                    {purchased_items}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(OrderSummary);
export { OrderSummary as OrderSummaryNotConnected };
