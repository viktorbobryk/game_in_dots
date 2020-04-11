import React from 'react'
import styless from './Button.module.css'

const Button = props => {
  const cls = [
    styless.Button,
    styless[props.type]
  ];

  return (
      <button
          onClick={props.onClick}
          className={cls.join(' ')}
          disabled={props.disabled}
      >
        {props.children}
      </button>
  )
};

export default Button