import React from 'react';

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

  const callApi = (requestParams) => {
    // if (requestParams.method === 'get') {
    // mock output
    const data = {
      header : [
        {"content-Type": 'application/json'},
  
       
      ],
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
   setData(data)
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
