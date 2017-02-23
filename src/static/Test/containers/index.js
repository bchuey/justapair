import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class TestView extends React.Component {


    render() {
        return (
            <div className="container">
                
                <div className="text-center">
                    <h1>Test Container</h1>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(TestView);
export { TestView as TestViewNotConnected };
