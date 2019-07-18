import React from 'react';
import '../App.css';

class RectangleButton extends React.Component {
    render() {
        return (
            <div className = "rectangle-button">
                {this.props.name}
            </div>    
        );
    }
}

export default RectangleButton;