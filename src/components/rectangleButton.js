import React from 'react';
import '../App.css';

class RectangleButton extends React.Component {
    render() {
        return (
            <div className="rectangle-button" id={this.props.id}>
                <div className="button-icon-div">
                    <img alt="Button Icon" className="button-icon" src={this.props.image} />
                </div>
                {this.props.name}
                {this.props.description}
            </div>  
         )
    }
}

export default RectangleButton;