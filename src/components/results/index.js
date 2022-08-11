import React from 'react';
import Loading from "../loading/loading";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';
import './result.scss'
function Results (props) {
  console.log(props)
    return (
      <section data-testid='data'>
        <pre>{props.data ? <JSONPretty data={props.data} />: <Loading/>}</pre>
      </section>
    );
  
}

export default Results;
