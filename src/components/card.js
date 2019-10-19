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
    popularDance: '',
    nounFive: '',
    adjectiveTwo: '',
    adjectiveThree: '',
    exclamation: '',
    contentVisible: false        
}

class Card extends Component { 

    constructor() {
        super()
        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)
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
            {title: 'Popular Dance', state: this.state.popularDance, name: 'popularDance'},

            {title: 'Noun', state: this.state.nounFive, name: 'nounFive'},
            {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
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
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Generate' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;