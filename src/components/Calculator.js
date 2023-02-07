import classes from './Calculator.module.css';
import { FormGroup, Label,Button } from "reactstrap";
import { useState } from 'react';
import refreshIcon from '../assets/img/refresh-icon.png';
import Calculator from '../assets/img/calculator image.png';
const UserProfile = () => {
  const [enteredNumber, setenteredNumber] = useState([]);
  const [resultValue, setresultValue] = useState('');
  const [errorMessage, seterrorMessage] = useState(null);
  const changeExpressionHandler = (evt)=>{ 
setenteredNumber(evt.target.value);
  }
const evaluateExpressionHandler =(event)=>{
  event.preventDefault();
  let valueArray = []
 valueArray.push(enteredNumber);
try {
  const x =evalRpn(JSON.parse(valueArray));
  setresultValue(x);
} catch (error) {
  seterrorMessage('please enter a valid expression in the format  ["2.1","1.7","+","3","*"]')
}
}
const reloadAppHandler = ()=>{
  setenteredNumber([]);
  setresultValue('');
  seterrorMessage(null);
}
const evalRpn =(expr)=>
{
  
    let stackArray = [];
   
    for (const element of expr)
    {
     
        
        if (element !== "+" && element !== "-" && element !== "/"
            && element !== "*") {
              stackArray.push(parseFloat(element));
            
        }
       
       
        else {
            let b = parseFloat(stackArray.pop());
            let a = parseFloat(stackArray.pop());
            if (element === "+")
            stackArray.push(a + b);
            else if (element === "-")
            stackArray.push(a - b);
            else if (element === "*")
            stackArray.push(a * b);
            else
            stackArray.push(parseInt(a / b));
        }
    }
   
    return parseFloat(stackArray[stackArray.length-1]).toFixed(1);
}


  
  return (
    <main className={classes.profile}>
      <h2>My Calculator</h2>
      
      <img src={Calculator} height='80px' width='80px' alt='calculator'/>
      <br/>
      <FormGroup>
              <Label
                for="exampleEmail"
                style={{ fontWeight: "600", size: "14px" }}
              >
                Enter an arithmetic expression in a Reverse Polish Notation:
              </Label>
              <input
             className={classes.input}
                style={{ fontSize: "12px" }}
                placeholder="Enter an arithmetic expression in a Reverse Polish Notation"
                 value={enteredNumber}
                onChange={changeExpressionHandler}
               
              />
              
            </FormGroup>

           <br/>
          {resultValue !== '' && errorMessage === null &&<FormGroup>
              <Label
                for="exampleEmail"
                style={{ fontWeight: "600", size: "14px" }}
              >
              The result of the above expression is:
              </Label>
             <h3>{resultValue}</h3>
              
            </FormGroup>}
            <div style={{display:'flex',marginLeft:'250px'}}>

            
            <Button onClick={evaluateExpressionHandler}>Calculate</Button>
            &nbsp;&nbsp;
           
                   <img src={refreshIcon} alt='refreshIcon' width='50px' height='50px' onClick={reloadAppHandler} title='reload calculator'/>
                   </div>      
{errorMessage!== null}{
  <p style={{color:'red'}}>{errorMessage}</p>
}
    </main>
  );
};

export default UserProfile;
