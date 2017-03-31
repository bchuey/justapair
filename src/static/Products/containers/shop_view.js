import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Row, Col } from 'react-bootstrap';
import './style.scss';


class ShopView extends React.Component {
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopView);
export { ShopView as ShopViewNotConnected };
