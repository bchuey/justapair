import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import './style.scss';

class Footer extends React.Component {

    static propTypes = {

    };

    render() {
        return (
            
	    	<footer>
	    		<Col xs={4}>
	    			<h3>HELP</h3>
	    			<ul>
	    				<li>Contact Us</li>
	    				<li>Store Locator</li>
	    				<li>Delivery</li>
	    				<li>Returns</li>
	    			</ul>
	    		</Col>
	    		<Col xs={4}>
		    		<h3>SITE INFO</h3>
	    			<ul>
	    				<li>About Us</li>
	    				<li>Terms &amp; Conditions</li>
	    				<li>Site Map</li>
	    				<li>FAQ</li>
	    			</ul>
	    		</Col>
	    		<Col xs={4}>
	    			<Row>
	    				<h3>GET EMAIL UPDATES</h3>
	    			</Row>
	    			<Row>
	    				<h3>CONNECT WITH US</h3>
	    			</Row>
	    		</Col>
	    	</footer>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(Footer);
export { Footer as FooterNotConnected };
