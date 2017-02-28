import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class FilterMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          
        };


    }

    render() {

        return (
            <div>
                <h2> Filter Goes Here </h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(FilterMenu);
export { FilterMenu as FilterMenuNotConnected };
