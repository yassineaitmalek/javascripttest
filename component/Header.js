import { Button } from "./Button";

const Header = (props) => {

  const onClick = (e) => {
          console.log("heeyyyy")
  }

  return (
  <header className='header'>
        <h1>{props.title}</h1>
        <Button color ={props.showadd ? "green" : "red"} text={props.showadd ? "Add" : "Close"} onClick = {props.onAdd}/>
       
  </header>
  
  );
};

Header.defaultProps = {
        title : 'Task Tracker'
}
export default Header;
