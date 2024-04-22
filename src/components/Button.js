// import PropTypes from 'prop-types' // in order to add default props

const Button = (props) => {
    

    return (
        // calling onClick from header.js
        <button onClick = {props.onClick} className='btn' style = {{backgroundColor: props.color}}>
            {props.text}
        </button>
    )
}
 


// Button.propTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,

// }
export default Button;