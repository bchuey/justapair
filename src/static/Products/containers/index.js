import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class ProductsView extends React.Component {


    render() {
        return (
            <div className="container">
                
                <div className="text-center">
                    <h1>Shop Container</h1>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(ProductsView);
export { ProductsView as ProductsViewNotConnected };
