import React from 'react';
import axios from "axios";
import './app.scss';
import Button from 'react-bootstrap/Button';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import {useState,useEffect,useReducer} from 'react'
import reducer , {addHistory,emptyHistory} from './components/reducer/reducer';


const initialState = {
  history: [],
 
}

function App (props) {
 
    const [data,setData]=useState([])
    const [requestParams, setRequestParams] = useState({})
    const [show,setShow]=useState(false)
    const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(() => {
      console.log(` test for CHANGE:method : ${requestParams.method}`);
    }, [requestParams.method])

  const callApi = async (requestParams) => {
   
    if (requestParams.method === 'get') {
    
     await axios.get(requestParams.url).then( (response )=>{
      
      const data ={
        headers: response.headers, results: response.data,
      };
      let send= {
        requestParams:requestParams,
        data:[data]
      }
      dispatch(addHistory(send)) 
      setData(data)
      console.log(state.history,"1111111111111111")
    })
    .catch((e) => {
      console.log(e);
      setData(["loading... つづく"])
      
    });

    }
   else  if (requestParams.method === 'post'){
      await axios.post(requestParams.url,requestParams.request).then((response)=>{
        let send= {
          requestParams:requestParams,
          data:[null]
        }
        dispatch(addHistory(send))
        setData([...data,response.request])
    
    })
    .catch((e) => {
      console.log(e);
      setData(["loading... つづく"])
      
    });
  }
   else  if (requestParams.method === 'delete'){
      await axios.delete(requestParams.url).then((response)=>{
        let send= {
          requestParams:requestParams,
          data:[null]
        }
        dispatch(addHistory(send))
        setData("deleted successfully")
    
    })
    .catch((e) => {
      console.log(e);
      setData(["loading... つづく"])
      
    });
  }
  
   setRequestParams(requestParams)
    // this.setState({data, requestParams});
  }
  function showHistory(){
    setShow(true)
       }
  function hideHistory(){
    setShow(false)
       }
  
 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>

        <ul>
        <Button variant="outline-primary" onClick={showHistory}>show History</Button>{' '}

        <Button variant="outline-secondary" onClick={hideHistory}>Hide History</Button>
        <Button variant="outline-warning" onClick={() => dispatch(emptyHistory())}>Clear History</Button>
        
                { show &&
                    state.history.map((history, idx) => {
                    console.log(history.data,"1212121211")
                        return (
                          
                           <>
                            <li  key={idx} >{history.requestParams.method}</li>
                            <li  >{history.requestParams.url}</li>
                            {history.data.map((e)=>{
                              console.log(e,"777777777777777777777")
                              return ( 
                                <li  >{e?JSON.stringify(e.results):"null"}</li>
                              )

                            })}
                            
                            </>
                        )
                    })
                }

            </ul>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  
}

export default App;
