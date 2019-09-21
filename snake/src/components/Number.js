import React from "react";
import ReactDom from "react-dom";
import styles from './App.css'




export default class Number extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        min: 1,
        max: 6,
        number:1,
        total:0,
        arr:[1,2,3,4,5,6,7,8,9,10]
      }
    }
  
    componentDidMount() {
     this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
    }
    
    generateNumber = (min, max) => {
      return Math.floor(Math.random()*(max-min+1)+min)
    }
    
    getInputs = () => {
      if(this.state.min > this.state.max ){
        const minTemp = this.state.min
        const maxTemp = this.state.max
        const total=this.state.number
        this.setState(
        { 
          min: maxTemp,
          max: minTemp,
          total:total,
        }, () =>
          this.setState({
            number: this.generateNumber(this.state.min, this.state.max) , 
            total:this.state.total+this.state.number
          })
        );
      } else {
        this.setState({
          number: this.generateNumber(this.state.min, this.state.max)  ,
          total:this.state.total+this.state.number
        })
      }
    }
    
    render() {
      console.log(this.state.total);
      console.log(this.state.number);
      return (
        <div>
          <div className="jumbotron bg">
          <h2 className="display-4 text-center text-white"><b>Snake and lodder</b></h2>
          <hr></hr>
            <div className="row">
              <div className="col-8">
              <div className="table-responsive">
                 <table className="table table-dark">
                   </table>
                   <tbody>
                       <p><i class="fa fa-user fa-2x"></i></p>
                     
                   
                    {
                    this.state.arr.map((value,index)=>{
                      
                        return(
                            <tr className="text-center text-white p-5">
                            <th  className="px-3 py-2"scope="row"key={index}><b>{index+1}</b></th>
                            <td className="px-3">{index+11}</td>
                            <td className="px-3">{index+21}</td>
                            <td className="px-3">{index+31}</td>
                            <td className="px-3">{index+41}</td>
                            <td className="px-3">{index+51}</td>
                            <td className="px-3">{index+61}</td>
                            <td className="px-3">{index+71}</td>
                            <td className="px-3">{index+81}</td>
                            <td className="px-3">{index+91}</td>      
                            </tr>
                        )
                       // console.log(this.state.count) ;   
                    })}  
                           
                    </tbody>
                   </div>
              </div>
              <div className="col-4 bg-transparent">
                   <p id="rNum">{ this.state.number }</p><br></br>
                   <button className="imagestyle" type="submit" onClick={ this.getInputs }>
                     <span class="border-0">
                       <img src="data:image/jpeg;base64,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" />
                    </span></button>
              </div>
            </div>

      </div>
        </div>
      );
    }
  }
  