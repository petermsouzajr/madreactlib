import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
    return (
        <div key={index} className="input">
        <label className={`input__number ${state === '' ? 'gray' : 'blue'}`}>{index + 1}</label>
        <input placeholder={title} name={name} value={state} onChange={onChange}/>
        <label className="input__title">{title}</label>
        </div>
    )
}

export default Input;