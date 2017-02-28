import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class OutfitSuggestions extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            product: {
                'name': 'Cropped High-Waisted Jeans',
                'price': 23.00,
                'description': 'Blah blah blah',
                'material': 'synthetic cotton and fiber',
                'reviews': [
                    {'id':1,'content':'It is great'},
                    {'id':2,'content':'It is awesome'},
                    {'id':3,'content':'It is good'},
                ]

            }
        };


    }

    render() {

      

        return (
            <div className="container">
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(OutfitSuggestions);
export { OutfitSuggestions as OutfitSuggestionsNotConnected };
