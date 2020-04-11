import React from 'react'
import styles from './Select.module.css'

const Select = props => {

  return (
      <div className={styles.Select}>
        <select
            id={props.id}
            onChange={props.onChange}
        >
            <option hidden>Pick game mode</option>
          { props.options.map((option, index) => {
            return (
                <option
                    value={option}
                    key={option + index}
                >
                  {option}
                </option>
            )
          }) }
        </select>
      </div>
  )
}

export default Select