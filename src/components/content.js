import React, { Component } from 'react';
import David from '../images/david.png';
import Michael from '../images/michael.png';
class Content extends Component {

    constructor() {
        super()
        this.count = 1;
        this.child_count = 1;
    }

    UNSAFE_componentWillReceiveProps() {
        this.count = 1;
    }

    renderLabel(data){
        return [
            
            <span 
                className="card__content__label" 
                key={this.child_count++}>
                    {this.count++}
            </span>,
            <b 
                key={this.child_count++}>
                    {data}
            </b>
        ]
    }

    render() {
        const data = this.props.data;
        return (
            <div className="card__content">
                <div className="card__content__images">
                    <img src={David} alt="David Brent" />
                    <img src={Michael} alt="Michael Scott" />
                </div>
                <p>
                    Good Afternoon, <b>{this.renderLabel(data.nounOne.charAt(0).toUpperCase()+data.nounOne.slice(1).toLowerCase())} </b> 
                                    <b>{this.renderLabel(data.verbOne.charAt(0).toUpperCase()+data.verbOne.slice(1).toLowerCase())}</b>,  
                    can I call you <b>{this.renderLabel(data.pluralNoun.charAt(0).toUpperCase()+data.pluralNoun.slice(1).toLowerCase())}</b>? 
                    <br/>Great! I call all my friends <b>{data.pluralNoun.charAt(0).toUpperCase()+data.pluralNoun.slice(1).toLowerCase()}</b>.
                    <br/>It's nice to finally <b>{this.renderLabel(data.verbTwo)}</b> you, person-o a person-o -
                    inclusivityness is our number <b>{this.renderLabel(data.numberOne)}</b> concern. 
                    <br/>It says here you've been at <b>{this.renderLabel(data.nounTwo)}</b> corp. for 3 years, can I ask why youre looking for a <b>{this.renderLabel(data.nounThree)}</b>? 
                    <br/>You know, <b>{this.renderLabel(data.pluralNounTwo)}</b> like us are a rare breed, real road <b>{this.renderLabel(data.pluralAnimal)}</b>, always grasping at the <b>{this.renderLabel(data.nounFour)}</b>. 
                    <br/>Well, enough of the <b>{this.renderLabel(data.adjectiveOne)}</b> talk, lets get down to the <b>{this.renderLabel(data.popularDance)}</b> and <b>{this.renderLabel(data.nounFive)}</b> of it, shall we? 
                    <br/>Under strengths, you've listed: <b>{this.renderLabel(data.adjectiveTwo)}</b> and <b>{this.renderLabel(data.adjectiveThree)}</b>, that's bold of you, I admire a good <b>{data.adjectiveThree}</b>, 
                    <br/>Well, I think i've heard all that i need to hear. 
                    <br/><b>{this.renderLabel(data.exclamation)}</b>!
                </p>
            </div>
        )
    }
}

export default Content;