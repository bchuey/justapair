import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Jumbotron, Row, Col, Button } from 'react-bootstrap';

class AltNav extends React.Component {

    static propTypes = {

    };

    render() {
        return (
            <div>
            	<nav className="navbar navbar-default">
				  <div className="container-fluid">
				   
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">JUST A PAIR.</a>
				    </div>

				    
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">COLLECTIONS <span className="sr-only">(current)</span></a></li>
							<li><a href="#">OUR STORY</a></li>
							<li><a href="#">CONTACT</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#"><i className="fa fa-search fa-3x" aria-hidden="true"/></a></li>
							<li><a href="#"><i className="fa fa-user fa-3x" aria-hidden="true"/></a></li>
							<li><a href="#"><i className="fa fa-eye fa-3x" aria-hidden="true"/></a></li>
							<li><a href="#"><i className="fa fa-shopping-bag fa-3x" aria-hidden="true"/></a></li>
						</ul>
				    </div>
				  </div>
				</nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(AltNav);
export { AltNav as AltNavNotConnected };
