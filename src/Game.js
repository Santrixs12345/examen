import React, { Component } from 'react';
import logo from './logo.svg';
import papel from './papel.svg';
import piedra from './piedra.svg';
import tijeras from './tijeras.svg';
import './Game.css';

class Game extends Component {

    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(3),
            pointb: "",
            pointy: ""
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

    calculateText(random, number, pointb, pointy) {
    
    if (random === number) {
        return "empataron";
        
    }
     else {
        if (number === 1 && random === 2 || number === 1 && random === 3) {
            if (random === 2){
                pointb++
                return "perdiste"
            }
            if (random === 3){
                pointy++
                return "ganaste"
            }
        }
        if (number === 2 && random === 1 || number === 2 && random === 3) {
            if (random === 1){
                pointy++
                return "ganaste"
            }
            if (random === 3){
                pointb++
                return "perdiste"
            }
        }
        if (number === 3 && random === 1 || number === 3 && random === 2) {
            if (random === 1){
                pointb++
                return "perdiste"
            }
            if (random === 2){
                pointy++
                return "ganaste"
            }
        }
    }
    //1 es piedra
    //2 es papel
    //3 es tijeras
}

    handleOnClick = () => {
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);
        const pointb = parseInt(this.state.pointb);
        const pointy = parseInt(this.state.pointy);
        const text = calculateText(random, number, pointb, pointy);
        console.log("el random", random);
        console.log("bot", pointb);
        console.log("tu", pointy);

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
                <header>
                <img src={logo} className="App-logo" alt="logo" />
                </header>
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



function calculateText(random, number, pointb, pointy) {
    
    if (random === number) {
        return "empataron";
        
    }
     else {
        if (number === 1 && random === 2 || number === 1 && random === 3) {
            if (random === 2){
                pointb++
                return "perdiste"
            }
            if (random === 3){
                pointy++
                return "ganaste"
            }
        }
        if (number === 2 && random === 1 || number === 2 && random === 3) {
            if (random === 1){
                pointy++
                return "ganaste"
            }
            if (random === 3){
                pointb++
                return "perdiste"
            }
        }
        if (number === 3 && random === 1 || number === 3 && random === 2) {
            if (random === 1){
                pointb++
                return "perdiste"
            }
            if (random === 2){
                pointy++
                return "ganaste"
            }
        }
    }
    //1 es piedra
    //2 es papel
    //3 es tijeras
}

function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

