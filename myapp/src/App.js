import React from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Chart1 from './Components/Chart1'
import Chart2 from './Components/Chart2'

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        <br />
        <br />
        <p class="flow-text" style={{ marginLeft: "350px" }}>Sales Trends</p>
        <Chart1 />
        <p class="flow-text" style={{ marginLeft: "350px" }}>Receivable Turnover Time</p>
        <br />
        <Chart2 />
        <br />
        <span className="left flow-text" style={{ marginLeft: "200px" }}>Average Receivalbe Turnover Time </span>
        <span className="right flow-text" style={{ marginRight: "200px" }}>23 Days</span>
        <br />
        <br />
        <br/>
        <br/>

        <a className="waves-effect waves-light btn btn-large mybtn" style={{ marginLeft: "500px" }}>Current Receivalbe Turnover Time</a> <t/><t/>
        <a className="waves-effect waves-light btn btn-large mybtn" style={{ marginLeft: "200px" }}>Credit Periods</a>  <t/><t/><t/><t/><t/> <br/> <br/>
        <a className="waves-effect waves-light btn btn-large mybtn" style={{ marginLeft: "500px" }}>Credit Amount</a>  <t/><t/><t/>
        <a className="waves-effect waves-light btn btn-large mybtn" style={{ marginLeft: "200px" }}>Total Outstanding Amount</a>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </BrowserRouter>
  );
}

export default App;
