import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.scss';

class MainNav extends React.Component {

    static propTypes = {

    };

    render() {
        return (
            <div id="main_nav" className="container-fluid">
                <div className="row">
                    <h3>Just A Pair.</h3>
            	</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(MainNav);
export { MainNav as MainNavNotConnected };
