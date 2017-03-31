import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SingleSizeComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };


    }

    render() {

      

        return (
            <div>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(SingleSizeComponent);
export { SingleSizeComponent as SingleSizeComponentNotConnected };
