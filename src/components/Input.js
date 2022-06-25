import React from 'react'

const Input = (props) => {

    const {
      id,
      name,
      type,
      placeholder,
      error,
      disabled,
      helperText,
      value,
      size,
      fullwidth,
      multiline,
      row, 
      startIcon=null,
      endIcon=null,
    } = props;

    const classes = `
      inputCtn
      ${error ? "error" : ""}
      ${disabled ? "disabled" : ""}
      ${fullwidth && "fullwidth"}
      `;

  return (
    <React.Fragment>
      <div className={classes}>
        <label htmlFor={props.id}>
          label
        </label>
        { !multiline ? 
          <input 
            id={`${id}`}
            type={`${type ? props.type : 'text'}`} 
            name={`${name ? props.name : 'input'}`}
            placeholder = {`${placeholder ? placeholder : 'Placeholder'}`}
            disabled = {disabled ? "disabled" : ""}
            value = {value && `${value}`}

            className = {`
              input 
              ${size === "sm" ? "small-input" : size === "md" ? "medium-input" : ""}
              ${startIcon && "inputWithStartIcon"}
              ${endIcon && "inputWithEndIcon"}
            `}
          /> : 
          <textarea row={row}></textarea>}
        {helperText && <p className='helper-text'>{helperText}</p>}
      </div>  
    </React.Fragment>
  )
}

export default Input