import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.scss';

class Footer extends React.Component {

    static propTypes = {

    };

    render() {
        return (
            
	    	<footer>
	    		<div className="col-xs-4">
	    			<h3>HELP</h3>
	    			<ul>
	    				<li>Contact Us</li>
	    				<li>Store Locator</li>
	    				<li>Delivery</li>
	    				<li>Returns</li>
	    			</ul>
	    		</div>
	    		<div className="col-xs-4">
		    		<h3>SITE INFO</h3>
	    			<ul>
	    				<li>About Us</li>
	    				<li>Terms &amp; Conditions</li>
	    				<li>Site Map</li>
	    				<li>FAQ</li>
	    			</ul>
	    		</div>
	    		<div className="col-xs-4">
	    			<div className="row">
	    				<h3>GET EMAIL UPDATES</h3>
	    			</div>
	    			<div className="row">
	    				<h3>CONNECT WITH US</h3>
	    			</div>
	    		</div>
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
