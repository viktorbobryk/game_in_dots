import React from 'react'
import styles from './Input.module.css'

// function isInvalid({valid, touched, shouldValidate}) {
//     return !valid && shouldValidate && touched
// }

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [styles.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    // if (isInvalid(props)) {
    //     cls.push(styles.invalid)
    // }

    return (
        <div className={cls.join(' ')}>
            <input
                type={inputType}
                placeholder={props.placeholder}
                id={htmlFor}
                name="userName"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input