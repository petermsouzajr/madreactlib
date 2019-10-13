import React from 'react';

const Input = ({title, state, name}, onChange, index, blur, focus) => {
    
    return (
        <div key={index} className="input">
        <label className={`input__number ${state === '' ? 'gray' : 'blue'}`} id={index + 1}>{index + 1}</label>
        <input 
            placeholder={title} 
            name={name} 
            value={state}
            onChange={onChange} 
            onBlur={blur}
            onFocus={focus}
        />
        <label className="input__title">{title}</label>
        </div>
    )
}

export default Input; 
//{(e) => e.target.placeholder = title}; 
//{(e) => e.target.placeholder = ""}; 