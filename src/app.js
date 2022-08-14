import React from 'react';
import axios from "axios";
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import {useState} from 'react'

function App (props) {
 
    const [data,setData]=useState(null)
    const [requestParams, setRequestParams] = useState({})

  const callApi = async (requestParams) => {
    // if (requestParams.method === 'get') {
    // mock output
     await axios.get(requestParams.url).then( (response )=>{
      console.log("**********",response)
      const data = {
        headers: [response.headers], results: [response.data],
      };
      setData(data)
    });
    
    

   
   setRequestParams(requestParams)
    // this.setState({data, requestParams});
  }
  // else {
  //    data = {"body" : {} }
  // }
  // }
  
  
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  
}

export default App;
