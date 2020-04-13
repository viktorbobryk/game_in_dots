import React from 'react'
import styles from './Select.module.css'

const Select = props => {

  return (
      <div className={styles.Select}>
        <select
            id={props.id}
            onChange={props.onChange}
        >
          { props.options.map((option, index) => {
              if (index === 0){
                  return (
                      <option
                          hidden
                          defaultValue={option}
                          value={option}
                          key={option + index}
                      >
                          {option}
                      </option>
                  )
              }
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