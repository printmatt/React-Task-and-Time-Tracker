import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color,text, onAdd}) => {

    

    return (
            <button 
            style={{backgroundColor: color}}
            onClick = {onAdd}
            className = 'btn'>
                {text}</button>
    )
}

Button.defaultProps = {
    color: 'blue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onAdd: PropTypes.func,
    

}

export default Button
