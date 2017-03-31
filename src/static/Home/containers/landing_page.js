import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Jumbotron, Row, Col, Button } from 'react-bootstrap';

import './style.scss';
import reactLogo from './images/react-logo.png';
import reduxLogo from './images/redux-logo.png';

import MainNav from '../components/main_nav';
import SubNav from '../components/sub_nav';
import TopNav from '../components/top_nav';
import Footer from '../components/footer';

class LandingPageView extends React.Component {

    static propTypes = {

    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <TopNav/>
                    <MainNav/>
                    <SubNav/>
                    <div className="container-fluid">
                        <Row>
                            <h1 className="text-center">NEW ARRIVALS</h1>
                        </Row>
                    </div>
                    <div className="container-fluid">
                        <Row bsClass="text-center">
                            <Button bsClass="btn-primary">SHOP NOW</Button>
                        </Row>
                    </div>
                    
                </Jumbotron>
                <div className="container-fluid">
                    <Col xs={6} id="must_haves">
                        <h3 id="must_haves_heading">MUST HAVES</h3>
                    </Col>
                    <Col xs={6} id="inspirations">
                        <h3 id="inspirations_heading">PERSONAL <br/>OUTFIT <br/>INSPIRATIONS</h3>
                    </Col>
                </div>
                <div className="container-fluid">
                    <h3 className="text-center">STAY CONNECTED</h3>
                    <Row>

                    </Row>
                </div>
                <div className="container-fluid">
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(LandingPageView);
export { LandingPageView as LandingPageViewNotConnected };
