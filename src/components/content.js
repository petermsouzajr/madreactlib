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
                    Well, <b>{this.renderLabel(data.color)}</b> <b>{this.renderLabel(data.pluralNoun)}</b>,  
                    can I call you <b>{this.renderLabel(data.adjectiveOne)}</b>? Great! I call all my friends <b>{data.adjectiveOne}</b>.
                    It's nice to finally <b>{this.renderLabel(data.celebOne)}</b> you, person-o a person-o -
                    inclusivityness is our number <b>{this.renderLabel(data.adjectiveTwo)}</b> concern here. 
                    It says here you've been at <b>{this.renderLabel(data.nounOne)}</b> corp. for 3 years, can I ask why youre looking for a <b>{this.renderLabel(data.numberOne)}</b>? 
                    You know, <b>{this.renderLabel(data.numberTwo)}</b> like us are a rare breed, real road <b>{this.renderLabel(data.nounTwo)}</b>, always grasping at the <b>{this.renderLabel(data.adjectiveThree)}</b>. 
                    Well, enough of the <b>{this.renderLabel(data.celebTwo)}</b> talk, lets get down to the <b>{this.renderLabel(data.celebThree)}</b> and <b>{this.renderLabel(data.adjectiveFour)}</b> of it, shall we? 
                    Under strengths, you've listed: <b>{this.renderLabel(data.nounThree)}</b> and <b>{this.renderLabel(data.nounThree)}</b>, that's bold of you, I admire a good <b>{data.celebFour}</b>, 
                    well, I think i've heard enough, <b>{this.renderLabel(data.adjectiveFive)}</b>!
                </p>
            </div>
        )
    }
}

export default Content;