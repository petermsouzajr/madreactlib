import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    nounOne: '',
    verbOne: '',
    pluralNoun: '',
    verbTwo: '',
    numberOne: '',
    nounTwo: '',
    nounThree: '',
    pluralNounTwo: '',
    pluralAnimal: '',
    nounFour: '',
    adjectiveOne: '',
    foodOne: '',
    foodTwo: '',
    emotionOne: '',
    colorOne: '',
    exclamation: '',
    contentVisible: false,
    formFilled: false     
}

class Card extends Component { 

    constructor() {
        super()
        this.state = INITIAL_STATE;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.buttonLogic = this.buttonLogic.bind(this);
        this.formFilled = this.formFilled.bind(this);
    }

    formFilled() {
        let count = 0;
        for (var property in INITIAL_STATE) {
            if (Object.prototype.hasOwnProperty.call(INITIAL_STATE, property)) {
                count++;
                if (count >= 16) { count = 16 }
                if (document.getElementById('input'+count).value === '' 
                && (this.state.contentVisible === false || this.state.contentVisible === true)){
                    //set false
                    this.setState({ formFilled: false })
                    document.getElementById('generateButton').className = 'card__gray'
                    break                            
                } 
                else if (document.getElementById('input'+count).value !== ''){ 
                
                    //set true
                    //console.log(this.state.formFilled)
                    this.setState({ formFilled: true })
                    document.getElementById('generateButton').className = 'card__generate'
            
                
                }
            }
        }
    }

    contentLogic() {}

    buttonLogic() {
        if (this.state.formFilled === false) {
            document.getElementById('generateButton').className = 'card__gray'
        } else if (this.state.formFilled === true) {
            document.getElementById('generateButton').className = 'card__generate'
        }
    }

    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value })

        this.formFilled()
        //this.buttonLogic()
        // var count = 0;
        // for (var property in INITIAL_STATE) {
        //     if (Object.prototype.hasOwnProperty.call(INITIAL_STATE, property)) {
        //         count++;
        //             if (document.getElementById('input'+count).value === ''){
        //                 document.getElementById('generateButton').className = 'card__gray'
        //                 break                            
        //             } else
        //             {
        //                 document.getElementById('generateButton').className = 'card__generate'
        //             if (count >= 16) { break
        //             }
        //         }
        //     }
        // }   
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if (document.getElementById('generateButton').className === 'card_generate'
        && this.state.formFilleds) {
            document.getElementById('generateButton').className = 'card__clear'}
        
        else if (document.getElementById('generateButton').className === 'card__clear') {
            document.getElementById('generateButton').className = 'card_gray'
        }
        //{`card__${!this.state.contentVisible ? 'generate' : 'clear'}`}
        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)

                var count = 0;
            
                for (var property in INITIAL_STATE) {
                    if (Object.prototype.hasOwnProperty.call(INITIAL_STATE, property)) {
                        count++;
                        
                        document.getElementById('label'+count).className = 'input__number gray';
                        document.getElementById('input'+count).className = 'none';
                        if (count >= 16) { break
                    }
                    }
                }            
    

        } else {
            this.setState({ contentVisible: true })
        }
    }

    render() {

        const inputData = [

            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Verb', state: this.state.verbOne, name: 'verbOne'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Verb', state: this.state.verbTwo, name: 'verbTwo'},

            {title: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Plural Noun', state: this.state.pluralNounTwo, name: 'pluralNounTwo'},

            {title: 'Plural Animal', state: this.state.pluralAnimal, name: 'pluralAnimal'},
            {title: 'Noun', state: this.state.nounFour, name: 'nounFour'},
            {title: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {title: 'Food', state: this.state.foodOne, name: 'foodOne'},

            {title: 'Food', state: this.state.foodTwo, name: 'foodTwo'},
            {title: 'Emotion', state: this.state.emotionOne, name: 'emotionOne'},
            {title: 'Color', state: this.state.colorOne, name: 'colorOne'},
            {title: 'Exclamation', state: this.state.exclamation, name: 'exclamation'},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                    {
                        inputData.map((data, index) => { 
                            return Input( (data), this.handleInputChange, index ) 
                        })
                    }
                </div>
                <button id='generateButton' className='card__gray' type="submit">{!this.state.contentVisible ? 'Generate' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;