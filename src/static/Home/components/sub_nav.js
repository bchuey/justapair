import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Row, ListGroup, ListGroupItem } from 'react-bootstrap';

import './style.scss';

class SubNav extends React.Component {

    static propTypes = {

    };

    render() {
        return (
        	<div id="sub_nav" className="container-fluid">
                <Row>
                    <ul id="sub_nav_ul">
				      	<li><a href="#">COLLECTIONS</a></li>
				      	<li><a href="#">OUR STORY</a></li>
				      	<li><a href="#">CONTACT</a></li>
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

export default connect(mapStateToProps)(SubNav);
export { SubNav as SubNavNotConnected };
