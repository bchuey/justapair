import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class TopNav extends React.Component {

    static propTypes = {

    };

    render() {
        return (
            <div id="top_nav" className="container-fluid">
                <div className="row">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><i className="fa fa-search fa-3x" aria-hidden="true"/></a></li>
                        <li><a href="#"><i className="fa fa-user fa-3x" aria-hidden="true"/></a></li>
                        <li><a href="#"><i className="fa fa-eye fa-3x" aria-hidden="true"/></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag fa-3x" aria-hidden="true"/></a></li>
                    </ul>
            	</div>
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
