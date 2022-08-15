import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './form.scss';

function Form (props) {
const [method,setMethod]=useState('GET')
const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
let [TextArea,setTextArea] = useState(false);
const [request, setRequest] = useState('');
  function handleSubmit (e) {
    e.preventDefault();
    const formData = {
      method:method,
      url: url,
      request:request
    };
    props.handleApiCall(formData);
  }
const methodFunction = (x)=> {
  setMethod(x.target.id)
  setTextArea(false);
}
const urlFunction = (x)=> {
  setUrl(x.target.value)
}

function handleTextArea(e){
  e.preventDefault()
  setTextArea(true);
  setMethod(e.target.id);  
}
const requestSetState = (e) => {
  setRequest(e.target.value);
}
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url'data-testid='button' onChange={urlFunction}  type='text' />
            <Button variant="success" type="submit">GO!</Button>{' '}
          </label>
          <label className="methods">
            <Badge bg="primary" id="get" onClick={methodFunction}>GET</Badge>
            <span id="post"onClick={handleTextArea}>POST</span>
            <span id="put"onClick={handleTextArea}>PUT</span>
            <span id="delete"onClick={methodFunction}>DELETE</span>
          </label>
          <div>
          <label>Enter value : </label> 
        {
          
         TextArea &&
        
        <textarea
           
          onChange={requestSetState}
          rows={8}
          cols={35}
        />}
      </div>
        </form>
      </>
    );
  
}

export default Form;
