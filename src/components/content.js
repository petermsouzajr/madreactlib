import React, { Component } from 'react';
import David from '../images/david.png';
import Michael from '../images/michael.png';
class Content extends Component {

    constructor() {
        super()
        this.count = 1;
        this.child_count = 1;
    }

    componentWillReceiveProps() {
        this.count = 1;
    }

    renderLabel(data){
        return [
            <span className="card__content__label" key={this.child_count++}>{this.count++}</span>,
            <b key={this.child_count++}>{data}</b>
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
                    Ladies and gentlemen, this is {this.renderLabel(data.color)} Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{this.renderLabel(data.pluralNoun)}</b> and the <b>{this.renderLabel(data.adjectiveOne)}</b> Yankees. <b>{this.renderLabel(data.celebOne)}</b> is pitching for the Yankees. Here's the pitch! It's a low <b>{this.renderLabel(data.adjectiveTwo)}</b> ball that just cuts the inside of the <b>{this.renderLabel(data.nounOne)}</b> for a strike. That makes the count <b>{this.renderLabel(data.numberOne)}</b> strikes and <b>{this.renderLabel(data.numberTwo)}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{this.renderLabel(data.nounTwo)}</b> out to <b>{this.renderLabel(data.adjectiveThree)}</b> field. But <b>{this.renderLabel(data.celebTwo)}</b> is coming up fast and has it for the second out. The next batter up is <b>{this.renderLabel(data.celebThree)}</b>, the Cleveland <b>{this.renderLabel(data.adjectiveFour)}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{this.renderLabel(data.nounThree)}</b>. <b>{this.renderLabel(data.celebFour)}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{this.renderLabel(data.adjectiveFive)}</b> League!
                </p>
            </div>
        )
    }
}

export default Content;