import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Row, ListGroup, ListGroupItem } from 'react-bootstrap';

class TopNav extends React.Component {

    static propTypes = {

    };

    render() {
        return (
            <div id="top_nav" className="container-fluid">
                <Row>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><i className="fa fa-search fa-3x" aria-hidden="true"/></a></li>
                        <li><a href="#"><i className="fa fa-user fa-3x" aria-hidden="true"/></a></li>
                        <li><a href="#"><i className="fa fa-eye fa-3x" aria-hidden="true"/></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag fa-3x" aria-hidden="true"/></a></li>
                    </ul>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(TopNav);
export { TopNav as TopNavNotConnected };
