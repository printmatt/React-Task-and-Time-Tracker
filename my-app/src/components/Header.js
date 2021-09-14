import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const onClick = (e) => {
        console.log(e);
    }

    return (
        <header>
            <h1 >{title}</h1>

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

const headingStyle = {
    color:'red',
    backgroundColor: 'black',
}

export default Header


// user rafce to get boiler plate of this component

//const Header = ({title}) will get the title as input and 
//const Header = ({props}}) will get the whole prop as input