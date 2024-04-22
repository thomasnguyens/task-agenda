import Button from "./Button"; // to import from another component
const Header = (props) => {


    return ( 
        <header className='header'>
            <h1> {props.title} </h1>
            {/* if newTask form is toggled, text = add is shown, else text = close */}
            <Button className= "btn btn-light" color= {props.showAdd ? 'red': 'green'} text = {props.showAdd ? 'Close': 'Add'} onClick= {props.onAdd}/> {/* to import from another component */}
        </header>
     );
}
 
export default Header;