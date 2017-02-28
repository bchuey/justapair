import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
                <div className="jumbotron">
                    <TopNav/>
                    <MainNav/>
                    <SubNav/>
                    <div className="container-fluid">
                        <div className="row">
                            <h1 className="text-center">NEW ARRIVALS</h1>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row text-center">
                            <button className="btn btn-primary">SHOP NOW</button>
                        </div>
                    </div>
                    
                </div>
                <div className="container-fluid">
                    <div id="must_haves" className="col-xs-6">
                        <h3 id="must_haves_heading">MUST HAVES</h3>
                    </div>
                    <div id="inspirations" className="col-xs-6">
                        <h3 id="inspirations_heading">PERSONAL <br/>OUTFIT <br/>INSPIRATIONS</h3>
                    </div>
                </div>
                <div className="container-fluid">
                    <h3 className="text-center">STAY CONNECTED</h3>
                    <div className="row">

                    </div>
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
