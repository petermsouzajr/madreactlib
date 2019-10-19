import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
        const label = "label";
        const inputs = "input";

    const blurChange = (event) => {
        event.target.placeholder = title
        document.getElementById(label + (index + 1)).className = `input__number ${state === '' ? 'gray' : 'blue'}`;
        document.getElementById(inputs + (index + 1)).className = `${state === '' ? 'none' : 'highlight'}`;
    }
                
    const focusChange = (event) => {
        event.target.placeholder = ""
        document.getElementById(label + (index + 1)).className = 'input__number blue';
        document.getElementById(inputs + (index + 1)).className = 'highlight';
}

    return (
        <div key={index} className="input">
        <label className='input__number gray' id={label + (index + 1)}>{index + 1}</label>
        <input 
            id={inputs + (index + 1)}
            className='none'
            placeholder={title} 
            name={name} 
            value={state}
            onChange={onChange} 
            onBlur={blurChange}
            onFocus={focusChange}
        />
        <label className="input__title">{title}</label>
        </div>
    )
}

export default Input;