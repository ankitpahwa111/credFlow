import React , {Component} from 'react';
import {Line} from 'react-chartjs-2'
class Chart1 extends Component {
    constructor(props){
        super(props);
        this.state={
            data : {
                labels : ["Jan","Feb","March","April","May"],
                datasets : [{
                    label : "Sales Trends",
                    backgroundColor : "rgba(30, 80, 132, 0.5)",
                    data : [15,10,15,18,15,25]
                },
                ]

            }
        }
    }
  render(){
    return (
    

        <div className="Mygraph">
          <Line
          options = {{
              responsive : true
          }}
          data = {this.state.data}
          ></Line>
        </div>
      
    );
  }
}

export default Chart1;
