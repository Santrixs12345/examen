import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    
    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(3)
        }

        
    }

    handleOnChange = e => {
        
        const {target: {value}} = e;

        console.log(value);

        if(e.keyCode === 13) {
            e.preventDefault();
        }

        if(value.trim() > 0) {
            this.setState({
                number: value
            });
        }
        
         this.setState({
            message: "",
        });
    }

    handleOnClick = () => {
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);
        const text = calculateText(random);
        console.log(random);

        if (number !== random){
            this.setState({
                number: "",
                message: text,
            });
        } else {
            this.setState({
                message: text,
            });
        }
        
    }

    render() {
        
        return (
            <div className="Game">
                <h2 className={(this.state.message)&& 'flickering'}>{this.state.message}</h2>
                <p>Que escojes?</p>
                <p>1 es piedra - 2 es papel - 3 es tijeras</p>
                <input
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                />
                <button onClick={this.handleOnClick}>Escojo</button>
               
            </div>
        );
    }

}

export default Game;

function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(random) {
    
    if (random === 1) {
        return "Escojio piedra";
    }
     else {
        if (random === 2) {
            return "Escojio papel"
        } else {
            return "Escojio tijeras"
        }
     }
    
}

