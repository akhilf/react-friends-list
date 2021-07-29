
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {title}) => {
    return (
        <header className='header'>
           <h1 data-testid="header">{title}</h1> 
        </header>
    )
}

Header.defaultProps = {
    title : 'Friends List'
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header;